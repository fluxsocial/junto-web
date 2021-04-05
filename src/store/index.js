import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      currentCommunity: { name: "JUNTO", channels: ["home", "inspiration", "events"] },
      communities: [
        { name: "JUNTO", channels: ["home", "inspiration", "events"] },
        {
          name: "Holochain",
          channels: ["home", "holo-fuel", "meetups", "when-moon"],
        },
        { name: "Naruto", channels: ["home", "anbu"] },
        { name: "Hoops", channels: ["home", "hoopiddydoops"] },
      ],
    }
  },
  mutations: {
    changeCommunity(state, payload) {
      console.log('changing community');
      state.currentCommunity = payload.value;
    }

  },
  getters: {
    getCommunities(state) {
      console.log(state.communities);
      return state.communities;
    },
    getCurrentCommunity(state) {
      return state.currentCommunity;
    }
  }

})
