import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationsEn from "./translations/en/translations.json";
import translationsEs from "./translations/es/translations.json";

const availableLanguages = [
  "en",
  "es"
  // "es" // V20T-3544 & 3552 LDG Commented out 5/21 until Spanish is improved
];
/*
const instance = i18n.createInstance();
instance
  .use(LanguageDetector) // Detect user language
  // .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    interpolation: {
      // React already does escaping
      escapeValue: false
    },
    whitelist: availableLanguages,
    fallbackLng: "en",
    // Have a common namespace used around the full app
    ns: ["translations", "validations"],
    defaultNS: "translations",
    resources: {
      en: {
        translations: translationsEn
      },
      es: {
        translations: translationsEs
      }
    }
  });

export default instance; */
