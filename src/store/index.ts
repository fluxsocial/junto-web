import communities from '@/data/communities';
import { createStore, Store } from 'vuex';

export interface Perspective {
  id: string;
  name: string;
  type: string;
  parentId: string;
}

export interface Community {
  id: string;
  name: string;
  perspectives: Array<Perspective>;
  profileImage: string;
}

export interface State {
  currentCommunity: Community | null;
  communities: Array<Community>;
  currentTheme: 'light' | 'dark';
}

const store = createStore<State>({
  state() {
    return {
      currentTheme: 'light',
      currentCommunity: null,
      communities,
    };
  },
  mutations: {

    createChannel(state, { channel, communityId }) {
      state.communities = state.communities.map((community) => {
        if (community.id === communityId) {
          return { ...community, perspectives: [...community.perspectives, { ...channel, id: Math.random().toString(36).substring(7) }] };
        } return community;
      });
    },

    createCommunity(state, payload) {
      state.communities = [...state.communities, {
        ...payload,
        profileImage: require('@/assets/images/junto_app_icon.png'),
      }];
    },

    createGroup(state, { name, communityId }: { name: string, communityId: string}) {
      state.communities = state.communities.map((community) => {
        if (community.id === communityId) {
          // TODO: Generate new ids
          return { ...community, perspectives: [...community.perspectives, { id: Math.random().toString(36).substring(7), name, type: 'group' }] };
        } return community;
      });
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
      return state.communities;
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
