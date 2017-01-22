/**
 * Created by Tonis on 18.11.2016.
 */
// // On tooltip
// var onT = false;
// // on element
// var onE = false;
//
// var reset = function () {
//     console.log("reset");
//     onT = false;
//     onE = false;
// }
var tooltipsArray = function () {
    // Array of arrays
    var tooltips = [];
    var tooltip_count = 22;
    for (i = 1; i < tooltip_count; i++) {
        // SVG element ID, tooltip id
        var tooltip = ["#element" + i, "#tooltip" + i];
        tooltips.push(tooltip);
    }
    return tooltips;
}

var registerTooltip = function (id, divId, svgAll) {

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
};

// var closeTooltip = function (e) {
//     console.log(e);
//     var par = $(event.target).parent().parent();
//     console.log(par);
//
//     par[1].setAttribute('style','opacity:0');
//     // e = e || window.event;
//     // var targ = e.target || e.srcElement;
//     // console.log(targ);
//     // if (targ.nodeType == 3) targ = targ.parentNode; // defeat Safari bug
// }

var closeTooltip = function (id) {
    d3.select("#" + id)
        .style("opacity", 0).style("pointer-events", "none");

}

jQuery(document).ready(function () {
    // On load listener NECESSARY
    var svgholder = jQuery('body').find("object#alphasvg");

    svgholder.load("image/svg+xml", function () {
        generateTooltips();
        //gen3();
    });


});



