import axios from "axios";
const apiUrl: string = process.env.REACT_APP_API_URL || "";

export const getNavigation = async (start: string, end: string) => {
  try {
    const URL = `https://api.openrouteservice.org/v2/directions/foot-walking`
    const key = process.env.OPEN_ROUTE_API_KEY;
    const data = await axios.get(URL, {
      params: {
        api_key: key,
        start: start,
        end: end
      }
    }); 
    console.log(data);
  // try {
  //   const result = await axios.get(`${apiUrl}/locations/navigation`, {
  //     params: {
  //       start: start,
  //       end: end
  //     }
  //   });
  //   return result.data;
  } catch (error) {
    console.error(error);
  }
}
