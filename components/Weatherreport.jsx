import React, { useEffect, useState } from "react";
import getWeatherData from "@/utils/getWeatherData";
import Image from "next/image";

const Weatherreport = () => {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    const getData = async () => {
      const result = await getWeatherData();
      const { list, city } = result;

      let data = {
        temp: list[0].main.temp.toFixed(),
        city: city.name,
        des: list[0].weather[0].description,
        icon: `https://openweathermap.org/img/w/${list[0].weather[0].icon}.png`,
        wind: list[0].wind.speed.toFixed(),
        pressure: list[0].main.pressure,
      };
      setWeather(data);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="w-[120px] relative flex flex-col items-center">
        <div className="flex text-2xl text-white items-center">
          {`${weather.temp}\xB0C`}
          {weather.icon && (
            <Image
              src={weather?.icon}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-[55px] h-[55px]  max-sm:w-[40px] max-sm:h-[40px]"
            />
          )}
        </div>
        {/* <div className="text-orange-300 text-[.76em] tracking-wide absolute top-[45px] max-sm:top-[34px]">
          {weather.des}
        </div> */}
      </div>
    </div>
  );
};

export default Weatherreport;
