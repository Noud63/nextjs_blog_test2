const location = "Amsterdam"
const KEY = process.env.NEXT_PUBLIC_WEATHERREPORT_API_KEY;

const getWeatherData = async () => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=nl&units=metric&appid=${KEY}`
    );

    const data = await res.json();

    if(!data){
      console.log("No data!")
    }
    return data;

  } catch (error) {
    console.log(error)
  }
};

export default getWeatherData
