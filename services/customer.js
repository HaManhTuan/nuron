import Cookies from "js-cookie";

const customerApi = {
  register: "/fe/customer/create-customer",
  login: "/fe/login",
  detailCustomer: "/fe/customer/current-customer",
  updateCustomer: "/fe/customer/update-customer/",
};

export default function ($axios, auth) {
  const Authorization = auth || Cookies.get("Authorization");
  const params = {};
  if (Authorization) {
    params.headers = {
      Authorization: `Bearer ${Authorization}`,
    };
  }
  return {
    register: async (data) => {
      const url = customerApi.register;
      return await $axios({
        url,
        data,
        method: "POST",
      });
    },
    login: async (data) => {
      const url = customerApi.login;
      return await $axios({
        url,
        data,
        method: "POST",
      });
    },
    detailCustomer: async (auth = null) => {
      if (auth) {
        params.headers = {
          Authorization: `Bearer ${auth}`,
        };
      }
      params.url = customerApi.detailCustomer;
      params.method = "GET";
      return await $axios(params);
    },
    updateCustomer: async (id, data, auth = null) => {
      if (auth) {
        params.headers = {
          Authorization: `Bearer ${auth}`,
        };
      }

      params.method = "PUT";
      params.url = customerApi.updateCustomer + id;
      params.data = data;
      return await $axios(params);
    },
  };
}
