'use strict';

//EXAMPLE ONE 
var sales = [
  { product: 'Snickers',  count: 12 },
  { product: 'Twix',  count: 30 },
  { product: 'Pez', count: 9 },
  { product: 'Nerds', count: 19 },
  { product: 'Rollos', count: 10 },
  { product: 'Altoids', count: 5 },
  { product: 'N/A', count: 15 },
];
//set up the angles of the pie chart using the pie layout helper
var pie = d3.layout.pie()
  .value(function(d) { return d.count })

//connect our data to the slices


//size of the pie chart


// another helper that returns a color based on an ID, category10



// building a legend




//EXAMPLE 2

//setup size of line chart
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

//parse data from file
var parseDate = d3.time.format("%d-%b-%y").parse;

//set scales


//create axes


//construct the line using points from data
var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.users); });

var svg = d3.select(".linechart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", function(error, data) {
  if (error) throw error;
//traverse through the data 
  

//establish the domain for x and y axes
  x.domain(d3.extent(data, function(d) { return d.date; }));
  y.domain(d3.extent(data, function(d) { return d.users; }));

//add "groups" 
  

  
});


