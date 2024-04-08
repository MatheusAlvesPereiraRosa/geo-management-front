import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import { store } from "../redux/store";

import translationEN from "./locales/en/translation.json";
import translationPT from "./locales/pt/translation.json";

/* Função para pegar linguagem atual */
const getCurrentLanguage = () => store.getState().language.lang;

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: translationEN },
        pt: { translation: translationPT }
    },
    lng: store.getState().language.lang,
    interpolation: {
        escapeValue: false,
    }
});

/** Se inscrevendo a store para escutar mudanças no state */
store.subscribe(() => {
    const currentLanguage = getCurrentLanguage();
    i18n.changeLanguage(currentLanguage);
});

export default i18n
