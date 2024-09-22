function Fingerprint() {
    var fingerprint = sessionStorage.getItem("fingerprint");
    if (fingerprint) {
        return fingerprint;
    }else{
        // generate new 
        var fingerprint = "";
        // Collect browser properties
        var userAgent = navigator.userAgent;
        var language = navigator.language;
        var plugins = "";
        for (var i = 0; i < navigator.plugins.length; i++) {
          plugins += navigator.plugins[i].name + ";";
        }
  
        var timeZone = new Date().getTimezoneOffset();

        var hardwareConcurrency = navigator.hardwareConcurrency;
        var memory = navigator.deviceMemory;

        var colorDepth = window.screen.colorDepth;
        var pixelDensity = window.devicePixelRatio;
        var resolution = window.screen.width + "x" + window.screen.height + "x" + colorDepth + "@" + pixelDensity;
        // var resolution="0";
        // Combine properties into fingerprint string
        fingerprint += userAgent + language + plugins + resolution + timeZone + memory + hardwareConcurrency;
        // Hash the fingerprint string to create a unique identifier
        hashFingerPrint=CryptoJS.SHA256(fingerprint);
        sessionStorage.setItem("fingerprint",hashFingerPrint);
        return hashFingerPrint;
    }

}