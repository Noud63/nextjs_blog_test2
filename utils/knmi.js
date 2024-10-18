const getKnmiData = async () => {
  try {
    const res = await fetch(
      "https://weerlive.nl/api/weerlive_api_v2.php?key=demo&locatie=Amsterdam&callback=?"
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getKnmiData;
