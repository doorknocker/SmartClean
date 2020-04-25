import axios from "axios";

export default (store) =>
  axios.interceptors.request.use(function (config) {
    let token;
    if (typeof store === "string") {
      token = store;
    } else {
      token = store.getState().user.token;
    }
    config.headers["x-access-token"] = token;

    return config;
  });
