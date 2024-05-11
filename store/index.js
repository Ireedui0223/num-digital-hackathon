export const state = () => ({
  snackbar: { value: false, type: null, message: "" },
  navigationDrawer: false,
});
export const mutations = {
  setSnackbar: (state, payload) => {
    state.snackbar = payload;
  },
  setNavigationDrawer: (state, payload) => {
    state.navigationDrawer = payload;
  },
};
