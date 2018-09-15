// cmd + shift + p Source action: sort imports
import * as qs from "qs";
import * as React from "react";
import "./App.css";

import Form from "./components/Form";
import Titles from "./components/Titles";
import Weather from "./components/Weather";

const apiKey = "71503238cf44b90e9563a8e60b4b5e30";

class App extends React.Component {
  public state = {
    city: null,
    country: null,
    description: null,
    error: null,
    humidity: null,
    temperature: null
  };
  public handleSubmit = async (a: any) => {
    a.preventDefault();

    const city = a.target.elements.city.value;
    const country = a.target.elements.country.value;
    const queryObj = {
      appid: apiKey,
      q: [city, country].filter(e => !!e).join(","),
      units: "metric"
    };

    const queryString = qs.stringify(queryObj);

    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?${queryString}`
    );

    const data = await apiCall.json();
    console.log(data);
    if (!data.hasOwnProperty("message")) {
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        error: "",
        humidity: data.main.humidity,
        temperature: data.main.temp
      });
    } else {
      this.setState({
        city: null,
        country: null,
        description: null,
        error: "OH NO! I cant seem to find your location!",
        humidity: null,
        temperature: null
      });
    }
  };
  public render() {
    const {
      city,
      country,
      description,
      error,
      humidity,
      temperature
    } = this.state;

    return (
      <div>
        <div className="Form">
          <Titles />
          <Form onSubmit={this.handleSubmit} />
          <Weather
            temperature={temperature}
            city={city}
            country={country}
            humidity={humidity}
            description={description}
            error={error}
          />
          <p className="sponsor">Powered by CBM Enterprises.</p>
        </div>
      </div>
    );
  }
}
export default App;
