import axios from "axios";

/*
const apiClient = axios.create({
  baseURL: "https://api.sampleapis.com/coffee",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  JSONCoffee() {
    return apiClient.get('/hot');
  },
};
*/
//TODO: skapa Wine i en ny fil

export default () => {
  return axios.create({
    baseURL: "https://api.sampleapis.com/coffee",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
