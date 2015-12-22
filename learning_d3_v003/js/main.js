
$( document ).ready(function() {

//create the data
var data = [];

function changeData(){
    data = [];  
    for (var i = 0; i <25; i++) {
  	   data.push(Math.random());
      }
      //data.sort();
      //console.log(data);
}


//change the data on intervals
//setInterval(changeData,2000);
function renderData(){

    var x = d3.scale.linear()
        .domain([0,1])
        .range([0,100]);

    var y = 100/(data.length);
    	//y = y-1;
      //console.log(y);

    var bar = d3.select(".container")
      .selectAll("div")
        .data(data);
      bar.enter().append("div")
        .attr("class","bars")
        .style("height", y + "%");

        //.style("width","0%");
      bar.transition().duration(1500)
        .style("width",function(d) { return x(d) + "%"; });

    //console.log("Render");
    	//.text(function(d) { return d; });

}
changeData();
renderData();
//setInterval(changeData,2000);
setInterval(renderData,2000);

});
