import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('lang') || 'EN');

    useEffect(() => {
        localStorage.setItem('lang', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'EN' ? 'ID' : 'EN'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
