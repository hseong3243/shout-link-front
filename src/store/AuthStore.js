import {defineStore} from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: "",
    memberId: ""
  }),
  getters: {
    getBearerToken(state) {
      return 'Bearer ' + state.accessToken;
    },
    getMemberId(state) {
      return state.memberId;
    }
  }
});
