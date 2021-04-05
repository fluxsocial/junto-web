import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      currentCommunity: { name: "JUNTO", channels: ["home", "inspiration", "events"] },
      currentCommunityView: { name: 'main', type: 'feed' },
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
    // navigate to a new community
    changeCommunity(state, payload) {
      console.log('changing community');
      state.currentCommunity = payload.value;
    },

    // navigate to a different view within a community (i.e. feeds, channels, etc)
    changeCommunityView(state, payload) {
      state.currentCommunityView = payload.value;
    },
  },
  getters: {
    // Get the list of communities a user is a part of
    getCommunities(state) {
      console.log(state.communities);
      return state.communities;
    },
    // Get the current community the user is viewing
    getCurrentCommunity(state) {
      return state.currentCommunity;
    },

    // Get the view (i.e. feed,  channel) of the community a user is currently on
    getCurrentCommunityView(state) {
      console.log(state.currentCommunityView);
      return state.currentCommunityView;
    }
  }

})
