import getKnmiData from "@/utils/knmi";
import Image from "next/image";

const WeatherreportPage = async () => {
  const data = await getKnmiData();

 let date = new Date();
 date.setDate(date.getDate() + 1);


  return (
    <div className="mx-auto mt-8 w-full max-w-[650px] text-white">
      <div className="mx-4 bg-[url('../public/images/cloud.png')] bg-cover bg-top bg-no-repeat">
        <div className="flex justify-between border-b-2 pb-2 text-2xl">
          <span>Het weer actueel:</span>
          <span className="flex items-end text-sm">{data.tijd}</span>
        </div>
        <div className="mt-4 h-[600px] rounded-lg border-2 p-8">
          <div className="mb-10 flex justify-center text-5xl font-semibold">
            Amsterdam
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={`/icons/${data.icon}`}
              width={100}
              height={80}
              alt=""
              className="drop-shadow-[0_2px_4px_rgba(113,63,18,1)] w-[90px] h-[80px]"
            />
          </div>

          <div className="mt-12 flex flex-row items-center justify-center">
            <span className="text-6xl font-semibold text-yellow-800">
              {" "}
              {`${data.temp} \xB0C`}
            </span>
          </div>

          {/* <div className="relative mx-auto mt-8 flex justify-center border-2 py-8">
                  <div className="absolute right-0 top-0 z-10 h-full w-full" />
                  <iframe
                        src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.37403&lng=4.88969&overname=2&zoom=11&naam=amsterdam&size=3&voor=1"
                        width="550"
                        height="512"
                  ></iframe>
                  </div> */}
        </div>
        <div className="mt-4 flex justify-between border-b-2 pb-2 text-2xl">
          <span>Verwachting voor morgen:</span>
          <span className="flex items-end text-sm">
            {date.toLocaleDateString("nl-NL")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default WeatherreportPage;
