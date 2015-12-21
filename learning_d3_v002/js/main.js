
$( document ).ready(function() {

//create the data
var data = [];

function changeData(data){
    for (var i = 0; i <35; i++) {
  	   data.push(Math.random());
      };
      return data;
}

//change the data on intervals
setInterval(changeData,2000);


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
