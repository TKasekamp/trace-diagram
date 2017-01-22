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
    return tooltips;
};

// For tooltips with no scroll
var tooltipsArray2 = function () {
    // Array of arrays
    var tooltips = [];
    var tooltip_count = 22;
    for (i = 2; i < tooltip_count; i++) {
        // SVG element ID, tooltip id
        var tooltip = ["#element" + i, "#tooltip" + i];
        tooltips.push(tooltip);
    }
    return tooltips;
};

var registerTooltip = function (id, divId, svgAll) {
    console.log(id);
    var div = d3.select(divId)
        .style("opacity", 0).style("pointer-events", "none");

    svgAll.select(id)
        .on("mouseenter", function (d) {
            div.transition()
                .duration(200)
                .style("opacity", 1);
            div
                .style("pointer-events", "auto")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY + 30) + "px");

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

    // With close button
    var tooltips = tooltipsArray();
    for (i = 0; i < tooltips.length; i++) {
        console.log("sdgsdfse");
        registerTooltip(tooltips[i][0], tooltips[i][1], svgAll);
    }

    // No close button
    var tooltips2 = tooltipsArray2();
    for (i = 0; i < tooltips2.length; i++) {
        registerTooltipNoScroll(tooltips2[i][0], tooltips2[i][1], svgAll);
    }
};


var closeTooltip = function (id) {
    d3.select("#" + id)
        .style("opacity", 0).style("pointer-events", "none");

};

jQuery(document).ready(function () {
    // On load listener NECESSARY
    var svgholder = jQuery('body').find("object#alphasvg");

    svgholder.load("image/svg+xml", function () {
        generateTooltips();
        //gen3();
    });


});



