// #### Gauge

// The Gauge object encapsulates the behavior
// of simple gauge. Most of the implementation
// is in the CSS rules, but we do have a bit
// of JavaScript to set or read the gauge value

function Gauge(el) {

    // ##### Private Properties and Attributes

    var element,      // Containing element for the info component
        data,         // `.gauge__data` element
        needle,       // `.gauge__needle` element
        value = 0.0,  // Current gauge value from 0 to 1
        back_part1,   // `.gauge__background_part1` element
        prop;         // Style for transform

    // ##### Private Methods and Functions

    var setElement = function(el) {
        // Keep a reference to the various elements and sub-elements
        element = el;
        data = element.querySelector(".gauge__data");
        needle = element.querySelector(".gauge__needle");
        back_part1 = element.querySelector(".gauge__background_part1")
    };

    var setValue = function(x) {
        value = x;
        var turns =  -0.25 + (x * 0.0025);
        //data.style[prop] = "rotate(" + 0 + "turn)";
        //needle.style[prop] = "rotate(" + 0 + "turn)";

        if(x > 0){
            data.style["background-color"] = "#098810" ;// .gauge__data element's background-color change
            back_part1.style["background-color"] = "#EAB5A7";// .gauge__background_part1 element's background-color change
            back_part1.style["z-index"] = 2;
            data.style["z-index"] = 1;
        } else if(x < 0){
            data.style["background-color"] = "#EAB5A7" ;
            back_part1.style["background-color"] = "#E83709";
            back_part1.style["z-index"] = 1;
            data.style["z-index"] = 2;
        } 
     
        var turns =  -0.25 + (x * 0.0025);
        data.style[prop] = "rotate(" + turns + "turn)";
        needle.style[prop] = "rotate(" + turns + "turn)";
    };

    // ##### Object to be Returned

    function exports() { };

    // ##### Public API Methods

    exports.element = function(el) {
        if (!arguments.length) { return element; }
        setElement(el);
        return this;
    };

    exports.value = function(x) {
        if (!arguments.length) { return value; }
        setValue(x);
        return this;
    };

    // ##### Initialization

    var body = document.getElementsByTagName("body")[0];
    ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
        forEach(function(p) {
            if (typeof body.style[p] !== "undefined") { prop = p; }
        }
    );

    if (arguments.length) {
        setElement(el);
    }

    return exports;

};
