import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        welcome: 'Welcome to CMS Editor'
    },
    ko: {
        welcome: 'CMS 에디터에 오신 것을 환영합니다'
    }
}

export default createI18n({
    legacy: false,
    locale: 'ko',
    fallbackLocale: 'en',
    messages
})