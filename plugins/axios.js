// import { removeCookie } from "../utils/localStorage";
import { getCookieServer, removeCookie } from "../utils/localStorage";
import { HTTP_STATUS } from "~/utils/constants";
import customerService from "~/services/customer";

export default function ({ $axios, $config, redirect, req, route }, inject) {
  $axios.defaults.timeout = 9000;
  $axios.defaults.headers["Content-Type"] = "application/json";
  $axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
  let Authorization = null;
  if (req && req.headers) {
    Authorization = getCookieServer(
      "Authorization",
      req ? req.headers.cookie : ""
    );
    $axios.defaults.headers.Authorization = "Bearer " + Authorization;
  }
  $axios.onResponse((response) => {
    return response.data;
  });
  $axios.onResponseError((error) => {
    if (!error.response || error.response.status === HTTP_STATUS.EXCEPTION) {
      // TODO: Handle error exception
    } else if (error.response.status === HTTP_STATUS.UNAUTHORIZED) {
      removeCookie("Authorization");
      // if (route.name !== "login") {
      //   redirect("/login");
      // }
    }
    // TODO: Handle error
    return Promise.reject(error);
  });

  const allMethods = {
    ...customerService($axios, Authorization),
  };
  const methods = Object.keys(allMethods);
  methods.forEach((method) => {
    inject(method, allMethods[method]);
  });
}
