let LOADING_TIME_END;
const ONLINE = 'online';
const OFFLINE = 'offline';
const SAVE_DATA = 'save_data';
const GET_LOADING_TIME = 'get_loading_time';
const TIME_STARTED = performance.now();

function sendLoadingTime() {
    LOADING_TIME_END = performance.now();
}

function sendToDefold(messageId, message) {
    try {
        JsToDef.send(messageId, message);
    } catch (error) {}
}

function sendServicesInitialized() {
    sendToDefold(navigator.onLine ? ONLINE : OFFLINE);
    sendToDefold(GET_LOADING_TIME, {
        time: LOADING_TIME_END - TIME_STARTED
    });
}

window.addEventListener('online', () => {
    sendToDefold(ONLINE);
});

window.addEventListener('offline', () => {
    sendToDefold(OFFLINE);
});

window.addEventListener('blur', () => {
    sendToDefold(SAVE_DATA);
});
