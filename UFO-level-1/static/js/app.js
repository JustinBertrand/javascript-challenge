// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sighting data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each UFO sighting report object
// // Step 2:  Use d3 to append one table row `tr` for each UFO sighting report object
// // Step 3:  Use `Object.entries` to console.log each UFO sighting report value
// // Step 4: Use d3 to append 1 cell per UFO sighting report value (Date, City, State, Country, Shape, Duration, Comments)
// // Step 5: Use d3 to update each cell's text with
// // UFO sighting report values (Date, City, State, Country, Shape, Duration, Comments)
data.forEach(function(ufoReport) {
  // console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the UFO sighting report object
    var cell = row.append("td");
    cell.text(value);
  });
});

//////

// Getting a reference to the input element on the page with the id property set to 'input-field'
// var inputField = d3.select("#datetime");

// Getting a reference to the input button element
var inputButton = d3.select("#filter-btn");

// This function is triggered when the button is clicked
function handleClick() {
  
  // Brag about it
//   console.log("A button was clicked!");

//   // We can use d3 to see the object that dispatched the event
//   console.log("This is the object that handled the event:");
//   console.log(d3.event.target);
  
  //////

  // Select the input element and get the raw HTML node
  // var inputField = d3.select("#datetime");

  // Get the value property of the input element
  // var inputValue = inputField.property("value");
  
  // Or do it in one line, since you won't call inputField elsewhere
  inputValue = d3.select("#datetime").property("value");

  // See what you've got
  console.log(inputValue);

  // Filter your data by inputValue and assign it to a variable
  var filteredData = data.filter(sighting => sighting.datetime === inputValue);

  // As above, so below
//   data.filter(doFilter);

//   function doFilter(sighting) {
//       return sighting.datetime === inputValue;
//   }

  // Check on it
  console.log(filteredData);

  d3.select("tbody").selectAll("tr").remove();

  filteredData.forEach(function(filteredReport) {
    // console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(filteredReport).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO sighting report object
      var cell = row.append("td");
      cell.text(value);
    });
  });
}

// We can use the `on` function in d3 to attach an event to the handler function
inputButton.on("click", handleClick);

//////
// 
// Try copying filter function and nesting inside itself, using if statements to check for filled fields
// You'll also need to copy the filter box code in the html
// Remember to switch the tags on the copied functions to check different input boxes and search different columns