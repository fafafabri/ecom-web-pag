import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';

function getSavedLanguage(): string {
  try {
    return localStorage.getItem('language') || 'es';
  } catch {
    return 'es';
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: esTranslation },
      en: { translation: enTranslation }
    },
    lng: getSavedLanguage(),
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem('language', lng);
  } catch {
    // localStorage unavailable (e.g. private browsing quota exceeded)
  }
});

export default i18n;
