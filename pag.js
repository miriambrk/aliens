// code for the pagination
//var list = filteredSightings;
var pageList = new Array(); //what to display on the current page
var currentPage = 1;
var numberPerPage = 30;
var numberOfPages = 1;


function getNumberOfPages() {
    return Math.ceil(filteredSightings.length / numberPerPage);
}


function nextPage() {
    currentPage += 1;
    loadList();
}
function previousPage() {
    currentPage -= 1;
    loadList();
}
function firstPage() {
    currentPage = 1;
    loadList();
}
function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

//split the data up
function loadList() {
    console.log("loadList called")
    numberOfPages = getNumberOfPages();
    console.log("number of pages: " + numberOfPages);
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = filteredSightings.slice(begin, end);

    renderTable();
    check();         // determines the states of the pagination buttons
}

//determine which buttons to enable or disable
function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}
