import { getCookieServer } from "../utils/localStorage";
// import { HTTP_STATUS } from "~/utils/constants";
export default async function ({
  req,
  redirect,
  $detailCustomer,
  store,
  $cookies,
}) {
  const cookie = req && req.headers ? req.headers.cookie : "";
  const authToken = getCookieServer("Authorization", cookie);
  if (authToken) {
    await $detailCustomer()
      .then((res) => {
        if (res.success && res.data) {
          store.commit("auth/SET_CUSTOMER", res.data.customer);
        }
      })
      .catch((e) => {
        $cookies.remove("Authorization");
        // redirect("/login");
      });
  }
}
