import {icons} from "@/utils/weericonen"

const getKnmiData = async () => {

  try {
    const res = await fetch(
      "https://weerlive.nl/api/weerlive_api_v2.php?key=04f4cb685b&locatie=Amsterdam&callback=?",
    );

    const result = await res.json();
    const weer = result.liveweer[0]

   const data = {
      tijd: weer.time,
      plaats: weer.plaats,
      temp: weer.temp,
      desc: weer.samenv,
      wr: weer.windr,
      wk: weer.windbft,
      atm: weer.luchtd,
      verw: weer.verw,
      zonop: weer.sup,
      zononder: weer.sunder,
      waarsch: weer.wrschklr,
      icon: weer.image
    }

      for (const icon of icons) {
        if (weer.image === icon.slice(0, -4)) {
         data.icon = icon;
        }
      }

    console.log("Data:", JSON.stringify(data, null, 2))

    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getKnmiData;
