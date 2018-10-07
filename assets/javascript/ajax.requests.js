var searchEvent = function (events, location) {
   var eventBriteAPIKey = "4EWBHY45SSIIT4IW5U63";
   var queryURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + events + "&location.address=" + location + "&token=" + eventBriteAPIKey;

   $.ajax({
      url: queryURL,
      method: "GET"
   }).then(function (response) {
      var individualResultContainer = $('<div>').addClass('col-lg-4 col-md-6 search-item filter-food wow fadeInUp')
          .append($('<div>').addClass('search-wrap')
          .append($('<figure>')
          .append(
           $('<img>').attr('src', response.image_url)
          )
         )
      )
      resultsContainer.append(individualResultContainer); 
   });
};

var searchFood = function(food, location) {
   var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=&term=" + food + "&location=" + location;  
   $.ajax({
       url: queryURL,
       method: 'GET',
       headers: {
           'authorization' : 'Bearer E7MDSicyKUxKA-QyaBY69yUUE96x1vw9m4aL0o7hHyHieVHcjNA8gkLWE8Th2qLFDskdLjG7F4szURHf_AoH9SxoeVhUTCZWgg-10xXtLcYAnFv5CvGTU-n4rSO0W3Yx',   
       } 
   }).then(function(response) {
    console.log(response);
      var individualResultContainer = $('<div>').addClass('col-lg-4 col-md-6 search-item filter-food wow fadeInUp')
          .append($('<div>').addClass('search-wrap')
          .append($('<figure>')
          .append(
           $('<img>').attr('src', response.business[0].image_url)
          )
         )
      )
      resultsContainer.append(individualResultContainer); 

   });
};