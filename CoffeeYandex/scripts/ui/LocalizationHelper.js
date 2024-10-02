const USER_LANG = 'lang';
const DEFAULT_LANG = 'ru';

function LocalizationHelper() {
    try {
        this.currentLang = localStorage.getItem(USER_LANG);
    } catch (error) {
        this.currentLang = DEFAULT_LANG;
    }

    this.changeLang = function(lang) {
        if (!lang) {
            this.currentLang = this.currentLang ? this.currentLang : DEFAULT_LANG;
        } else {
            this.currentLang = lang;
        }

        try {
            localStorage.setItem(USER_LANG, this.currentLang);
        } catch (error) {}

        const texts = LOCALIZATIONS[this.currentLang];

        if (!texts) {
            return;
        }

        document.querySelector('.loading__title').textContent = texts.title;
        document.querySelector('.loading__progressbar__text').textContent = texts.loading;
    }
}
