import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale:'en',// 语言标识
    messages:{
        en: require('./lang/en'),
        zh: require('./lang/zh')
    }
})

export default i18n
