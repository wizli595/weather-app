# React + Vite

# Weather App

A simple and intuitive weather application that allows users to get weather details based on the city name or their current location.

## Features

- **City-based Search**: Users can type in the name of a city to retrieve its current weather details.
- **Use My Location**: With a single click, users can fetch weather details for their current geographical location.
- **Error Handling**: Informative error messages are displayed if there's a problem with the search or fetching the user's location.

## Installation and Setup

1. **Clone the Repository**

git clone [Your Repository URL]
cd [Your Repository Name]

2. **Install Dependencies**

Make sure you have Node.js installed. Then:

npm install

3. **Run the App using Vite**

npm run dev

Your app should now be running on `http://localhost:3000`.

## Technologies Used

- **React.js**: For building the user interface of the application.
- **Vite**: A build tool and development server that offers faster and leaner development for modern web projects.
- **OpenWeather API**: For fetching weather details based on the city name.
- **LocationIQ**: For reverse geocoding to get the city name from latitude and longitude.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
