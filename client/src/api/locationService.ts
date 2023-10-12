import axios from "axios";
const apiUrl: string = process.env.REACT_APP_API_URL || "";

export const getNavigation = async (start: string, end: string) => {
  console.log("get navigation");
  try {
    const result = await axios.get(`/locations/navigation`, {
      params: {   
        start: start,
        end: end
      }
    });
    return result.data;
  } catch (error) {
    console.error(error);
  }
}