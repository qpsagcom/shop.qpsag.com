import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Button, Heading } from "@modules/common/components/ui"

const Hero = async () => {
  const currentLocale = await getLocale()
  const translate = getTranslator(currentLocale)

  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-tight text-ui-fg-base font-semibold tracking-tight"
          >
            {translate("hero_title")}
          </Heading>
          <Heading
            level="h2"
            className="text-2xl leading-10 text-ui-fg-subtle font-normal mt-2"
          >
            {translate("hero_subtitle")}
          </Heading>
        </span>
        <LocalizedClientLink href="/store">
          <Button variant="primary" size="large">
            {translate("hero_cta")}
          </Button>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default Hero
