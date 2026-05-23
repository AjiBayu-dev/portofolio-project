import { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en/translation.json";
import id from "@/locales/id/translation.json";

const translations = { en, id };

const LanguageContext = createContext();

const getNestedValue = (obj, path) => {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("lang", language);
    document.documentElement.lang = language;

    const metaDesc = document.querySelector('meta[name="description"]');
    const metaTitle = document.querySelector('meta[name="title"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const langMeta = document.querySelector('meta[name="language"]');

    if (language === "en") {
      document.title = "Aji Bayu Permadi - Portfolio";
      if (metaDesc) metaDesc.content = "Full Stack Developer portfolio - React, Vue, Laravel";
      if (metaTitle) metaTitle.content = "Aji Bayu Permadi - Portfolio";
      if (ogLocale) ogLocale.content = "en_US";
      if (langMeta) langMeta.content = "en";
    } else {
      document.title = "Aji Bayu Permadi - Portofolio";
      if (metaDesc) metaDesc.content = "Portofolio Full Stack Developer - React, Vue, Laravel";
      if (metaTitle) metaTitle.content = "Aji Bayu Permadi - Portofolio";
      if (ogLocale) ogLocale.content = "id_ID";
      if (langMeta) langMeta.content = "id";
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key, replacements = {}) => {
    let value = getNestedValue(translations[language], key);
    console.log("value from get nested ",value);
    if (value === undefined) {
      value = getNestedValue(translations.en, key);
    }
    if (value === undefined) return key;

    if (typeof value === "string") {
      return value.replace(/\{(\w+)\}/g, (_, k) => replacements[k] ?? `{${k}}`);
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
