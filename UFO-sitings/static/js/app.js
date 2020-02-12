// Get a reference to the table body and the input button element
var tbody = d3.select("tbody");
var inputButton = d3.select("#filter-btn");

// Console.log the UFO sighting data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each UFO sighting report object
// Step 2:  Use d3 to append one table row `tr` for each UFO sighting report object
// Step 3:  Use `Object.entries` to console.log each UFO sighting report value
// Step 4: Use d3 to append 1 cell per UFO sighting report value (Date, City, State, Country, Shape, Duration, Comments)
// Step 5: Use d3 to update each cell's text with UFO sighting report values (Date, City, State, Country, Shape, Duration, Comments)
data.forEach(function(ufoReport) {
  
  var row = tbody.append("tr");

  Object.entries(ufoReport).forEach(function([key, value]) {
    
    var cell = row.append("td");
    
    cell.text(value);
  });
});

// Run this function when the button is clicked
function handleClick() {
  
  // Select the input element and get the raw HTML node
  // var inputField = d3.select("#datetime");

  // Then get the value property of the input element
  // var datetimeInput = inputField.property("value");
  
  // Or do it in one line, since you won't call inputField elsewhere
  datetimeInput = d3.select("#datetime").property("value");
  cityInput = d3.select("#city").property("value");
  stateInput = d3.select("#state").property("value");
  countryInput = d3.select("#country").property("value");
  shapeInput = d3.select("#shape").property("value");
  
  // See what you've got
  console.log(datetimeInput, cityInput, stateInput, countryInput, shapeInput)

  var filteredData = data;

  // Filter your data by datetimeInput and assign it to a variable
  if (datetimeInput) {
    var filteredData = filteredData.filter(sighting => sighting.datetime === datetimeInput);
  }
  // Repeat filter with values from other input fields, if present
  if (cityInput) {
    var filteredData = filteredData.filter(sighting => sighting.city === cityInput.toLowerCase());
  }
  if (stateInput) {
    var filteredData = filteredData.filter(sighting => sighting.state === stateInput.toLowerCase());
  }
  if (countryInput) {
    var filteredData = filteredData.filter(sighting => sighting.country === countryInput.toLowerCase());
  }
  if (shapeInput) {
    var filteredData = filteredData.filter(sighting => sighting.shape === shapeInput.toLowerCase());
  }
            

  // Check on it
  console.log(filteredData);

  // Clear the table
  d3.select("tbody").selectAll("tr").remove();

  // Repopulate table with filtered data
  filteredData.forEach(function(filteredReport) {
    var row = tbody.append("tr");
    Object.entries(filteredReport).forEach(function([key, value]) {
      // Append a cell to the row for each value in the UFO sighting report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

}

// We can use the `on` function in d3 to attach an event to the handler function
inputButton.on("click", handleClick);
