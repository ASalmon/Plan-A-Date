var search = function (food, events, location) {
   var seatgeekAPIKey = "MTM0NzI3NDZ8MTUzODkzNjQ4Ni43OA";
   var seatgeekQueryURL = 'https://api.seatgeek.com/2/events?q='+ location + "&client_id=" + seatgeekAPIKey;
   var yelpQueryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=&term=" + food + "&location=" + location;
   var yelpAPIKey = 'Bearer E7MDSicyKUxKA-QyaBY69yUUE96x1vw9m4aL0o7hHyHieVHcjNA8gkLWE8Th2qLFDskdLjG7F4szURHf_AoH9SxoeVhUTCZWgg-10xXtLcYAnFv5CvGTU-n4rSO0W3Yx'

   $.when(
      // Yelp AJAX request
      $.get( {url: yelpQueryURL, headers: {'authorization': yelpAPIKey}}),
      // Seatgeek AJAX request
      $.get( { url: seatgeekQueryURL } )
   ).then(function (yelpResponses, seetgeekResponses) {
      // Yelp and Seatgeek Responses
      var yelpQueryResult = yelpResponses[0].businesses;
      var seatgeekQueryResult = seetgeekResponses[0].events;

      $searchResultsElement.empty();
      // Created section to display results along with section header
      var searchResultContainer = $('<section>').attr('id', 'search-result')
      var resultContainer = $('<div>').addClass('container');
      var resultHeader = $('<header>').addClass('section-header').append(
          //Change the text below if you wish to change search results 
          $('<h3>').addClass('section-title').text('Search Results')
      );
      // Food and Events selector tab
      var resultTabs = $('<div>').addClass('row').append(
          $('<div>').addClass('col-lg-12').append(
              $('<ul>').attr('id', 'search-result-flters').append(
                  $('<li>').attr('data-filter','*').text('All').addClass('filter-active'),
                  $('<li>').attr('data-filter', '.filter-food').text('Food'),
                  $('<li>').attr('data-filter', '.filter-events').text('Event')
              )
          )
      );
      var searchResultRow = $('<div>').addClass('row search-result-container');
      resultContainer.append(resultHeader, resultTabs);
      // Display responses from Yelp
      for (var i = 0; i < yelpQueryResult.length && i < 9; i++) {
          var newCol = $('<div>').addClass('col-lg-4 col-md-6 search-result-item filter-food wow fadeInUp');
          var individualresultwrapper = $('<div>').addClass('search-result-wrap');
          var newfigure = $('<figure>');
          var newImg = $('<img>').attr('src', yelpQueryResult[i].image_url).addClass('img-fluid');
          var resultinfo = $('<div>').addClass('search-result-info').append(
              $('<h6>').text(yelpQueryResult[i].name),
              $('<p>').text(yelpQueryResult[i].location.address1)
          );
          newfigure.append(newImg);
          individualresultwrapper.append(newfigure, resultinfo);
          newCol.append(individualresultwrapper);
          searchResultRow.append(newCol);
      }
      resultContainer.append(searchResultRow);
      searchResultContainer.append(resultContainer)
      $searchResultsElement.append(searchResultContainer);
      // Display response from Seatgeek
      for (var i = 0; i < seatgeekQueryResult.length && i < 9; i++) {
         var newCol = $('<div>').addClass('col-lg-4 col-md-6 search-result-item filter-events wow fadeInUp');
         var individualresultwrapper = $('<div>').addClass('search-result-wrap');
         var newfigure = $('<figure>');
         var newImg = $('<img>').attr('src', seatgeekQueryResult[i].performers[0].image).addClass('img-fluid');
         var resultinfo = $('<div>').addClass('search-result-info').append(
             $('<h6>').text(seatgeekQueryResult[i].performers[0].name),
             $('<p>').text(seatgeekQueryResult[i].venue.address)
         );
         newfigure.append(newImg);
         individualresultwrapper.append(newfigure, resultinfo);
         newCol.append(individualresultwrapper);
         searchResultRow.append(newCol);
     }
      resultContainer.append(searchResultRow);
      searchResultContainer.append(resultContainer)
      $searchResultsElement.append(searchResultContainer);
      // Scroll to new search after results are loaded
      $('html, body').animate({ scrollTop: $('#search-result').offset().top-30 }, 'slow');
      // Results isotope and filter
      var searchIsotope = $('.search-result-container').isotope({
          itemSelector: '.search-result-item',
          layoutMode: 'fitRows'
      });
      $('#search-result-flters li').on('click', function () {
          $("#search-result-flters li").removeClass('filter-active');
          $(this).addClass('filter-active');
  
          searchIsotope.isotope({
              filter: $(this).data('filter')
          });
      });
   });
}
