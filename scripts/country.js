const current_year = document.querySelector('#current_year');
const last_modification = document.querySelector('#last_modification');
const temperatureElement = document.querySelector('#temperature');
const conditionsElement = document.querySelector('#conditions');
const windElement = document.querySelector('#wind');
const windChillElement = document.querySelector('#windchill');
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
        Area: "105.4 km²",
        Population: "2,148,271",
        Capital: "Paris",
        Language: "French",
        Currency: "Euro (€)",
        Timezone: "CET (UTC+1)",
        Callingcode: "+33",
        Tld: ".fr",
    }
}

function displayWeather() {
    const { temperature, conditions, wind, type } = data.weather;
    temperatureElement.textContent = type === "Metric" ? `${temperature}°C` : `${temperature}°F`;
    conditionsElement.textContent = conditions;
    windElement.textContent = type === "Metric" ? `${wind} km/h` : `${wind} mph`;
    let metric = type==="Metric" && temperature <= 10 && wind > 4.8;
    let imperial = type==="Imperial" && temperature <= 50 && wind > 3;
    
    if (metric || imperial) {
        windChillElement.textContent = type === "Metric" ? `${calculateWindChill(temperature, wind)}°C` : `${calculateWindChill(temperature, wind)}°F`;
    } else {
        windChillElement.textContent = "N/A";
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

function displayLocation(){
    const location = data.location;
    const list = document.querySelector('#location');
    for (const key in location) {
        const item = itemTemplate(location[key], key);
        list.appendChild(item);
    }

}

displayWeather();
displayLocation();

current_year.innerHTML = new Date().getFullYear();
last_modification.innerHTML = new Date(document.lastModified).toLocaleString(); 

