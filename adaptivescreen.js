var target_width = 640;
var target_height =  1140;

var ADAPTIVE_SCREEN = {

    init: function(width, height){
        target_width = width;
        target_height = height;
    },

    scale_mode : function() {
    },

    resize_window_callback: function() {
        var is_iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var buttonHeight = 0;
        var prevInnerWidth = -1;
        var prevInnerHeight = -1;
        
        
        // Hack for iOS when exit from Fullscreen mode
        if (is_iOS) {
            window.scrollTo(0, 0);
        }

        var app_container = document.getElementById('app-container');
        var game_canvas = document.getElementById('canvas');
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight - buttonHeight;
        if (prevInnerWidth == innerWidth && prevInnerHeight == innerHeight)
        {
            return;
        }
        prevInnerWidth = innerWidth;
        prevInnerHeight = innerHeight;
        var size = {
            width: this.target_width,
            height: this.target_height
        }

        console.log(size.width , size.height);
        this.scale_mode(size , innerWidth , innerHeight, app_container);

        var width = size.width;
        var height = size.height;
        

        var dpi = window.devicePixelRatio || 1;
        console.log(dpi);

        app_container.style.width = width + "px";
        app_container.style.height = height + buttonHeight + "px";
        game_canvas.width = Math.floor(width * dpi * 2);
        game_canvas.height = Math.floor(height * dpi * 2);
    },

    detect_device_type : function(){
        const detectDeviceType = () =>
            /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent)
              ? 'Mobile'
              : 'Desktop';

        console.log(detectDeviceType());

        if(detectDeviceType() == 'Mobile'){
            scale_mode = function(size, innerWidth , innerHeight , app_container){
                size.width = innerWidth
                size.height = innerHeight
            }
            return
        }

        scale_mode = function(size, innerWidth , innerHeight , app_container){
            var targetRatio = size.width / size.height;
            var maxRatio = 0.75
            var actualRatio = innerWidth / innerHeight;
        
            if (actualRatio > targetRatio) {
                if(actualRatio < maxRatio)
                {
                    size.width = innerWidth;
                    size.height = innerHeight;
                }
                else{
                    size.width = innerHeight * targetRatio;
                    size.height = innerHeight;
                }
                app_container.style.marginLeft = ((innerWidth - size.width) / 2) + "px";
                app_container.style.marginTop = "0px";
            }
            else {
                size.height = innerWidth / targetRatio;
                size.width = innerWidth;
                app_container.style.marginLeft = "0px";
                app_container.style.marginTop = ((innerHeight - size.height) / 2) + "px";
            }
            
        }
    }
}