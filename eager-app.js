
// IIFE
(function() {

    var options, text, textEl, fontSize, addStyles;

    // this is the object containing the user data from the install UI screen
    options = INSTALL_OPTIONS;
    text = options.text;

    // uppercase if option is true
    if(options.uppercase) {
        text = text.toUpperCase();
    }

    textEl = document.createElement('text');
    textEl.innerHTML = text;

    // determine font size from user inputs
    switch(options.size) {
        case 'small':
            fontSize = 12;
            break;
        case 'medium':
            fontSize = 18;
            break;
        case 'large':
            fontSize = 24;
            break;
    };

    addStyles = function() {
        var style = document.createElement('style');
        style.innerHTML = '' +
            'text {' +
                'color: ' + options.color + ' !important;' +
                'font-size: ' + fontSize + 'px !important' +
            '}';
        document.body.appendChild(style);
    };

    // after DOM renders, load app
    document.addEventListener('DOMContentLoaded', function() {
        addStyles();
        document.body.appendChild(textEl);
    });

})();