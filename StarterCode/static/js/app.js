// from data.js
// var table = d3.select("table");

// YOUR CODE HERE!

// Define tbody and other variables that will be used
var tbody = d3.select("tbody");


// Loop through the data and console log each sighting
data.forEach(function(ufoSighting) {
    console.log(ufoSighting);
});

// Loop through and append one table row for each sighting
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});



var filterButton = d3.select("#filter-btn");
var dateTime = d3.select("#datetime");

function handleClick() {
    console.log("A button was clicked");
    console.log(d3.event.target.value);
}


filterButton.on("click", function(event) {
    tbody.selectAll("tr").remove();
    var userDate = document.getElementById("datetime").value;
    console.log(userDate);
    data.forEach((ufoSighting) => {  
        console.log(userDate, ufoSighting.datetime);
        if (userDate === ufoSighting.datetime){
            console.log(ufoSighting); 
            var row = tbody.append("tr");
            Object.entries(ufoSighting).forEach(([key, value]) => {
                var cell = row.append("td");
                cell.text(value);
            });
        }
        else {
            console.log("Does not match filter")
        }
    });
    
});
