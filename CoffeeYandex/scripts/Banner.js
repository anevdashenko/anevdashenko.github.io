const CLOSE_BANNER = 'close_banner';

function setBanner() {
    const banner = document.querySelector('.banner');

    if (!banner) {
        return;
    }

    setBannerTransform();
}

function setBannerTransform() {
    const banner = document.querySelector('.banner');

    if (!banner) {
        return;
    }

    const displayBannerHeight = 120;
    const heightRatio = appContainer.clientHeight / parseInt('1136');
    const display = banner.style.display;
    const height = displayBannerHeight * heightRatio;
    const bannerLeft = (window.innerWidth - appContainer.clientWidth) / 2;

    banner.setAttribute('style', `height: ${height}px; width:${appContainer.clientWidth}px; transform-origin: bottom; display: ${display}; left: ${bannerLeft}px;`);
    setBannerButtonCloseTransform();
}

function showBanner() {
    setBannerButtonCloseTransform();
}

function hideBanner() {
    const button_close = document.querySelector('.banner_close_button');
    button_close.style.display = 'none';
}

function setBannerButtonCloseTransform() {
    const banner = document.querySelector('.banner');

    const button_close = document.querySelector('.banner_close_button');
    button_close.style.display = 'flex';
    button_close.style.bottom = banner.clientHeight + 'px';
}

document.addEventListener('DOMContentLoaded', () => {
    setBannerTransform();
});

window.addEventListener('resize', () => {
    setBannerTransform();
});

const button_close = document.querySelector('.banner_close_button');
button_close.addEventListener('click', () => {
    sendToDefold(CLOSE_BANNER);
});
