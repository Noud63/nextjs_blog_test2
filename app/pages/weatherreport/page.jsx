"use client"
import { useState, useEffect} from "react"
import getWeatherData from "@/utils/getWeatherData";
import WeerVandaag from "@/components/WeerVandaag";
import WeerMorgen from "@/components/WeerMorgen";

const WeatherreportPage = () => {

   const [d, setD] = useState({});
   const [d2, setD2] = useState({});

   useEffect(() => {
    const getData = async () => {
      try {
        const { data, data2 } = await getWeatherData();
        setD(data);
        setD2(data2);
      } catch (error) {
        console.log(error)
      }
    };
     getData();
   }, []);


  // const now = d.date.slice(0, 10);
  const today = new Date().toLocaleDateString();

  //Tomorrow
  let date = new Date();
  date.setDate(date.getDate(date) + 1);

  return (
    <div className="mx-auto mt-8 w-full text-white md:max-w-[650px]" >
      <div className="mx-4 bg-[url('../public/images/cloud2.png')] bg-cover bg-center bg-no-repeat max-md:mx-6 max-sm:mx-4">
        <div className="flex justify-between text-2xl font-semibold">
          <span>Het weer actueel:</span>
          <span className="flex items-end text-sm font-normal">{today}</span>
        </div>

        <WeerVandaag data={d} />
      </div>

      <div className="mx-4 mt-8 bg-[url('../public/images/cloud.png')] bg-center bg-no-repeat">
        <div className="flex justify-between text-2xl font-semibold">
          <span>Verwachting voor morgen:</span>
          <span className="flex items-end text-sm font-normal">
            {date.toLocaleDateString("nl-NL")}
          </span>
        </div>

        <WeerMorgen data2={d2} />
      </div>
      <div className="mt-8 flex justify-center text-xs">
        (Weather data provided by OpenWeathermap.org api)
      </div>
    </div>
  );
};

export default WeatherreportPage;
