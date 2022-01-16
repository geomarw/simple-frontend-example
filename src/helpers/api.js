import axios from "axios";

const source = axios.CancelToken.source();

const api = axios.create({
  baseURL: process.env.REACT_APP_USER_ADM_API_URL,
  withCredentials: true,
  cancelToken: source.token,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (response) => {
    console.log({ response });
    return response;
  },
  (error) => {
    console.log({ error });
    return Promise.reject(error.response?.data?.err || JSON.stringify(error));
  }
);

api.cancel = () => source.cancel();

export default api;
