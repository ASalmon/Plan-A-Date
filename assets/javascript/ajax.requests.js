var searchEvent = function (event, location) {
   var eventBriteAPIKey = "4EWBHY45SSIIT4IW5U63";
   var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + "&location.address=" + location + "&token=" + eventBriteAPIKey;

   $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function (response) {
      // test = data.events;
      // for (var i = 0; i < test.length && i < 10; i++) {
      //   var content = "<h2>" + test[i].name.text;
      //   $("#results").append(content);  
      // }
   });
};

var searchFood = function(food, loc) {
   var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=&term=" + food + "&location=" + loc;  
   $.ajax({
       url: queryURL,
       method: 'GET',
       headers: {
           'authorization' : 'Bearer E7MDSicyKUxKA-QyaBY69yUUE96x1vw9m4aL0o7hHyHieVHcjNA8gkLWE8Th2qLFDskdLjG7F4szURHf_AoH9SxoeVhUTCZWgg-10xXtLcYAnFv5CvGTU-n4rSO0W3Yx',   
       } 
   }).then(function(response) {

   }); 
};