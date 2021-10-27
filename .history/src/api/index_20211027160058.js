import axios from "axios";

axios.defaults.timeout = 60000;

axios.interceptors.request.use(config => {
  console.log(1234);
  return config
}, err => {
  console.log(err)
})
axios({
  url: "/practice/host_usage/",
  method: "get"
}).then(res => {
  console.log(res);
})