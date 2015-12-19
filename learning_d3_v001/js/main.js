
$( document ).ready(function() {

//create the data
var data = [];

for (var i = 0; i <50; i++) {
	data.push(Math.random()*0.1);
  };

var x = d3.scale.linear()
    .domain([0,d3.max(data)])
    .range([0,100]);

    var x2 = d3.scale.linear()
    .domain([0,data.length])
    .range([0,100]);

var y = ($(window).height()-120)/(data.length-1);
	//y = y-1;
  console.log(y);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
  	.style("width",function(d) { return x(d) + "%"; })
  	.style("height", "10%")
    .style("position","absolute")
    .style("top",function(d,i) { return x2(i) + "%"; })
  	.style("background-color","orange")
    .style("border","1px solid black")

    ;
  	//.text(function(d) { return d; });


});

