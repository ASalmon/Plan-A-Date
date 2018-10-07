var searchEvent = function (events, location) {
    var eventBriteAPIKey = "4EWBHY45SSIIT4IW5U63";
    var eventBritequeryURL = "https://www.eventbriteapi.com/v3/events/search/?q=" + events + "&location.address=" + location + "&token=" + eventBriteAPIKey;

    $.ajax({
        url: eventBritequeryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var queryResult = response.events;

        for (var i = 0; i < queryResult.length && i < 9; i++) {
            var newCol = $('<div>').addClass('col-lg-4 col-md-6 search-result-item filter-events wow fadeInUp');
            var individualresultwrapper = $('<div>').addClass('search-result-wrap');
            var newfigure = $('<figure>');
            var newImg = $('<img>').attr('src', queryResult[i].url).addClass('img-fluid');
            var resultinfo = $('<div>').addClass('search-result-info').append(
                $('<h6>').text(queryResult[i].name.text)
                //$('<p>').text(queryResult[i].location.address1)
            );
            newfigure.append(newImg);
            individualresultwrapper.append(newfigure, resultinfo);
            newCol.append(individualresultwrapper);
            searchResultRow.append(newCol);
        }
        resultContainer.append(searchResultRow);
        $searchResultsElement.append(resultContainer);
    });
};

var search = function (food, events, location) {
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?text=&term=" + food + "&location=" + location;
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
                    $('<li>').attr('data-filter', '.filter-food').text('Food').addClass('filter-active'),
                    $('<li>').attr('data-filter', '.filter-events').text('Event')
                )
            )
        );
        var searchResultRow = $('<div>').addClass('row search-result-container');
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
            searchResultRow.append(newCol);
        }
        resultContainer.append(resultHeader, resultTabs, searchResultRow);
        $searchResultsElement.append(resultContainer);

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
};