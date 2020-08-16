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
    var timeDate = d3.select("#datetime");

    var cityThe = d3.select("#city");

    var stateThe = d3.select("#state");

    var countryThe = d3.select("#country");

    var shapeThe = d3.select("#shape");

    // Get the value property of the input element. 
    // *Added*: turn all letters to lowercase to make the search easier.
    var dateTime = timeDate.property("value");

    var theCity = cityThe.property("value").toLowerCase();

    var theState = stateThe.property("value").toLowerCase();

    var theCountry = countryThe.property("value").toLowerCase();

    var theShape = shapeThe.property("value").toLowerCase();


    // code for the filtering
    var filteredData = tableData;

    if (dateTime) {filteredData = filteredData.filter(entry => entry.datetime === dateTime);
    }
    if (theCity) {filteredData = filteredData.filter(entry => entry.city === theCity);
    }
    if (theState) {filteredData = filteredData.filter(entry => entry.state === theState);
    }
    if (theCountry) {filteredData = filteredData.filter(entry => entry.country === theCountry);
    }
    if (theShape) {filteredData = filteredData.filter(entry => entry.shape === theShape);
    }




    // Code for the filtered data

    filteredData.forEach((ufoStuff) => {
        var row = tbody.append("tr");
        Object.entries(ufoStuff).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
  




};
