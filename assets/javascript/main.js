var eventBriteAPIKey = "4EWBHY45SSIIT4IW5U63";

// Here we are building the URL we need to query the database
var userInput = 'plays';
var cityInput = 'Atlanta';
//var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=&token=" + eventBriteAPIKey;
var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + "&location.address=" + cityInput + "&token=" + eventBriteAPIKey;
//samlpe query "https://www.eventbriteapi.com/v3/events/search/?q=" + userInput + "&location.address=" + cityInput + "&token=" + eventBriteAPIKey;;

// Here we run our AJAX call to the OpenWeatherMap API
var test;

$.ajax({
    url: queryURL,
    method: "GET"
  })
  // We store all of the retrieved data inside of an object called "response"
  .then(function (data) {
      // test = data.events;
      // for (var i = 0; i < test.length && i < 10; i++) {
      //   var content = "<h2>" + test[i].name.text;
      //   $("#results").append(content);  

      // }
      // test.forEach(function(result) {
      //   var content = "<h2>" + result.name.text + "</h2>" + result.description.html;
      //   $("#results").append(content);  
      // });
  });
