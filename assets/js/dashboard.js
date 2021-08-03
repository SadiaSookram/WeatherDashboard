var searchBox = document.getElementById("search-box");
var submitFormEl = document.getElementById("searchForm")
var cityCurrentContainerEl = document.getElementById("city-choice")
var cityNameEl = document.getElementById("cityname");
var savedLocations = document.getElementsByClassName("Createdsavedlocations");
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
        //var UVindexfunc = getUV(data.coord.lat, data.coord.lon);
           humidity.innerHTML = data.main.humidity;
           wind.innerHTML = data.wind.speed + "  Miles Per Hour";
           temp.innerHTML = data.main.temp + "  Degrees Fahrenheit";
           cityname.innerHTML = param; 
        });
     } else {
        alert("Issue: our server is unable to process");
    }
 })
    .catch(function(error) {
    console.log("Something Happened!");
   // Todays Date 
  var currently = new Date().toLocaleDateString("en-US");
   document.getElementById('datetime').innerHTML= currently
})};
   
// Display Current Weather 5 day forecast on Screen 
    function cityWeather(param){
        var getApiUrl ='https://api.openweathermap.org/data/2.5/forecast?&q=' + param + '&appid=7fe1cc8350b277fdeddb1d18efc3c5c1'
        fetch(getApiUrl).then(function(response) {
            // response comes back correct
            if (response.ok) {
                response.json().then(function(data) {
                  console.log(data);
                  //Create loop through list array in API 
                //   for(var i=0; i>data.list.length; i++)
                 
                  
                // });

        // Retrieve Data for each day and add to innerHTML card associated

    } else {
        alert("Issue: our server is unable to process");
    }
 })
    .catch(function(error) {
    console.log("Something Happened!");
   

})};       
    
// User input to searchbar
    function CitySearch() {
        console.log('clicked')
    var cityinput= document.getElementById('citySearch')     
    const city = window.userInput = document.getElementById('citySearch').value;
    console.log(city);
    
    // Saving user input to local storage
    localStorage.setItem('city', cityinput.value);
    //citiesSearched.push(cityinput.value);
    window.localStorage.setItem('city', JSON.stringify(cityinput.value));
   
     
  // If search bar left null
    if (citySearch === '')
    alert("You havent entered a city! Try again");
    cityinput.value = " ";
    grabCity(city);
    cityWeather(city);

   };

 // Make Buttons and add them with local storage
    function Buttoncity() {
       var cityButtons = JSON.parse(window.localStorage.getItem('city'));
       if (cityButtons === 0 || cityButtons == '') return;
       
       for(var i=0; i<cityButtons.length; i++){
           var Buttoncities = document.createElement('button')
           Buttoncities.className=("buttons", "Createdsavedlocations ")
           Buttoncities.text=(Buttoncity[i])
           Buttoncities.attributes=("type","button")
           appendChild(Buttoncities); 
       }
    }
    
    


      
    







    




    
  

