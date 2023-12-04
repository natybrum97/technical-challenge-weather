## Technical Challenge - Do I take a jacket?

Simulation of a front-end web application requested in a technical challenge to fill a front-end developer position.

### About the Project

This is a front-end web application, where, based on the name of a city, weather information will be displayed, such as: current temperature, maximum, minimum and the forecast for the next few days.

### Deployment link

The deployment was done using Vercel:

- https://technical-challenge-weather.vercel.app/

### Technologies Used

For this project, the following technologies were used:

- React (with Vite);
- Styled Components for styling;
- Recharts for graph construction;
- OpenWeatherMap website public API;
- Animate.css.

### How it Works

1. To obtain the data necessary for the application, it was necessary to use the public API of the OpenWeatherMap website.

2. To be able to use it, you must create a free API key (See documentation).

3. Two specific routes from this API were used:

- /weather;
- /forecast;

If in doubt, consult the documentation on the website:

- https://openweathermap.org/api

### Some business rules

1. The color of the text where the temperature is displayed must be guided by the following rule:

- Clear: “Open sky” (orange);
- Clouds: “Cloudy” (gray);
- Rain: “Raining” (blue);
- Snow: “Snowing” (light gray);
- Thunderstorm: “Storm” (purple);
- Drizzle: “Drizzle” (light blue);
- Mist: “Neblina” (light gray).

2. The user should be advised to wear a jacket only if the current, minimum and/or maximum temperature is below 17°C (or the equivalent in °K or °F).

### How to Run

1. Clone this repository.

2. Install all dependencies with the command:

```bash
npm i

```

3. Configure the .env file using the .env.example file.

4. Run the front-end in a development environment:

```bash
npm run dev
```

## How to configure the .env file

1. Initially change the name of .env.example to .env;

2. Go to the OpenWeatherMap public API website and create a free API key;

3. Paste this key into the flagged part of the .env and save the change:

```bash
VITE_API_KEY=YOUR_API_KEY
```

4. Ready, your .env file has been configured and you can now test your application locally.