import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors duration-200 text-sm font-medium"
      aria-label="Cambiar idioma / Change language"
    >
      <Globe className="h-4 w-4" />
      <span className="hidden sm:inline">{i18n.language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageSwitcher;
