
$( document ).ready(function() {

//create the data
var data = [];

function changeData(){
    data = [];  
    for (var i = 0; i <25; i++) {
  	   data.push(Math.random());
      }
      data.sort();
      //console.log(data);
}


//change the data on intervals
//setInterval(changeData,2000);
function renderData(){

    var x = d3.scale.linear()
        .domain([0,d3.max(data)])
        .range([0,100]);

    var y = 100/(data.length);
    	//y = y-1;
      //console.log(y);

    var bar = d3.select(".container")
      .selectAll("div")
        .data(data);
      bar.enter().append("div")
        .attr("class","bars");
       bar
        .style("height", y + "%")
        .style("width",function(d) { return x(d) + "%"; });

    //console.log("Render");
    	//.text(function(d) { return d; });

}
changeData();
renderData();
setInterval(changeData,50);
setInterval(renderData,5000);

});
