var searchBox = document.getElementById("search-box");
var submitFormEl = document.getElementById("searchForm")
var cityCurrentContainerEl = document.getElementById("city-choice")
var cityNameEl = document.getElementById("cityname");
var savedLocations = document.getElementById("saved-locations");
var Forecast = document.getElementById("foreecast");
var searchButtonEl = document.getElementById("searchButton");
var apiKey= "7fe1cc8350b277fdeddb1d18efc3c5c1"  
var userInput = document.getElementById('citySearch').value;

//Event Listener
    //searchButton = document.getElementById('searchButton');
    searchButtonEl.addEventListener('click',CitySearch)

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

 
function grabCity(param) { 
// // Get weather for searched city
    var getApiUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + param + '&appid=7fe1cc8350b277fdeddb1d18efc3c5c1'
    
// // Make request by search
 fetch(getApiUrl).then(function(response) {
     // response comes back correct
     if (response.ok) {
         response.json().then(function(data) {

                    
           console.log(data);           
           console.log(param);
        });
     } else {
        alert("Issue: our server is unable to process");
    }
 })
    .catch(function(error) {
    console.log("Something Happened!");
    })}

 
// User input to searchbar
    function CitySearch() {
        console.log('clicked')
    const city= window.userInput = document.getElementById('citySearch').value;
    
    console.log(city); 
    
    if (citySearch === '')
    alert("You havent entered a city! Try again");
    grabCity(city);
    };



    




    
  

