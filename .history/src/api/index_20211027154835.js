import axios from "axios";

axios.defaults.timeout = 60000;

axios.interceptors.request.use(config=>{
  console.log(123);
  return config
},err =>{
  console.log(err);
})
