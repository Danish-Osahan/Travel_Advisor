import axios from "axios";

export const getData = async (bl_lat,bl_lng,tr_lat,tr_lng,type) => {
  try {
   const {data:{data}}= await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,

      {
        params: {
          bl_latitude:bl_lat?bl_lat: "43.58102453761487",
          tr_latitude: tr_lat?tr_lat:"43.85545793597914",
          bl_longitude: bl_lng?bl_lng:"-79.63921897890965",
          tr_longitude: tr_lng?tr_lng:"-79.11689708040795",
          limit: "30",
          currency: "USD",
          lunit: "km",
          lang: "en_US",
        },
        headers: {
          "X-RapidAPI-Key":
            "4b939d6b32mshfb070b8f62596b6p15e8d2jsnaec69d730875",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
