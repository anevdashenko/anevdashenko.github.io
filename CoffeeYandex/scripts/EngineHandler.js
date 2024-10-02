function EngineHandler() {
    const getEngineParams = new Function("return []")

    const extra_params = {
        archive_location_filter: function(path) {
            return ("archive" + path + "");
        },
        engine_arguments: getEngineParams(),
        custom_heap_size: parseInt("268435456"),
        full_screen_container: "#canvas-container",
        disable_context_menu: true
    }

    Module['INITIAL_MEMORY'] = extra_params.custom_heap_size;

    Module['onRuntimeInitialized'] = function() {
        Module.runApp("canvas", extra_params);
    };

    Module["locateFile"] = function(path, scriptDirectory) {
        if (path == "dmengine.wasm" || path == "dmengine_release.wasm" || path == "dmengine_headless.wasm") {
            path = "SudokuInstant.wasm";
        }
        return scriptDirectory + path;
    };
}
