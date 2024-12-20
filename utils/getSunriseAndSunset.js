const latitude = 52.377956;
const longitude = 4.89707;
const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=CET&date_start=2024-12-20&date_end=2024-12-26`;

const getSunriseAndSunset = async () => {
    const res = await fetch(url);
    const data = await res.json()
    console.log(data)
    return data
};

export default getSunriseAndSunset;
