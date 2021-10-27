//解决回调地狱问题，使结构更加清晰。
let checkLogin = () => {
  return new Promise((resolve, reject) => {
    let flag = document.cookie.indexOf("userId") > -1 ? true : false;
    if (flag = true) {
      resolve({
        status: 0,
        result: true
      })
    } else {
      reject("error")
    };
  });
};
checkLogin().then((res) => {
  if (res.status == 0) {
    console.log("login success");
  }
}).catch((err) => {
  console.log(`error:${err}`);
});

//多个请求
Promise.all([checkLogin(), getTest()]).then(([res1, res2])) => {
  console.log(res1.result, res2.result);
}

