export const state = () => ({
  customer: {},
});

export const getters = {
  customer: (state) => state.customer,
};

export const mutations = {
  SET_CUSTOMER: (state, data) => {
    state.customer = data;
  },
};

export const actions = {
  setCustomer({ commit }, customer) {
    commit("SET_CUSTOMER", customer);
  },
};
