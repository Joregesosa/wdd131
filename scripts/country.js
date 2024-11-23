const current_year = document.querySelector('#current_year');
const last_modification = document.querySelector('#last_modification');

function calculateWindChill(temperature, wind) {
    let result = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
    return result.toFixed(1);
} 
const data = {
    weather: {
        temperature: 10,
        conditions: "Partly Cloudy",
        wind: 5,
        type: "Metric",
    },
    location: {
        Area: "551,695 km²",
        Population: "66,589,268",
        Capital: "Paris",
        Language: "French",
        Currency: "Euro (€)",
        Timezone: "CET (UTC+1)",
        "Calling Code": "+33",
        "Internet Tld": ".fr",
    }
}

function displayWeather() {
    const list =  document.querySelector('#weather');
    const { temperature, conditions, wind, type } = data.weather;
    const temperatureValue = type === "Metric" ? `${temperature}°C` : `${temperature}°F`;
    const windValue =  type === "Metric" ? `${wind} km/h` : `${wind} mph`;

    let metric = type==="Metric" && temperature <= 10 && wind > 4.8;
    let imperial = type==="Imperial" && temperature <= 50 && wind > 3;
    let windchillValue = "N/A";
    if (metric || imperial) {
        windchillValue = type === "Metric" ? `${calculateWindChill(temperature, wind)}°C` : `${calculateWindChill(temperature, wind)}°F`;
    }  
    
    const temperatureItem = itemTemplate(temperatureValue, "Temperature");
    const conditionsItem = itemTemplate(conditions, "Conditions");
    const windItem = itemTemplate(windValue, "Wind");
    const windchillItem = itemTemplate(windchillValue, "Wind Chill");

    list.append(temperatureItem, conditionsItem, windItem, windchillItem);

}

function displayLocation(){
    const location = data.location;
    const list = document.querySelector('#location');
    for (const key in location) {
        const item = itemTemplate(location[key], key);
        list.appendChild(item);
    }

}

function itemTemplate(value, label) {
    const item = document.createElement('li');
    const strong = document.createElement('strong');
    const span = document.createElement('span');
    strong.textContent = `${label}: `;
    span.textContent = value;
    item.append(strong, span);

    return item;
    
}

displayWeather();
displayLocation();

current_year.innerHTML = new Date().getFullYear();
last_modification.innerHTML = new Date(document.lastModified).toLocaleString(); 

