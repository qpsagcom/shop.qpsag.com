import { AbstractFileProviderService, MedusaError } from "@medusajs/framework/utils"
import fsp from "fs/promises"
import path from "path"
import { createWriteStream, createReadStream } from "fs"

const backendUrl = () =>
  (process.env.BACKEND_URL || "http://localhost:9000").replace(/\/$/, "")

const uploadDir = () => path.join(process.cwd(), "static")

const fileUrl = (key: string) => `${backendUrl()}/static/${key}`

class QpsFileService extends AbstractFileProviderService {
  static identifier = "localfs"

  async upload(file: {
    filename?: string
    content: string
    access?: string
  }): Promise<{ key: string; url: string }> {
    if (!file?.filename) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "No filename provided")
    }
    const parsed = path.parse(file.filename)
    const key = `${Date.now()}-${parsed.base}`
    const dir = uploadDir()
    await fsp.mkdir(dir, { recursive: true })

    let content: Buffer
    try {
      const decoded = Buffer.from(file.content, "base64")
      content =
        decoded.toString("base64") === file.content
          ? decoded
          : Buffer.from(file.content, "utf8")
    } catch {
      content = Buffer.from(file.content, "binary")
    }
    await fsp.writeFile(path.join(dir, key), content)
    return { key, url: fileUrl(key) }
  }

  async getUploadStream(fileData: { filename?: string }) {
    if (!fileData?.filename) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "No filename provided")
    }
    const parsed = path.parse(fileData.filename)
    const key = `${Date.now()}-${parsed.base}`
    const dir = uploadDir()
    await fsp.mkdir(dir, { recursive: true })
    const writeStream = createWriteStream(path.join(dir, key))
    const promise = new Promise<{ url: string; key: string }>((resolve, reject) => {
      writeStream.on("finish", () => resolve({ url: fileUrl(key), key }))
      writeStream.on("error", reject)
    })
    return { writeStream, promise, url: fileUrl(key), fileKey: key }
  }

  async delete(
    files: { fileKey: string } | { fileKey: string }[]
  ): Promise<void> {
    const list = Array.isArray(files) ? files : [files]
    await Promise.all(
      list.map(async (f) => {
        try {
          await fsp.unlink(path.join(uploadDir(), f.fileKey))
        } catch (e: any) {
          if (e.code !== "ENOENT") throw e
        }
      })
    )
  }

  async getDownloadStream(file: { fileKey: string }) {
    return createReadStream(path.join(uploadDir(), file.fileKey))
  }

  async getAsBuffer(file: { fileKey: string }): Promise<Buffer> {
    return fsp.readFile(path.join(uploadDir(), file.fileKey))
  }

  async getPresignedDownloadUrl(file: { fileKey: string }): Promise<string> {
    const p = path.join(uploadDir(), file.fileKey)
    await fsp.access(p, fsp.constants.F_OK)
    return fileUrl(file.fileKey)
  }

  async getPresignedUploadUrl(fileData: {
    filename: string
  }): Promise<{ url: string; key: string }> {
    return { url: "/admin/uploads", key: fileData.filename }
  }
}

export default QpsFileService
