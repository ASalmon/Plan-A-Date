// DOM Elements Query
var $locationInputElement = $('#location-input');
var $foodInputElement = $('#food-input');
var $eventInputElement = $('#event-input');
var $searchButtonElement = $('#search-button');
var $searchResultsElement = $('#result');
//var $snackbarElement = $('#input-validation');
var snackbarContainer = document.querySelector('#input-validation');
//$(document).ready(function () {
$searchButtonElement.on('click', function (event) {
  event.preventDefault();
  // Store user input in a local variable
  var locationInput = $locationInputElement.val().trim();
  var foodInput = $foodInputElement.val().trim();
  var eventInput = $eventInputElement.val().trim();
  // Search for events and food using eventbright and yelp    
  if (foodInput === '' &&
      locationInput === '' &&
      eventInput === '') {
        var data = {message: 'A valid input is needed in each field'};
        snackbarContainer.MaterialSnackbar.showSnackbar(data);
  } else {
    search(foodInput, eventInput, locationInput);
  }
});