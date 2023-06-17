import React from "react";

const Weather = ({ data }) => {
  return (
    <main>
      <div className="weather_card">
        {data?.status === 200 ? (
          <>
            <h1>
              {data.data.name}, <span style={{ fontSize: "16px" }}>{data.data.sys.country}</span>
            </h1>
            <p style={{ fontSize: "70px", fontWeight: "bold" }}>
              {data.data.main.temp}<sup>o</sup>c{" "}
            </p>
            <p> {data.data.main.temp_min} / {data.data.main.temp_max}</p>
          </>
        ) : (
          <h4>Cannot fetch data</h4>
        )}
      </div>
    </main>
  );
};

export default Weather;

//a2 sup
// h20 sub
