// from data.js
var tableData = data;

// Code for the table
var tbody = d3.select("tbody");

tableData.forEach((ufoStuff) => {
    var row = tbody.append("tr");
    Object.entries(ufoStuff).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
// Code for searching with date/time column
var button = d3.select("#filter-btn");

button.on("click", runUfo);

function runUfo() {

    // *Added*: Clears table so it can display only what was searched 
    d3.select("tbody").html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();
    

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);


    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredData);

    // Code for the filtered date
    var tbody = d3.select("tbody");

    filteredData.forEach((filteredUfo) => {
        var row = tbody.append("tr");
        Object.entries(filteredUfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
  




};
