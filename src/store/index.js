import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      currentCommunity: { name: "JUNTO", channels: ["main, inspiration, events"] },
      communities: [
        { name: "JUNTO", channels: ["main, inspiration, events"] },
        {
          name: "Holochain",
          channels: ["main, holo-fuel", "meetups", "when-moon"],
        },
        { name: "Naruto", channels: ["main, anbu"] },
        { name: "Hoops", channels: ["main, hoopiddydoops"] },
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
