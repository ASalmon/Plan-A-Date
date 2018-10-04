var eventBriteAPIKey = "4EWBHY45SSIIT4IW5U63";

   // Here we are building the URL we need to query the database

   var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=&token=" + eventBriteAPIKey;

   //samlpe query "https://www.eventbriteapi.com/v3/events/search/?q=" + userInput + "&location.address=" + cityInput + "&token=" + token;

   // Here we run our AJAX call to the OpenWeatherMap API
   $.ajax({
     url: queryURL,
     method: "GET"
   })
     // We store all of the retrieved data inside of an object called "response"
     .then(function(response) {

       // Log the queryURL
       console.log(queryURL);

       // Log the resulting object
       console.log(response);

       // Log the data in the console as well probably need to run loop to loop through list
       console.log("name: " + response.events[0].name.text);
       console.log("imageurl: " + response.events[0].logo.original.url);

     });