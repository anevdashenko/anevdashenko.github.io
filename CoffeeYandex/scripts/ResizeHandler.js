function ResizeHandler(initialWidth, initialHeight) {
    const is_iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var prevInnerWidth = -1;
    var prevInnerHeight = -1;

    function resizeGameCanvas() {
        if (is_iOS) {
            window.scrollTo(0, 0);
        }

        var app_container = document.getElementById('app-container');
        var game_canvas = document.getElementById('canvas');
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;
        if (prevInnerWidth == innerWidth && prevInnerHeight == innerHeight) {
            return;
        }

        prevInnerWidth = innerWidth;
        prevInnerHeight = innerHeight;
        var width = initialWidth;
        var height = initialHeight;
        var targetRatio = width / height;
        var actualRatio = innerWidth / innerHeight;

        const portraitAspect = 3 / 4;

        if (actualRatio <= portraitAspect) {
            width = innerWidth;
            height = innerHeight;
        } else if (actualRatio >= targetRatio) {
            width = innerHeight * targetRatio;
            height = innerHeight;
        } else {
            width = innerWidth;
            height = innerWidth / targetRatio;
        }

        app_container.style.width = width + "px";
        app_container.style.height = height + "px";
        game_canvas.width = width;
        game_canvas.height = height;
    }

    resizeGameCanvas();

    window.addEventListener('resize', resizeGameCanvas, false);
    window.addEventListener('orientationchange', resizeGameCanvas, false);
    window.addEventListener('focus', resizeGameCanvas, false);
}
