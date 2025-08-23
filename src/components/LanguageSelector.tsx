import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {}

const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select 
    id='language-selector'
    className='language-selector'
      value={i18n.language}
      onChange={changeLanguage}
    >
      <option value="en">English</option>
      <option value="ko-KR">한국어</option>
    </select>
  );
};

export default LanguageSelector;
