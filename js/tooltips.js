/**
 * Created by Tonis on 18.11.2016.
 */

var tooltipsArray = function () {
    // Array of arrays
    var tooltips = [];

    // Element ID, tooltip text
    var t1 = ["#g9491", ` NPL's cryogenic radiometer is the primary standard for the measurement of optical radiant power. It uses the electrical substitution technique, whereby the optical power incident on an absorbing cavity is compared with the electrical power required to heat the cavity to the same temperature. For the optical input NPL uses a Krypton Ion tuneable laser producingbeams of radiation at single wavelengths that are focused to under-fill the cryogenic radiometer’s aperture. High Tc superconducting leads to the cavity heater ensure true equivalence of electrical and optical power.</p>
<p>The cavity is made of electroformed copper to reduce its mass and is coated internally with NPL super black. The design of the cavity in combination with operation at helium temperatures ensures an optimal response to incoming radiation. The cavity is isolated from fluctuations in the cold head of the cooler by a reference block maintained at a constant temperature. The accuracy of the system is further enhanced by operating the cavity within an isothermal shield.`];

    var t2 = ["#g10027", "This is a sample text"];

    tooltips.push(t1);
    tooltips.push(t2);
    return tooltips;
}

var registerTooltip = function (id, text, svgAll, div) {
    var img = "<img src='./diagram/gtaV006.jpg' style='height: 50%;' align='right'>";
    svgAll.select(id)
        .on("mouseover", function (d) {
            div.transition()
                .duration(200)
                .style("opacity", 1);
            div.html(img + text)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY + 30) + "px");
        })
        .on("mouseout", function (d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

};

// Alternate version using title
var registerTooltip2 = function (id, text, svgAll) {
    svgAll.select(id)
        .append("svg:title")
        .text(text);

};

var generateTooltips = function () {

    var div = d3.select(".entry-content-inner").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var svgAll = d3.select(document.getElementById("alphasvg").getSVGDocument()).selectAll("g");

    var tooltips = tooltipsArray();
    for (i = 0; i < tooltips.length; i++) {
        registerTooltip(tooltips[i][0], tooltips[i][1], svgAll, div);
    }
};

var generateTooltips2 = function () {
    var svgAll2 = d3.select(document.getElementById("alphasvg2").getSVGDocument()).selectAll("g");

    var tooltips = tooltipsArray();
    for (i = 0; i < tooltips.length; i++) {
        registerTooltip2(tooltips[i][0], tooltips[i][1], svgAll2);
    }
};


jQuery(document).ready(function () {
    // On load listener NECESSARY
    var svgholder = jQuery('body').find("object#alphasvg");

    svgholder.load("image/svg+xml", function () {
        generateTooltips();
    });

    var svgholder = jQuery('body').find("object#alphasvg2");

    svgholder.load("image/svg+xml", function () {
        generateTooltips2();
    });
});



