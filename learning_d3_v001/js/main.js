
$( document ).ready(function() {

//create the data
var data = [];

for (var i = 0; i <50; i++) {
	data.push(Math.random()*0.1);
  };

var x = d3.scale.linear()
    .domain([0,d3.max(data)])
    .range([0,100]);

var y = 100/(data.length);
	//y = y-1;
  console.log(y);

d3.select(".container")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .attr("class","bars")
    .style("height", y + "%")
    .style("width",function(d) { return x(d) + "%"; });
  	//.text(function(d) { return d; });


});
