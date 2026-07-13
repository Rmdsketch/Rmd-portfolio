import React, { createContext, useState, useContext, useEffect } from 'react';
import i18n from '../i18n';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'EN');

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    const toggleLanguage = () => {
        const newLang = language === 'EN' ? 'ID' : 'EN';
        setLanguage(newLang);
        i18n.changeLanguage(newLang.toLowerCase());
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
