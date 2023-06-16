import translationEN from "./src/utils/locales/en/translation.json";
import translationRU from "./src/utils/locales/ru/translation.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend, { HttpBackendOptions } from "i18next-http-backend";

const fallbackLng = ["en"];

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
};

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        load: "languageOnly",
        fallbackLng,
        detection: {
            order: ["cookie", "localStorage"],
            caches: ["cookie", "localStorage"],
        },
        compatibilityJSON: 'v3',
        debug: false,
        // whitelist: availableLanguages,
        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
        react: {
            useSuspense: false, //   <---- this will do the magic
        },
    });

export default i18n;
