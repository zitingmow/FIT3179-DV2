var vg_1 ="js/01_flowmap.vg.json"
vegaEmbed(
    "#vis1", vg_1, // find the html element with matching id
    { "actions": false }  // hide vega embed action menu
    )
    .then(function(result) {} // action perform after the chart successfully loaded
    )
    .catch(console.error) // print error if the embedding fail

var vg_2 ="js/02_choroplethmap.vg.json"
vegaEmbed("#vis2", vg_2, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_3 ="js/03_proportionalmap.vg.json"
vegaEmbed("#vis3", vg_3, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_4 ="js/04_donutchart.vg.json"
vegaEmbed("#vis4", vg_4, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_5 ="js/05_heatmap.vg.json"
vegaEmbed("#vis5", vg_5, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_6 ="js/06_divergingbar.vg.json"
vegaEmbed("#vis6", vg_6, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_7 ="js/07_treemap.vg.json"
vegaEmbed("#vis7", vg_7, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_8 ="js/08_streamgraph.vg.json"
vegaEmbed("#vis8", vg_8, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_9 ="js/09_jitterplot.vg.json" 
vegaEmbed("#vis9", vg_9, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_10 ="js/10_divergingbar.vg.json"
vegaEmbed("#vis10", vg_10, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_11 ="js/11_bumpchart.vg.json"
vegaEmbed("#vis11", vg_11, { "actions": false }).then(function(result) {}).catch(console.error)

var vg_12 ="js/12_scatterplot.vg.json"
vegaEmbed("#vis12", vg_12, { "actions": false }).then(function(result) {}).catch(console.error)