const loadingAnimator = new LoadingAnimator();
const designHelper = new DesignHelper();
const localizationHelper = new LocalizationHelper();
const sessonsHelper = new SessionsHelper();

new ResizeHandler(parseInt('640'), parseInt('1136'));

new EngineHandler();

designHelper.changeTheme();
localizationHelper.changeLang();

loadingAnimator.startAnimation();

function loadGame() {
    sendLoadingTime();
    sendServicesInitialized();
    loadingAnimator.loadGame();
}

function changeTheme(themeKey, isSaved) {
    designHelper.changeTheme(themeKey, isSaved);
}

function changeLang(lang) {
    localizationHelper.changeLang(lang);
}

function changeSessions(delta) {
    sessonsHelper.changeSessions(delta);
}
