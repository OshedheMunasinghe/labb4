import axios from "axios";


const apiClient = axios.create({
  baseURL: "https://api.sampleapis.com/coffee",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCoffee() {
    return apiClient.get('/hot');
  },
};
