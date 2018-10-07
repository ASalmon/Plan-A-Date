// DOM Elements Query
var $dateInputElement = $('#date-input');
var $locationInputElement = $('#location-input');
var $foodInputElement = $('#food-input');
var $eventInputElement = $('#event-input');
var $searchButtonElement = $('#search-button');
var $searchResultsElement = $('#search-result');


//$(document).ready(function () {
$searchButtonElement.on('click', function (event) {
  event.preventDefault();
  // Store user input in a local variable
  var dateInput = $dateInputElement.val().trim();
  var locationInput = $locationInputElement.val().trim();
  var foodInput = $foodInputElement.val().trim();
  var eventInput = $eventInputElement.val().trim();
  // Search for events and food using eventbright and yelp    
  //searchFood(foodInput, locationInput);
  //searchEvent(eventInput, locationInput);


  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=&term=" + foodInput + "&location=" + locationInput;
  $.ajax({
    url: queryURL,
    method: 'GET',
    headers: {
      'authorization': 'Bearer E7MDSicyKUxKA-QyaBY69yUUE96x1vw9m4aL0o7hHyHieVHcjNA8gkLWE8Th2qLFDskdLjG7F4szURHf_AoH9SxoeVhUTCZWgg-10xXtLcYAnFv5CvGTU-n4rSO0W3Yx',
    }
  }).then(function (response) {
    console.log(response);
    var queryResult = response.businesses;
    var resultContainer = $('<div>').addClass('container');
    var resultHeader = $('<header>').addClass('section-header').append(
      //Change the text below if you wish to change search results 
      $('<h3>').addClass('section-title').text('Search Results')
    );

    var resultTabs = $('<div>').addClass('row').append(
      $('<div>').addClass('col-lg-12').append(
        $('<ul>').attr('id', 'search-result-flters').append(
          $('<li>').attr('data-filter', 'filter-food').text('Food'),
          $('<li>').attr('data-filter', 'filter-events').text('Event')
        )
      )
    );
    var newRow = $('<div>').addClass('row search-result-container');
    for (var i = 0; i < queryResult.length && i < 9; i++) {
      var newCol = $('<div>').addClass('col-lg-4 col-md-6 search-result-item filter-food wow fadeInUp');
      var individualresultwrapper = $('<div>').addClass('search-result-wrap');
      var newfigure = $('<figure>');
      var newImg = $('<img>').attr('src', queryResult[i].image_url).addClass('img-fluid');
      var resultinfo = $('<div>').addClass('search-result-info').append(
        $('<h6>').text(queryResult[i].name),
        $('<p>').text(queryResult[i].location.address1)
      );
      newfigure.append(newImg);
      individualresultwrapper.append(newfigure, resultinfo);
      newCol.append(individualresultwrapper);
      newRow.append(newCol);
    }
    resultContainer.append(resultHeader, resultTabs, newRow);
    $searchResultsElement.append(resultContainer);

  });

});