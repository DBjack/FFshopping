import axios from "axios";
const instance = axios.create({
  baseURL: "http://152.136.185.210:8000/api/n3",
});
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.log(error);
  }
);

export default instance;
