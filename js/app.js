// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// function build table 
function buildTable(data){
    
    // Clear existing data
    tbody.html("");

    // Loop through each object and append a row, cell for each value
    data.forEach(function(dataRow){

        //console.table(dataRow);
        var row = tbody.append("tr");

        //console.table(Object.values(dataRow));

        Object.values(dataRow).forEach(function(val){
            var cell = row.append("td");
            cell.text(val);
        });
    })

}

// Event that calls a function called filterTbl
function filterTbl(){ // function declaration

    // prevent the form from refreshing the page
    d3.event.preventDefault();

    let date = d3.select('#datetime').property('value');
    let filterData = tableData;

    // Check to see if a date was entered and filter the data using that date;
    if(date) {
        // Apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value
        filterData = filterData.filter((row) => row.datetime === date);
    }

    buildTable(filterData);
}

d3.selectAll('#filter-btn').on('click', filterTbl);

// Build table when page loads
buildTable(tableData);