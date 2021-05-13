import { createStore, Store } from 'vuex';

export interface Community {
  name: string;
  channels: Array<string>;
  profileImage: string;
}

export interface CommunityView {
  name: string;
  type: 'feed' | 'channel';
}

export interface State {
  currentCommunity: Community | null;
  currentCommunityView: CommunityView;
  communities: Array<Community>;
  currentTheme: 'light' | 'dark';
}

const store = createStore<State>({
  state() {
    return {
      currentTheme: 'light',
      currentCommunity: null,
      currentCommunityView: { name: 'main', type: 'feed' },
      communities: [
        {
          name: 'JUNTO',
          channels: ['home', 'inspiration', 'events'],
          profileImage: require('@/assets/images/junto_app_icon.png'),
        },
        {
          name: 'Holochain',
          channels: ['home', 'holo-fuel', 'meetups', 'when-moon'],
          profileImage: require('@/assets/images/junto_web_placeholder--holochain.png'),
        },
        {
          name: 'Soul Tribe',
          channels: ['home', 'anbu'],
          profileImage: require('@/assets/images/junto_web_placeholder--soul.png'),
        },
        {
          name: 'Qigong',
          channels: ['home', 'qigong'],
          profileImage: require('@/assets/images/junto_web_placeholder--temple.png'),
        },
      ],
    };
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

    // Toggle theme
    toggleTheme(state, payload) {
      const root = document.documentElement;

      if (payload.value === 'light') {
        state.currentTheme = 'light';
        root.style.setProperty('--junto-primary-dark', '#000');
        root.style.setProperty('--junto-primary', '#333');
        root.style.setProperty('--junto-primary-medium', '#555');
        root.style.setProperty('--junto-primary-light', '#999');
        root.style.setProperty('--junto-border-color', '#eee');
        root.style.setProperty('--junto-accent-color', '#B3808F');
        root.style.setProperty('--junto-background-color', '#fff');
        root.style.setProperty('--junto-background-rgba', '255, 255, 255');
      } else if (payload.value === 'dark') {
        state.currentTheme = 'dark';
        root.style.setProperty('--junto-primary-dark', '#fff');
        root.style.setProperty('--junto-primary', '#f0f0f0');
        root.style.setProperty('--junto-primary-medium', '#f0f0f0');
        root.style.setProperty('--junto-primary-light', '#999999');
        root.style.setProperty('--junto-border-color', '#555');
        root.style.setProperty('--junto-accent-color', '#B3808F');
        root.style.setProperty('--junto-background-color', '#333');
        root.style.setProperty('--junto-background-rgba', '0, 0, 0');
      }
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
    },
    // Get current theme
    getCurrentTheme(state) {
      return state.currentTheme;
    },

  },
});

export default store;

export function useStore(): Store<State> {
  return store;
}
