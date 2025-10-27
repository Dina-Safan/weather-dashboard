//^ Html Elements
const toggleInput=document.querySelector("#toggle-input");
const htmlElement=document.documentElement;
const cardElement=document.querySelectorAll(".card");
const cardContainer=document.querySelector(".card-container")


//& Varaiables
const Savedtheme=localStorage.getItem("theme") || "light";
        htmlElement.setAttribute("data-bs-theme", Savedtheme);
        if( Savedtheme =="dark") toggleInput.checked=true;
const apiKey="69b5dc7d551c4eba835123154252610";
const baseURL="http://api.weatherapi.com/v1/forecast.json"




//~ Functions 
async function getWeather() {
    const response= await fetch(`${baseURL}?key=${apiKey}&q=london&days=7`);
    const data= await response.json();
    console.log(data);
    console.log(data.forecast.forecastday);

    displayCards(data);
    
}

getWeather();

function displayCards(data){
    const location=document.querySelector(".location").innerHTML=`${data.location.name} , ${data.location.country}`
    const days=data.forecast.forecastday;
    let card='';
    for(let [index,day]of days.entries()){
        const date=new Date(day.date);
          card=` <div class=" card ${index==0?"active":""}">
                        <div class="card-title">
                            <div class="day">${date.toLocaleDateString("en-us",index==0?{ weekday: "long" }:{ weekday: "short" })}</div>
                            <div class="time">${date.getHours()} : ${date.getMinutes()} ${date.getHours() >11 ?"PM" :"AM"}</div>
                        </div>
                        <div class="card-body">
                            <div class="main-info">
                                <div class="temp">${day.hour[date.getHours()].temp_c}c°</div>
                                <img src="./images/conditions/${day.day.condition.text.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-")}.svg" alt="${day.day.condition.text}">
                            </div>

                            <div class="todays-heighlight">
                                <ul >
                                    <li>realfeal: <span>${day.hour[date.getHours()].feelslike_c}°</span></li>
                                    <li>Wind: <span>${day.hour[date.getHours()].wind_kph}km/h</span></li>
                                    <li>Pressure: <span>${day.hour[date.getHours()].pressure_mb}MB</span></li>
                                    <li>Humidity: <span>${day.hour[date.getHours()].humidity}%</span></li>
                              
                                </ul>

                                <ul>
                                       <li>Sunrise: <span>${day.astro.sunrise} </span></li>
                                       <li>Sunset: <span>${day.astro.sunset} </span></li>
                                </ul>
                            </div>

                        </div>

                    </div>`
            cardContainer.innerHTML+=card;
    }
   
          
        

    


}


//TODO Events 
toggleInput.addEventListener("change",function(){
  const theme =toggleInput.checked ?'dark':'light';
  htmlElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme",theme);

})

for(let i=0;i<cardElement.length;i++){
   cardElement[i].addEventListener("click",function(e){
     const activeCard=document.querySelector(".active");
     activeCard.classList.remove('active');
     const clickedCard=e.currentTarget;
    clickedCard.classList.add("active");
   })
}



