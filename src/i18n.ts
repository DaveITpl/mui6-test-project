import { initReactI18next } from 'react-i18next'
import i18n, { InitOptions } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import XHR from 'i18next-http-backend'

import { en } from './translations'

export const supportedLanguages = ['en']

const options: InitOptions = {
  debug: false,
  keySeparator: '.', // we do not use keys in form messages.welcome
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  fallbackLng: 'en', // use en if detected lng is not available
  supportedLngs: supportedLanguages,
  resources: {
    en: {
      translations: en,
    },
    // pl: {
    //   translations: pl,
    // },
    // nl: {
    //   translations: nl,
    // },
    // fr: {
    //   translations: fr,
    // },
  },
  // have a common namespace used around the full app
  ns: ['translations'],
  fallbackNS: 'translations',
  defaultNS: 'translations',
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    useSuspense: false,
  },
}

i18n.use(XHR).use(LanguageDetector).use(initReactI18next).init(options)

export default i18n
