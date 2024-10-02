const USER_THEME = 'theme';
const DEFAULT_THEME = 'light';

function DesignHelper() {
    try {
        this.currentTheme = localStorage.getItem(USER_THEME);
    } catch (error) {
        this.currentTheme = DEFAULT_THEME;
    }

    this.changeTheme = function(theme, isSaved) {
        if (!theme) {
            this.currentTheme = this.currentTheme ? this.currentTheme : DEFAULT_THEME;
        } else {
            this.currentTheme = theme;
        }

        if (isSaved) {
            try {
                localStorage.setItem(USER_THEME, this.currentTheme);
            } catch (error) {}
        }

        const colors = THEMES[this.currentTheme];

        document.querySelectorAll('.square').forEach(element => {
            element.style.background = colors.square;
        });
        document.querySelector('.container').style.background = colors.wrapper;
        document.querySelector('.loading_container').style.background = colors.container;
        document.querySelector('.loading__title').style.color = colors.title;
        document.querySelector('.loading__logo').style.filter = colors.logo;
        document.querySelector('.loading__icon_circle').style.background = colors.icon_bg;
        document.querySelector('.loading__progressbar').style.background = colors.loading_progressbar_filled;
        document.querySelector('.loading__progressbar_container').style.background = colors.loading_progressbar_blank;
    }
}
