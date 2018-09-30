# Plan-A-Date 

### Group Project 1
#### Team members: Jamie Hernandez, Vicki Hope, Alton Salmon, Daniel Valverde

**Target Audience**
* adults, ages 18 and older
* interested in creating a plan of activities for a specific date/time period

**Problem to Solve**
* Reduce the complexity of planning an outing for one or more adults
* Prevent the user from having to search multiple sites, to find food/entertainment/attractions
* Provide an easy-to-use, pleasant to view, user experience 
* Our group strives to centralize the process of planning an outing by providing:
    * one website location where the user can:
        * view/select from food/movies/concerts/local attractions/weather status for:
        * a specified time period/date
        * related to a specified area/location
        * customized based on user interests
        * create an event plan in a way that can be shared easily with others

**Primary Goal**
* "to be the 'KAYAK' of event planning"
* provide a visually appealing, easy-to-use, centralized location that aggregates food, activities, and events for a user-specified date/time/location
* a user should be able to easily see what is available and make informed decisions based on their specific interests, budget, date and time-frame

**User Story 1**
* A 22 year-old male, Alan, wants help planning a first date to ease stress of a first date
    * he has asked his new friend about her interests
    * she has mentioned that she really like movies and Mexican food
    * Alan then launches our app, enters some basic information (date/time/location/# people,   clicks box that says he is 18 or older)
    * from a short list of EVENT TYPES (food, movies, concerts, local attractions)
        * is able to quickly limit his search for his specific needs (Food/Movie) 
        * is able to order selected events: movie first, then food or the reverse
        * based on EVENT TYPE selected, is then presented DETAIL data
            * Mexican restaurants in his specified area, open during his specified time
            * movie theatres and movies showing during time frame based on his area
        * Alan is then able to review and then select:
            * a Mexican restaurant
            * a movie showing at a specific movie theatre
        * once complete (submit plan) he is presented with his plan
        Plan-a-Date for Alan on this date at this time, with one guest
            Time: Event Type(FOOD) La Cazuela Restaurant - location (click link for directions)
            Time: Event Type (MOVIE) Hollywood Theatres, movie-Date Night - location 
            Weather forecast for this day is: 
           
**User Story 2**
* Two long-time friends Sally and Jill have a 6 hour layover in New York City and want to do something fun during that time, but have no idea what is available/possible during that time
    * they launch our app, enter the basic information (date/start-end time/location/# of people)
    * from list of EVENT TYPES they select FOOD and LOCAL ATTRACTIONS
    * they specify the order of events (Food first, then local attraction)
    * under FOOD event, from list of cuisine types they select Sushi, then select a restaurant
    * under attractions they select a museum that is with-in 30 minutes of airport
    * once selections are complete, they submit plan
    * Plan-a-Date for Sally on this date, at this time, with one guest
        Time: Event Type(FOOD) Sushi - location (click for directions)
        Time: Event Type(LOCAL ATTRACTIONS) - Museum name, location (click for directions)
        Weather forecast for this day is:

**User Story 3**
* Two couples are attending a friend's wedding in Miami Beach, FL. They will arrive a day early and want to plan a date for the four of them for an entire day. Each of them view our website and select different options to see what is available. Then they talk with each other, agree on a plan that suits them all. One person, Steve, then uses the site again selecting what was agreed upon by all four friends to set their plans.

    * Steve enters the basic information (date/start-end time/location/# of people)
    * from list of EVENT TYPES he selects FOOD, MOVIES, LOCAL ATTRACTIONS
    * he specifies the order of event types (you can specify an event type more than once)
    * he selects details - breakfast restaurant, a two-hour boat ride tour which includes lunch, dinner at Italian restaurant, then specific movie at specific theater
    * submits plan
    * Plan-a-date for Steve on this date, at this time with 3 other guests
        Time: Event Type(FOOD, breakfast) name, location (click for directions)
        Time: Event Type(LOCAL ATTRACTION) boat ride - location, *note lunch included
        Time: Event Type(FOOD, dinner) name, location (click for directions)
        Time: Event Type(MOVIE) theater location, movie name
        Weather forecast for this day is: 
        
 * FUTURE task list
                * link to Open Table to make reservations if applicable
                * link to Fandango to purchase tickets and include link to tickets in final plan
                * link to StubHub or Ticketmaster to purchase tickets, include link to tickets
                * add budget information to help narrow event detail shown
                * send plan via email to user or user AND guests
                * add SAVE to Favorites option (within event type)
                * add transportation options (bus, taxi, uber)
                * add hotel options
                * add text to voice/voice text options
                * add add-on services like sending flowers after the date  
                * save the planned event on the website so that other people (if they have the 
                    event number, can pull up the plan - it will autoexpire 24 hours after the last date of events)  
                * alternatively save the event plan on user's calendar (phone or computer)

**Project Requirements**
* this plan must:
-[] use at least 2 APIs (food/movie/event/weather)
        * food (Yelp)
        * movie (Fandango, GraceNote *      (http://developer.tmsapi.com/docs/read/data_v1_1/movies/Movie_showtimes))
        * weather (weather channel)
        * events (eventbrite or eventful)
        * location info (google maps)
- [] use AJAX to pull data
- [] use 1 new library that we have not used (ex. lodash, greensoft)
- [] polished front-end user interface
- [] meet quality coding standards
- [] no alerts, confirms, prompts
- [] have repeating elements (tables/columns)
- [] use Bootstrap or alternative CSS framework
- [] deploy gitHub pages
- [] must have user-input validation
- [] use Firebase for persistent storage
- [] must be mobile responsive (unless can state why this doesn't apply)

**Group Brainstorming Notes for Minimum Viable Product (MVP)**
* our group's initial thoughts about minimum functionality requirements, flow of user process

- [] determine colors/images/look and feel of user interface (Bootstrap, Material Design Lite)
- [] use of wireframe to help us visualize theme/layout/content/consistency across site
- [] minimum USER-INPUT required, depends on APIs used - user-input via keyboard (voice-future?)
    - zipcode or more specific address?
    - # of people 
    - date (only one day for now)
    - start time
    - stop time
- [] user-discovery area to select an EVENT TYPE
    - start with just 2 event types: FOOD, MOVIES or FOOD, LOCAL ATTRACTIONS?
    - FOOD could potentially have sub-types:
        - MEAL: breakast, lunch, dinner, other (ex. meet for coffee)
        - CATEGORY: Mexican, Chinese, American, Italian, etc - (full list TBD)
    - user can select one or two event types and can select FOOD more than once (Ex. breakfast and lunch) 
- [] event type detail selection area (once main event type selected)
    - user selects the order of events (food then movie or movie then food)
    - user presented with detailed list for each EVENT TYPE selected
    EVENT TYPE MOVIE
        - Movie Theater 1
            movie 1 at theater 1, start time
            movie 2 at theater 1, start time
        - Movie Theater 2
            movie 1 at theater 2, start time
            movie 2 at theater 2, start time
    EVENT TYPE FOOD (if select sub-type, show only those) for example FOOD, Italian, Seafood
        - Italian
            Luigi's
            Olive Garden
        - Seafood
            The Crab Shack
            Red Lobster

- [] user selects a restaurant and/or movie
- [] submit plan button which creates the final product to be presented to the user
- [] plan to include: 
     Plan-a-Date for (person's name) on (date) beginning at (start-time) with (# people) others:

    (time) Dinner at (restaurant name) clickable link for directions
    (time) (movie name) at (theater) clickable link for direcitons

    weather forecast for (date) is: 
- [] consider js library like Js Pdf - to generate a PDF file of our plan?
- [] consider storing the event in DB so other authorized users can come to our site, enter the # and see the plan - create and event group object that lists people in the group and their email so can send plan to group members via email or allow access to DB to view plan onlines





    

