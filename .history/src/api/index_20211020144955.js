import axios from "axios";

axios.defaults.timeout = 60000;

const getHeader = {
  "Content-Type": "application/json"
};

const service = axios.create({
  baseURL: "/"
});

service.interceptors.request.use(
  function(config) {
    const token = (getToken() || {}).token;
    if (token || config.token) {
      getHeader.Authorization = config.token || token;
    }
    Object.assign(config.headers, getHeader);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  function(response) {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

const to = promise => {
  return promise.then(res => [res, null]).catch(error => [null, error]);
};

export { service, to };
