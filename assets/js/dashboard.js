var searchBox = document.getElementById("search-box")
var selectedCity = document.getElementById("City")
var savedLocations = document.getElementById("saved-locations")
var Forecast = document.getElementById("foreecast")
var btnEl = document.getElementById("search-button")
// Get weather for searched city
var cityCurrentWeather = function(city) {
var getApi = "api.openweathermap.org/data/2.5/weather?q={city name}&appid={86a94257cfc1d5b519e9cb0cc8fea855} 

// Make request by search
fetch(getApi).then(function(response) {
    // response comes back correct
    if (response.ok) {
        response.json().then(function(data) {
            cityWeather(data,city);
        });
    } else {
        alert("Issue: our server is unable to process");
    }

});

// Display Current Weather
var cityWeather = function(city, search) {
    //Ccheck if weather was returned
    if (city.length === 0) {
      cityDivEl.textcontent = "No weather Data Found for location."
      return; 
    }

    console.log(city);
    console.log(search);
    //save searches in Local Storage create buttons for each one
    for (var i = 0;i < city.length; i++){
      
        //buttons
        var searchEl = document.createElement("button");
        searchEl.setAttribute =("href", getApi)
        searchEl.classList = "buttons"
        searchEl.textContent = (cityWeather) 
        // append buttons to box
        searchEl.appendChild(searchEl.textContent);


    }
}};

// Event Listeners 
btnEl.addEventListener("click", btnEl);