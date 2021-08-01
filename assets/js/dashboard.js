var searchBox = document.getElementById("search-box");
var submitFormEl = document.getElementById("searchForm")
var cityCurrentContainerEl = document.getElementById("city-choice")
var cityNameEl = document.getElementById("cityname");
var savedLocations = document.getElementById("saved-locations");
var Forecast = document.getElementById("foreecast");
var searchButtonEl = document.getElementById("searchButton");
var apiKey= "7fe1cc8350b277fdeddb1d18efc3c5c1"  
var userInput = document.getElementById('citySearch').value;
let object = {
    q : window.userInput = document.getElementById('citySearch').value,
    
  };
//   console.log(object);

// //api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// //https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// // Get weather for searched city
// //var getApiUrl ='https://api.openweathermap.org/data/2.5/weather?q'+ citySearch.value +'&appid=7fe1cc8350b277fdeddb1d18efc3c5c1';
// // Make request by search
// fetch('https://api.openweathermap.org/data/2.5/weather?appid=7fe1cc8350b277fdeddb1d18efc3c5c1&',{
//     method: 'POST',
//     body: 'q=' +  encodeURIComponent(JSON.stringify(object)),
// }) .then(function(response) {
//     // response comes back correct
//     if (response.ok) {
//         response.json().then(function(data) {
//             cityWeather(data,city);
//             console.log(data);
//             console.log(city);
//         });
//     } else {
//         alert("Issue: our server is unable to process");
//     }
// })
//     .catch(function(error) {
//         console.log("Something Happened!");
//      })

  function getParam(param){
      console.log('1st func', param)
  }  

    
// User input to searchbar
    function CitySearch() {
    const city= window.userInput = document.getElementById('citySearch').value;
    
    console.log(city); 
    
    if (citySearch === 0)
    alert("You havent entered a city! Try again");
    };

    //searchButton = document.getElementById('searchButton');
    searchButtonEl.addEventListener('click',CitySearch)

    




    
  

