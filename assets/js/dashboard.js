var searchBox = document.getElementById("search-box");
var cityInputEl = document.getElementById("city");
var cityCurrentContainerEl = document.getElementById("city-choice")
var cityNameEl = document.getElementById("cityname");
var savedLocations = document.getElementById("saved-locations");
var Forecast = document.getElementById("foreecast");
var searchButtonEl = document.getElementById("searchButton");
var MY_KEY = "appid={86a94257cfc1d5b519e9cb0cc8fea855}"
var SECRET_KEY = "appid={86a94257cfc1d5b519e9cb0cc8fea855}"
var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;



// Get weather for searched city
var cityCurrentWeather = function(city) {
    var getApi = api.openweathermap.org/data/2.5/weather?q={city}&exclude:{minutely,hourly,daily,alerts}&appid,MY_KEY;
// Make request by search
fetch(getApi).then(function(response) {
    // response comes back correct
    if (response.ok) {
        response.json().then(function(data) {
            cityWeather(data,city);
            console.log(data);
            console.log(city);
        });
    } else {
        alert("Issue: our server is unable to process");
    }
    })
    .catch(function(error) {
        console.log("Something Happened!");
    
});
// User input to searchbar
var searchButtonSubmit  = function(event) {
    event.preventDefault();
    var cityinput = cityInputEl.value.trim();
    // once user enters city specified
    if (cityinput) {
        cityCurrentWeather(cityinput);
        cityInputEl.value = "";

    } else {
        alert("You havent entered a city! Try again")
    }
      console.log(event);
};

// Display Current Weather
var cityWeather = function(searchBox, city) {
    //Check if weather was returned
    if (city.length === 0) {
      cityCurrentContainerEl.textcontent = "No weather Data Found for location."
      return; 
    }
    console.log(city);
    console.log(search);

    // Clear Search bar content
    searchBox.textContent ="";
    cityNameEl.textContent = city

       
    //save searches in Local Storage creates buttons for top 5
    for (var i = 0;i < 6; i++){
        //buttons
        var searchEl = document.createElement("button");
        searchEl.setAttribute =("href", MY_KEY)
        searchEl.classList = "buttons"
        searchEl.textContent = (city) 
        // append name to button and buttons to box
        searchEl.appendChild(searchEl.textContent);
        searchEl.appendChild(searchBox);


    }
}};

// Button click Element for City Specifics and Icons
var btnEl = function(event){}
    
  

// Event Listeners 
searchButtonEl.addEventListener("click", searchButtonSubmit);