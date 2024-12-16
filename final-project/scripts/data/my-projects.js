export const my_projects = [
    {
        id: 1,
        title: "Weather App",
        short_description: "A simple weather app that uses the OpenWeatherMap API to get the current weather for a city.",
        long_description: "This project was created to practice using APIs and to learn how to use Next.js. The app allows users to search for a city and get the current weather, temperature, and weather description. The app also displays the weather icon for the current weather condition.",
        image_mobile: "images/weather-app-mobile.webp",
        image_desktop: "images/weather-app-desktop.webp",
        technologies: ["Next.js", "Tailwind CSS", "OpenWeatherMap API"],
        repository: "https://github.com/Joregesosa/weather-app",
        live_demo: "https://weather-app-tan-pi-94.vercel.app/",
    },
    {
        id: 2,
        title: "Wind bnb",
        short_description: "A mockup of the Airbnb website for hosting wind turbines.",
        long_description: "This project was created to practice using React and Css. The app allows users to search and filter wind turbines by location and guest capacity.",
        image_mobile: "images/wind-bnb-mobile.webp",
        image_desktop: "images/wind-bnb-desktop.webp",
        technologies: ["React", "Css"],
        repository: "https://github.com/Joregesosa/windbnb_challenge/tree/main",
        live_demo: "https://joregesosa.github.io/windbnb_challenge/",
    },
    {
        id: 3,
        title: "Money Trail API",
        short_description: "A budget tracker app that allows users to track their expenses and income.",
        long_description: "This project was created using Python and FastAPI. The app allows users to create an account, log in, and track their expenses and income. The app also provides a summary of the user's expenses and income.",
        image_mobile: "",
        image_desktop: "",
        technologies: ["Python", "FastAPI", "SQLite"],
        repository: "https://github.com/Joregesosa/cse111-io-api", 
        live_demo: "",
    },
    {
        id: 4,
        title: "Services Report API", 
        short_description: " The API allows the admin user to register students and review and approve their services reports. The API also allows the students to submit their services reports.",
        long_description: "The Services API was created as demo project for my students to practice using APIs. The API allows the admin user to register students and review and approve their services reports. The API also allows the students to submit their services reports. The API is created using Nodejs, Express, google drive API, and PostgreSQL.",
        image_mobile: "",
        image_desktop: "",
        technologies: ["Nodejs", "Express", "PostgreSQL", "Google Drive API"],
        repository: "https://github.com/FunvalProgra/horas-servicio-api", 
        live_demo: "",
    }
]

export default my_projects;