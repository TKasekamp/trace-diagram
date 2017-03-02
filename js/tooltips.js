/**
 * Created by Tonis on 18.11.2016.
 */
// Tooltips with close button
var tooltipsArray = function () {
    // Array of arrays
    var tooltips = [];
    var tooltip_count = 2;
    for (i = 1; i < tooltip_count; i++) {
        // SVG element ID, tooltip id
        console.log(i);
        var tooltip = ["#element" + i, "#tooltip" + i];
        tooltips.push(tooltip);
    }

    var tooltip = ["#element2", "#tooltip2"];
    tooltips.push(tooltip);
    return tooltips;
};

// For tooltips with no scroll
var tooltipsArray2 = function () {
    // Array of arrays
    var tooltips = [];
    var tooltip_count = 22;
    for (i = 3; i < tooltip_count; i++) {
        // SVG element ID, tooltip id
        var tooltip = ["#element" + i, "#tooltip" + i];
        tooltips.push(tooltip);
    }
    return tooltips;
};

var registerTooltip = function (id, divId, svgAll) {
    // console.log(id + " " + divId);
    var div = d3.select(divId);

    svgAll.select(id)
        .on("mouseenter", function (d) {
            // Reset
            d3.selectAll(".tooltip-painter").style("opacity", 0).style("height", 0);

            div.transition()
                .duration(200)
                .style("height", "auto")
                .style("opacity", 1);
        })
    ;

};

// For tooltips with no scroll
var registerTooltipNoScroll = function (id, divId, svgAll) {

    var div = d3.select(divId)
        .style("opacity", 0).style("pointer-events", "none");

    svgAll.select(id)
        .on("mouseenter", function (d) {
            div.transition()
                .duration(200)
                .style("opacity", 1);
            div
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY + 30) + "px");

        })
        .on("mouseleave", function (d) {
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

};


var generateTooltips = function () {

    var svgAll = d3.select(document.getElementById("alphasvg").getSVGDocument()).selectAll("g");

    var tooltips = tooltipsArray();
    for (i = 0; i < tooltips.length; i++) {
        registerTooltip(tooltips[i][0], tooltips[i][1], svgAll);
    }

    // Set first tooltip open
    d3.select(tooltips[0][1]).style("opacity", 1).style("height", "auto");
};


jQuery(document).ready(function () {
    // On load listener NECESSARY
    var alpha = document.getElementById("alphasvg");
    alpha.addEventListener('load', function(){
        generateTooltips();
    });

});



