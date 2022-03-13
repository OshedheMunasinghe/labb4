import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://api.sampleapis.com/coffee",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
//TODO make router to iceCoffee
export default {
  getHotCoffee() {
    return apiClient.get("/hot");
  },
  getIcedCoffee() {
    return apiClient.get("/iced");
  }
};
