import React, { useRef, useEffect, useState } from "react";

export default function Wether() {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const searchInputRef = useRef(null);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=88a4c62065af4309874210212211703&q=partille&aqi=no`
    )
      .then((respons) => respons.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const wetherInput = (e) => {
    setInput(e.target.value);
  };

  const searchWether = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=88a4c62065af4309874210212211703&q=${input}&aqi=no`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(setErrorMessage(`No matching places: ${input}`));
        }
      })
      .then((data) => {
        setWeather(data);
        setErrorMessage("");
        searchInputRef.current.value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {weather && (
        <div>
          <h1>{errormessage}</h1>
          <div className="search">
            <input
              ref={searchInputRef}
              onChange={wetherInput}
              type="text"
              maxLength="15"
            ></input>
            <button onClick={searchWether}>Search</button>
          </div>
          <h1>{weather.location.name}</h1>
          <h2>{weather.location.region}</h2>
          <h2>{weather.current.condition.text}</h2>
          <img className="icon" src={weather.current.condition.icon} alt="" />
          <h3>{weather.current.temp_c} Celsius</h3>
          <h4>Last updated: </h4>
          <h4>{weather.current.last_updated}</h4>
        </div>
      )}
    </>
  );
}
