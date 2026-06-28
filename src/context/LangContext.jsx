import { createContext, useContext, useState, useEffect } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('portfolio-lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
