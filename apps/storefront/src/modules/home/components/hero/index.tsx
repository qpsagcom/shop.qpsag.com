import { getLocale } from "@lib/data/locale-actions"
import { getTranslator } from "@lib/i18n/translations"
import HeroMotion from "./hero-motion"

const Hero = async () => {
  const currentLocale = await getLocale()
  const translate = getTranslator(currentLocale)

  return (
    <HeroMotion
      title={translate("hero_title")}
      subtitle={translate("hero_subtitle")}
      cta={translate("hero_cta")}
      ctaSecondary={translate("hero_cta_secondary")}
      locale={currentLocale ?? "en"}
    />
  )
}

export default Hero
