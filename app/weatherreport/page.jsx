import getWeatherData from "@/utils/getWeatherData";
import Image from "next/image";

const WeatherreportPage = async () => {
  const { data, data2 } = await getWeatherData();

const now = data.date.slice(0,11)
const today = new Date(now).toLocaleDateString()




//Tomorrow
  let date = new Date();
  date.setDate(date.getDate() + 1);

  return (
    <div className="mx-auto mt-8 w-full max-w-[650px] text-white">
      <div className="mx-4 bg-[url('../public/images/cloud2.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex justify-between text-2xl font-semibold">
          <span>Het weer actueel:</span>
          <span className="flex items-end text-sm font-normal">{today}</span>
        </div>
        <div className="mt-4 h-[600px] rounded-lg border-2 p-2">
          <div className="flex mb-4 text-sm">
            Geüpdatet: {data.date.slice(11, data.date.length).slice(0, -3)} uur
          </div>
          <div className="mb-10 flex justify-center text-5xl font-semibold">
            Amsterdam
          </div>

          <div className="h=[50px] relative flex flex-col items-center justify-center">
            <Image
              src={data.icon}
              width={100}
              height={80}
              alt="icon"
              className="h-[80px] w-[100px] drop-shadow-[0_2px_4px_rgba(113,63,18,1)]"
            />
            <div className="absolute -bottom-2 flex justify-center text-lg font-semibold text-yellow-800">
              {data.description}
            </div>
          </div>

          <div className="mt-10 flex flex-row items-center justify-center">
            <span className="text-6xl font-semibold text-yellow-800">
              {" "}
              {Math.round(`${data.temp}`)}
              {`\xB0C`}
            </span>
          </div>

          <div className="mt-12 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900">
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 py-2 text-lg font-semibold">
              MaxTemp
            </div>
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 text-lg font-semibold">
              Wind
            </div>
            <div className="flex items-center justify-center border border-yellow-800 text-lg font-semibold">
              Druk
            </div>
            <div className="flex items-center justify-center border-b border-l border-yellow-800">
              {data.tempMax}
              {`\xB0C`}
            </div>
            <div className="f flex items-center justify-center border-b border-l border-yellow-800">
              {data.wind} bft
            </div>
            <div className="flex items-center justify-center border-b border-l border-r border-yellow-800">
              {data.pressure} hPa
            </div>
          </div>

          <div className="mt-4 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900">
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 py-2 text-lg font-semibold">
              Zicht
            </div>
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 text-lg font-semibold">
              Zon op
            </div>
            <div className="flex items-center justify-center border border-yellow-800 text-lg font-semibold">
              Zon onder
            </div>
            <div className="flex items-center justify-center border-b border-l border-yellow-800">
              {data.visibility} m
            </div>
            <div className="f flex items-center justify-center border-b border-l border-yellow-800">
              {data.sunrise} uur
            </div>
            <div className="flex items-center justify-center border-b border-l border-r border-yellow-800">
              {data.sunset} uur
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-8 bg-[url('../public/images/cloud.png')] bg-center bg-no-repeat">
        <div className="flex justify-between text-2xl font-semibold">
          <span>Verwachting voor morgen:</span>
          <span className="flex items-end text-sm font-normal">
            {date.toLocaleDateString("nl-NL")}
          </span>
        </div>
        <div className="mt-4 h-[600px] rounded-lg border-2 p-8">
          <div className="mb-10 flex justify-center text-5xl font-semibold">
            Amsterdam
          </div>

          <div className="h=[50px] relative flex flex-col items-center justify-center">
            <Image
              src={data2.icon}
              width={100}
              height={80}
              alt="icon"
              className="h-[80px] w-[100px] drop-shadow-[0_2px_4px_rgba(113,63,18,1)]"
            />
            <div className="absolute -bottom-2 flex justify-center text-lg font-semibold text-yellow-800">
              {data2.description}
            </div>
          </div>

          <div className="mt-10 flex flex-row items-center justify-center">
            <span className="text-6xl font-semibold text-yellow-800">
              {" "}
              {Math.round(`${data2.temp}`)}
              {`\xB0C`}
            </span>
          </div>

          <div className="mt-12 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900">
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 py-2 text-lg font-semibold">
              MaxTemp
            </div>
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 text-lg font-semibold">
              Wind
            </div>
            <div className="flex items-center justify-center border border-yellow-800 text-lg font-semibold">
              Druk
            </div>
            <div className="flex items-center justify-center border-b border-l border-yellow-800">
              {data2.tempMax}
              {`\xB0C`}
            </div>
            <div className="f flex items-center justify-center border-b border-l border-yellow-800">
              {data2.wind} bft
            </div>
            <div className="flex items-center justify-center border-b border-l border-r border-yellow-800">
              {data2.pressure} hPa
            </div>
          </div>

          <div className="mt-4 grid w-full grid-cols-3 grid-rows-2 bg-white/60 text-yellow-900">
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 py-2 text-lg font-semibold">
              Zicht
            </div>
            <div className="flex items-center justify-center border-b border-l border-t border-yellow-800 text-lg font-semibold">
              Zon op
            </div>
            <div className="flex items-center justify-center border border-yellow-800 text-lg font-semibold">
              Zon onder
            </div>
            <div className="flex items-center justify-center border-b border-l border-yellow-800">
              {data2.visibility} m
            </div>
            <div className="f flex items-center justify-center border-b border-l border-yellow-800">
              {data2.sunrise} uur
            </div>
            <div className="flex items-center justify-center border-b border-l border-r border-yellow-800">
              {data2.sunset} uur
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherreportPage;
