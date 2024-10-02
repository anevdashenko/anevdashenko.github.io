(function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() {
        (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

const _yandexMetricID = 71514256;

function SendYandexParams(json_params) {
    const params = JSON.parse(json_params);
    //console.log("yandex params ", params);
    ym(_yandexMetricID, 'params', params);
}

function SendYandexEvent(json_event) {
    try {
        const eventData = JSON.parse(json_event);
        console.log('SendYandexEvent', eventData)
        //console.log("yandex event", eventData.name, eventData.params);
        ym(_yandexMetricID, eventData.name, eventData.params);
    } catch (e) {
        console.error("Error send yandex event ", e);
    }
}

function RichYandexGoal(goal_id) {
    try {
        console.log('RichYandexGoal', goal_id)
        ym(_yandexMetricID, 'reachGoal', goal_id);
    } catch (e) {
        console.error("Error send yandex event ", e);
    }
}

function getQueryParams() {
    const queryParams = {};
    const searchParams = new URL(document.location).searchParams

    for (const [key, value] of searchParams.entries()) {
        queryParams[key] = value.replace(/ /g, '+');
    }

    return JSON.stringify(queryParams);
}

function YandexMetrica(id) {
    ym(id, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true
    });
}
