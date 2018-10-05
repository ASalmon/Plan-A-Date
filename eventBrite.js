// alert("connected");

$(document).ready(function () {

    // Creates list/array of topics
var topics = ["daffy", "mickey", "bart", "elmer", "roadrunner", "goofy", "sponge bob", "bugs bunny", "sylvester", "scooby", "tweety", "taz"];
var userInput;

//funtion to create buttons
    function genButtons (params) {
        // (this is necessary otherwise we will have repeat buttons)
        $("#giphyBtn").empty();

        // Looping through the array of movies
        for (var i = 0; i < topics.length; i++) {
            // create buttons each giphy in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var genButton = $("<button>");
            // Adding a class
            genButton.addClass("giphyButton");
            // Adding a data-attribute with a value of the giphy at index i
            genButton.attr("data-name", topics[i]);
            // Providing the button's text with a value of the giphy at index i
            genButton.text(topics[i]);
            // Adding the button to the HTML
            $("#giphyBtn").append(genButton);
        }
    }
    //generates butons on the list
    genButtons();

//user input gets pushed into array
$('#find-giphy').on("click", function (event) {
    //stop bubbling
    // event.stopPropagation();
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();
    //get user input
    userInput = $("#giphy-input").val().trim().toLowerCase();
    // check for blank
    if (userInput.length <= 0){
    console.log("Don't leave me blank.")
    return false;
    }
   
    //search for existing buttons      
    else if (topics.indexOf(userInput) === -1){
        //pushes input to giphy list
        topics.push(userInput);
        console.log(topics);
        $("#giphy-input").val("");
        
    }
    //check for only letters and numbers ***This does not work
    else if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.log("Input Letters only");
    }
    // button already exists
    else{
        console.log("Button already exists")
        return false;
    }
        
    //generates buttons
    genButtons();
}); 
        //This  handles events where the add giphy button is clicked   
    $("#giphyBtn").on("click", "button", function (event) {
            //stop bubbling
            // event.stopPropagation();
            // event.preventDefault() prevents submit button from trying to send a form.
            // Using a submit button instead of a regular button allows the user to hit
            // "Enter" instead of clicking the button if desired
            event.preventDefault();
                    
            //getting data-name from button
            userInput = $(this).attr("data-name");   
            
            //api key
        var token = "4EWBHY45SSIIT4IW5U63";

            // QueryURL for Giphy API
        var queryURL = "https://www.eventbriteapi.com/v3/users/me/?token="+ token +
        // Performing an AJAX request with the queryURL 
            $.ajax({
                url: queryURL,
                method: "GET"
            })
   
                .then(function (response) {
                    console.log(queryURL);
                    console.log(response);
                                //catch errors 
                    // }).catch(function (error) {
                    // console.log('ERROR', error); 
    
                    // emtpy giphyPix before a new set is placed
                    // $("#giphyPix").empty();
                    
                    //var to hold query response
                    var results = response.data;
                    
                    //Loop through response and get all api results
                    for (var j = 0; j < results.length; j++) {
                        
                        //naming a new div giphyDiv
                        var giphyDiv = $("<div>");

                        //variable for rating and title
                        var title = results[j].title;
                            // console.log(results[j].title);

                        var rating = results[j].rating;
                            // console.log(results[j].rating);

                        // creating p tag for title and rating
                        var pTitle = $("<p>").text("Title: " + title);
                        var pRating = $("<p>").text("Rating: " + rating);

                        //var for image
                        var gifImage = $("<img>");
                        gifImage.attr("src", results[j].images.fixed_height_still.url); 
                        //attribute for still image
                        gifImage.attr("data-still", results[j].images.fixed_height_still.url);
                        //attribute for animate image
                        gifImage.attr("data-animate", results[j].images.fixed_height.url);
                        //attribute to provide a state. Starting state is "still"
                        gifImage.attr("data-state","still");
                        //class to created on click event to .gif
                        gifImage.attr("class", "gif");
                        

                        //appending pix to html line break, title, rating and image
                        giphyDiv.prepend("<hr>");
                        //title and rating
                        giphyDiv.append(pTitle);
                        giphyDiv.append(pRating);
                        //send still image to html 
                        giphyDiv.append(gifImage);
                    
                        //put giphy div in at the top of giphyPix div
                        $("#giphyPix").prepend(giphyDiv);

                    }
                    
                        //on click for gif images
                        $('.gif').on("click", function (event) {
                            //var for data-state
                            var state = $(this).attr("data-state");
                            
                            //if to check for still then change to animate
                            if (state === "still") {
                                $(this).attr("src", $(this).attr("data-animate"));
                                $(this).attr("data-state", "animate");
                            //to change from animate to still
                            } else {
                                $(this).attr("src", $(this).attr("data-still"));
                                $(this).attr("data-state", "still");
                            }
                            
                        });        
                  
            });    
             
        });
          
});