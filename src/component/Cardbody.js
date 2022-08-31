import React, { useEffect, useState } from "react";
import "./style.css";

function Cardbody(props) {
  console.log(props);
  const [icon, setIcon] = useState("wi-day-haze");
  useEffect(() => {
    switch (props.main) {
      case "Haze":
        setIcon("wi-day-haze");
        break;
      case "Clear":
        setIcon("wi-day-sunny");
        break;
      case "Mist":
        setIcon("wi-dust");
        break;
      case "Clouds":
        setIcon("wi-day-cloudy");
        break;

      default:
        setIcon("wi-day-cloudy");
        break;
    }
  }, [props.main]);

  return (
    <>
      <h1 className="text-center">{props.city}</h1>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4 border border-5 border-success custom-card ">
            <i className={`wi ${icon} icons pt-5`}></i>
          </div>
          {props.array.map((element, i) => {
            return (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4  border border-5 border-success  pt-5 custom-card"
                key={i}
              >
                <div className="">
                  <h1 className="">{element.name}</h1>
                  <h1 className="">{element.id}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cardbody;
