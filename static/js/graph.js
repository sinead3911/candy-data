
queue()
    .defer(d3.json,"data")
    .await(makeGraphs);
function makeGraphs(error, candyData){
    var ndx = crossfilter(candyData);
    
    var name_dim = ndx.dimension(dc.pluck('competitorname'));
    var popular_candy = name_dim.group().reduceSum(dc.pluck('winpercent'));

 
   var chart = dc.rowChart("#popular-candy-chart");

       chart
           .width(600)
           .height(330)
           .dimension(name_dim)
           .group(popular_candy)
           .cap(10)
           .othersGrouper(false)
           .xAxis().ticks(4);
    
    dc.renderAll();
    
}

