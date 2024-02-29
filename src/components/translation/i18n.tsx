import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationVI from '@languages/vi-vn/translation.json';
const resources = {
    // en: {
    //     translation: translationEN
    // },
    vi: {
        translation: translationVI
    }
};

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: localStorage.getItem('language') || 'en', // Lựa chọn ngôn ngữ mặc định
        debug: false,
        interpolation: {
            escapeValue: false // not needed for react as it escapes by default
        },

    });

const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language); // Lưu trữ lựa chọn ngôn ngữ
};

export default i18n;

export { changeLanguage };

