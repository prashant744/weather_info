import React, { useState, useEffect } from "react";
import Cardbody from "./Cardbody";

function Temp() {
  const [searchValue, setSearchValue] = useState("");
  const [array, setArray] = useState([]);
  const [city, setCity] = useState("Bhopal");
  const [main, setMain] = useState("haze");

  const REACT_APP_API_SECRET_KEY = `40e3ee5d0f829f4bdf1ac62f6640e9fc`;

  let getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${REACT_APP_API_SECRET_KEY}`;
      let res = await fetch(url);
      let data = await res.json();

      const arr = [
        {
          name: "Temperature",
          id: data.main.temp,
        },
        {
          name: "Description",
          id: data.weather[0].description,
        },
        {
          name: "Pressure",
          id: data.main.pressure,
        },
        {
          name: "Humidity",
          id: data.main.humidity,
        },
        {
          name: "Country",
          id: data.sys.country,
        },
        {
          name: "Wind Speed",
          id: data.wind.speed,
        },
        {
          name: "Sunrise",
          id: new Date(data.sys.sunrise).toLocaleTimeString(),
        },
        {
          name: "Sunset",
          id: new Date(data.sys.sunset).toLocaleTimeString(),
        },
      ];
      setCity(data.name);
      setArray(arr);
      setMain(data.weather[0].main);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(
    () => {
      getWeatherData();
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <div className="text-center mt-3">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <button className="btn btn-success mx-2" onClick={getWeatherData}>
          Search
        </button>
      </div>
      <Cardbody array={array} city={city} main={main} />
    </>
  );
}

export default Temp;
