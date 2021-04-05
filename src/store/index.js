import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
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
  getters: {
    getCommunities(state) {
      console.log(state.communities);
      return state.communities;
    }
  }

})
