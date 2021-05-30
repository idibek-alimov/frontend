import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {TRANSLATION_TJ} from './tj/translation.js';
import {TRANSLATION_EN} from './en/translation.js';
import {TRANSLATION_RU} from './ru/translation.js';
import {store} from '../store/store';


i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
   resources:{
       en:{
           translation: TRANSLATION_EN
       },
       tj:{
           translation:TRANSLATION_TJ
       },
       ru:{
        translation:TRANSLATION_RU
       }
   }
 });
  
  store.subscribe(()=>i18n.changeLanguage(`${store.getState().language}`) )

//i18n.changeLanguage(`${store.getState().language}`); 
//i18n.changeLanguage(lan);

