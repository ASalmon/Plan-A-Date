// DOM Elements Query
var $dateInputElement = $('#date-input');
var $locationInputElement = $('#location-input');
var $foodInputElement = $('#food-input');
var $eventInputElement = $('#event-input');
var $searchButtonElement = $('#search-button');
var $searchResultsElement = $('#search');

$(document).ready(function() {
  $searchButtonElement.on('click', function(event) {
    event.preventDefault();
    // Store user input in a local variable
    var dateInput = $dateInputElement.val().trim();
    var locationInput = $locationInputElement.val().trim();
    var foodInput = $foodInputElement.val().trim();
    var eventInput = $eventInputElement.val().trim();
    // Search for events and food using eventbright and yelp    
    var foodresult = searchFood(foodInput, locationInput);
    var eventResult = searchEvent(eventInput, locationInput);

    var resultContainer = $('<div>').addClass('container');
    var resultHeader = $('<header>').addClass('section-header').append(
      //Change the text below if you wish to change search results 
      $('<h3>').addClass('section-title').text('Search Results')
    );
    resultContainer.append(resultHeader);

    var resultTabs = $('<div>').addClass('row').append(
      $('<div>').addClass('col-lg-12').append(
        $('<ul>').attr('id','search-flters').append(
          $('<li>').attr('data-filter', 'filter-app').text('Food'),
          $('<li>').attr('data-filter', 'filter-card').text('Event')
        )
      )
    )
    $searchResultsElement.append(resultContainer,
      resultTabs  
    );
  });
});