const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * Medusa Cloud-related environment variables
 */
const S3_HOSTNAME = process.env.MEDUSA_CLOUD_S3_HOSTNAME
const S3_PATHNAME = process.env.MEDUSA_CLOUD_S3_PATHNAME

// Derive backend hostname from the backend URL env var so that product
// images uploaded to the Medusa backend (local file storage) are allowed
// by Next.js — both in local dev and on Railway/production.
function backendRemotePattern() {
  const raw = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL
  if (!raw) return []
  try {
    const url = new URL(raw)
    return [
      {
        protocol: url.protocol.replace(":", ""),
        hostname: url.hostname,
        ...(url.port ? { port: url.port } : {}),
      },
    ]
  } catch {
    return []
  }
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "*.s3.*.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.s3.amazonaws.com",
      },
      ...backendRemotePattern(),
      ...(S3_HOSTNAME && S3_PATHNAME
        ? [
            {
              protocol: "https",
              hostname: S3_HOSTNAME,
              pathname: S3_PATHNAME,
            },
          ]
        : []),
    ],
  },
}

module.exports = nextConfig
