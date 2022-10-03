export const state = () => ({
  classTheme: null,
  openNavBar: false,
  openFilter: false,
});

export const getters = {
  classTheme: (state) => state.classTheme,
  openNavBar: (state) => state.openNavBar,
  openFilter: (state) => state.openFilter,
};

export const mutations = {
  UPDATE_CLASS_THEME: (state, data) => {
    state.classTheme = data;
  },
  OPEN_NAVBAR: (state, data) => {
    state.openNavBar = data;
  },
  OPEN_FILTER: (state, data) => {
    state.openFilter = data;
  },
};

export const actions = {
  setClassTheme({ commit }, theme) {
    commit("UPDATE_CLASS_THEME", theme);
  },
  setNavbar({ commit }, status) {
    commit("OPEN_NAVBAR", status);
  },
  setFilter({ commit }, status) {
    commit("OPEN_FILTER", status);
  },
};
