export const siteConfig = {
  template: {
    version: "1.0.0",
    citySlug: "marbella",
    leadPath: "/woning-aanmelden/",
    thankYouPath: "/bedankt/",
    sourceWebsite: "verhuurbeheermarbella.nl",
  },
  brand: {
    name: "Verhuurbeheer Marbella",
    legalName: "Verhuurbeheer Spanje",
    parentUrl: "https://www.verhuurbeheerspanje.nl/",
  },
  location: {
    city: "Marbella",
    region: "Costa del Sol",
    language: "nl-NL",
    areas: ["Marbella Centro","Golden Mile","Nueva Andalucía","Puerto Banús","Sierra Blanca","Elviria","Los Monteros"],
  },
  assets: {
    logo: "/vbs-logo-marbella.webp",
    hero: "/marbella-hero.webp",
    social: "/luxe-woning-marbella-zeezicht.webp",
    signup: "/zonnig-terras-zeezicht-marbella.webp",
  },
  domain: "https://verhuurbeheermarbella.nl",
  contact: { email: "contact@verhuurbeheerspanje.nl", whatsapp: "31852128105" },
  pricing: { holidayRental: "Vanaf 18%", midterm: "Eenmalig 1 maand huur", longterm: "Eenmalig 1 maand huur" },
  social: {
    instagram: "https://www.instagram.com/verhuurbeheer_spanje/",
    facebook: "https://www.facebook.com/verhuurbeheerspanje/",
  },
  seo: {
    title: "Verhuurbeheer Marbella | Voor Nederlandse eigenaren",
    description: "Fullservice verhuurbeheer in Marbella voor Nederlandse eigenaren. Vakantieverhuur vanaf 18%, midterm, langetermijn en lokaal vastgoedbeheer.",
    primaryKeywords: [
      "verhuurbeheer Marbella",
      "Nederlandse verhuurmakelaar Marbella",
      "sleutelbeheer Marbella",
      "vakantieverhuurbeheer Marbella",
      "vastgoedbeheer Marbella",
      "woningbeheer Marbella",
      "vakantiewoning verhuren Marbella",
      "Airbnb beheer Marbella",
      "verhuurlicentie Marbella",
      "appartement verhuren Marbella",
      "villa verhuren Marbella",
      "appartement verhuren Golden Mile",
      "vastgoedbeheer Nueva Andalucía",
    ],
    longTailKeywords: [
      "Nederlandstalig verhuurbeheer voor woningeigenaren in Marbella",
      "Nederlandse verhuurmakelaar voor appartement in Marbella",
      "sleutelbeheer voor tweede woning in Marbella",
      "vakantiewoning professioneel laten verhuren in Marbella",
      "Airbnb en Booking beheer voor appartement in Marbella",
      "fullservice vakantieverhuurbeheer aan de Costa del Sol",
      "lokaal vastgoedbeheer voor tweede woning in Marbella",
      "villa verhuren met beheer in Marbella",
      "Nederlandstalig woningbeheer Golden Mile",
    ],
  },
  analytics: {
    ga4Id: process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
    googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL ?? "",
    searchConsoleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  },
} as const;

export const absoluteUrl = (path = "/") => `${siteConfig.domain}${path.startsWith("/") ? path : `/${path}`}`;
export const emailHref = `mailto:${siteConfig.contact.email}`;
export const leadFormAction = `https://formsubmit.co/${siteConfig.contact.email}`;
export const leadHref = siteConfig.template.leadPath;
export const leadSubject = (context = "woningaanmelding") => `Nieuwe ${context} via ${siteConfig.brand.name}`;
export const whatsappHref = (message = `Hallo, ik heb een vraag over verhuurbeheer in ${siteConfig.location.city}`) => `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
