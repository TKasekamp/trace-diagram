/**
 * Created by Tonis on 18.11.2016.
 */
// On tooltip
var onT = false;
// on element
var onE = false;

var reset = function () {
    console.log("reset");
    onT = false;
    onE = false;
}
var tooltipsArray = function () {
    // Array of arrays
    var tooltips = [];
    var tooltip_count = 22;
    for (i=1; i < tooltip_count; i++) {
        // SVG element ID, tooltip id
        var tooltip = ["#element" + i, "#tooltip" + i];
        tooltips.push(tooltip);
    }
    return tooltips;
}

var registerTooltip = function (id, divId, svgAll) {

    var div = toolTipListener(divId);

    svgAll.select(id)
        .on("mouseenter", function (d) {
            console.log("new loop");
            div.transition()
                .duration(200)
                .style("opacity", 1);
            div
                .style("pointer-events", "auto")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY + 30) + "px");

            onT = true;
            console.log("ont " + onT);
            onE = true;
            console.log("one " + onE);
        })
        .on("mouseleave", function (d) {
            if (onE && !onT) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0)
                    .style("pointer-events", "none");
                console.log("hiding tip in reg tooltip");
                reset();

            }

            // div
            //     .style("pointer-events", "auto");
            onE = false;
            console.log("one " + onE);
        });

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

var toolTipListener = function(divId) {
    var div = d3.select(divId)
        .style("opacity", 0);

    div.on("mouseenter", function (d) {
        console.log("on tooltip");
        div
            .style("pointer-events", "auto");
        // onT = true;
        // console.log("ont " + onT);

    })
        .on("mouseleave", function (d) {
            console.log("div mouseout");
            if (onT && !onE) {
                div.transition()
                    .duration(500)
                    .style("opacity", 0)
                    .style("pointer-events", "none");
                console.log("hiding tip div itself");
                reset();


            }
            onT = false;
            console.log("ont " + onT);
            // onE = false;
            // console.log("one " + onE);
        });

    return div;
}


var generateTooltips = function () {

    var svgAll = d3.select(document.getElementById("alphasvg").getSVGDocument()).selectAll("g");

    var tooltips = tooltipsArray();
    for (i = 0; i < tooltips.length; i++) {
        registerTooltip(tooltips[i][0], tooltips[i][1], svgAll);
    }
};


jQuery(document).ready(function () {
    // On load listener NECESSARY
    var svgholder = jQuery('body').find("object#alphasvg");

    svgholder.load("image/svg+xml", function () {
        generateTooltips();
        //gen3();
    });


});



