
import getKnmiData from "@/utils/knmi";

const WeatherreportPage = async() => {
  
      const data2 = await getKnmiData()
     
return (
  <div className="flex justify-center ">
   

  <iframe src="https://gadgets.buienradar.nl/gadget/zoommap/?lat=52.37403&lng=4.88969&overname=2&zoom=11&naam=amsterdam&size=3&voor=1"  width="550" height="512"></iframe>
  </div>
);
};

export default WeatherreportPage;
