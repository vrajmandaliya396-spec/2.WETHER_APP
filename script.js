var search_btn = document.querySelector(".search-btn");
var data_container = document.querySelector(".data_container");
var city_input = document.querySelector(".city-input");
var temp_container = document.querySelector(".temp-container");


data_container.style.display = "none";

search_btn.addEventListener("click", async function(e){
    // if(city_input.value === "ahmedabad"){
    //     data_container.style.display = "";
    // }
    if(city_input.value === ""){
        alert("Please enter a city name");
    }else{
    var city = city_input.value;

    var apikey = "60823be9af6440379047ded07e4379f5";
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",IN&appid=" + apikey + "&units=metric";
    
    var response = await fetch(url);

    var data = await response.json();

    var iconCode = data.weather[0].icon;

    var iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";

    document.querySelector(".temp-container h3").innerText = data.main.temp + "°C";
    document.querySelector(".data_container span").innerText = data.weather[0].main;
    document.querySelector(".data_container h2").innerText = "in" + "   " + city;
    document.querySelector(".data_container img").src = iconUrl;  
    


    data_container.style.display = "";

    city_input.value = "";


}   
            
});

