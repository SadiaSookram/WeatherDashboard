var searchBox = document.getElementById("search-box");
var submitFormEl = document.getElementById("searchForm")
var cityCurrentContainerEl = document.getElementById("city-choice")
var cityNameEl = document.getElementById("cityname");
var savedLocations = document.getElementById("saved-locations");
var Forecast = document.getElementById("foreecast");
var searchButtonEl = document.getElementById("searchButton");
var apiKey= "7fe1cc8350b277fdeddb1d18efc3c5c1"  
var userInput = document.getElementById('citySearch').value;
var makeCard = document.getElementById("currentDay")
const myStorage = window.localStorage;

//Event Listener
    //searchButton = document.getElementById('searchButton');
    searchButtonEl.addEventListener('click',CitySearch)

//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?lat=43.700111&lon=-79.416298&appid={yourkey}
 
function grabCity(param) { 
// // Get weather for searched city
    var getApiUrl ='https://api.openweathermap.org/data/2.5/weather?q=' + param + '&appid=7fe1cc8350b277fdeddb1d18efc3c5c1'
    
// // Make request by search
 fetch(getApiUrl).then(function(response) {
     // response comes back correct
     if (response.ok) {
         response.json().then(function(data) {
           console.log(data);
           var Citydata = data['name'];;
           var temp = data['main']['temp'];
           var icon = data['main']['icon'];
           var hum = data ['main']['humidity'];
           var weatherValue = data['weather'][0]['description'];
                  Citydata.innerhtml = cityValue;
                  temp.innerhtml =  tempValue;
                  weatherValue.innerhtml= SummaryValue;
                  icon.innerhtml= iconsValue;
                  hum.innerhtml = humidityValue;
        });
     } else {
        alert("Issue: our server is unable to process");
    }
 })
    .catch(function(error) {
    console.log("Something Happened!");

})};
   
// Display Current Weather on Screen 
    function cityWeather(data){
      var makeCard = document.getElementById("currentDay")
   

    } 


// User input to searchbar
    function CitySearch() {
        console.log('clicked')
    const city= window.userInput = document.getElementById('citySearch').value;
    
    console.log(city);
  // If search bar left null
    if (citySearch === '')
    alert("You havent entered a city! Try again");
    grabCity(city);
   
   };
   // Saving data in local storage
   myStorage = myStorage.seItem(savedLocations);






    




    
  

