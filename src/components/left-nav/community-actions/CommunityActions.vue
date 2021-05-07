<template>
  <teleport to="body">
    <div class="communityActions">
      <div class="communityActions__dialog">
        <div class="communityActions__dialog--top">
          <div class="communityActions__dialog--title">
            <h2 class="communityActions__dialog--title--text">
              Create or Join a Community
            </h2>
            <div
              class="communityActions__dialog--title--container"
              @click="showCreateCommunity"
            >
              <svg class="communityActions__dialog--title--icon">
                <use href="@/assets/icons/icons.svg#cancel"></use>
              </svg>
            </div>
          </div>
          <p class="communityActions__dialog--description">
            Communities are the building blocks of Junto.
          </p>
          <div class="communityActions__dialog--options">
            <div
              class="communityActions__dialog--option"
              :style="createOptionClass"
              @click="toggleCommunityActionsView('Create')"
            >
              Create
            </div>
            <div
              class="communityActions__dialog--option"
              @click="toggleCommunityActionsView('Join')"
              :style="joinOptionClass"
            >
              Join
            </div>
          </div>
          <join-community v-if="showJoin"></join-community>
          <create-community v-if="showJoin === false"></create-community>
        </div>

        <div class="communityActions__dialog--bottom">
          <create-button v-if="showJoin === false"></create-button>
          <join-button v-if="showJoin"></join-button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CreateButton from '../../ui/buttons/CreateButton.vue';
import JoinButton from '../../ui/buttons/JoinButton.vue';
import CreateCommunity from './CreateCommunity.vue';
import JoinCommunity from './JoinCommunity.vue';

export default defineComponent({
  data() {
    return {
      showJoin: false,
    };
  },
  methods: {
    toggleCommunityActionsView(value) {
      if (value === 'Join') {
        this.showJoin = true;
      } else {
        this.showJoin = false;
      }
    },
  },
  components: {
    CreateButton,
    CreateCommunity,
    JoinCommunity,
    JoinButton,
  },
  computed: {
    createOptionClass() {
      if (this.showJoin) {
        return 'background-color: var(--junto-background-color); ';
      }
      return 'background-color: var(--junto-primary-medium); color: white;';
    },
    joinOptionClass() {
      if (this.showJoin) {
        return 'background-color: var(--junto-primary-medium); color: white;';
      }
      return 'background-color: var(--junto-background-color); ';
    },
  },
  props: {
    showCreateCommunity: Function,
  },
});
</script>

<style lang="scss">
@import '../../../assets/sass/main.scss';

.communityActions {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 1.7rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__privacy {
    outline: none;
    border: 1px solid var(--junto-border-color);
    background-color: var(--junto-background-color);
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 2rem;
    color: var(--junto-primary);
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover {
      cursor: pointer;
    }
  }

  &__dialog {
    width: 33vw;
    background-color: var(--junto-background-color);
    border-radius: 25px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 40rem;

    &--options {
      display: flex;
      margin-bottom: 3rem;
    }

    &--option {
      padding: 1rem;
      border: 1px solid var(--junto-border-color);
      border-radius: 5px;
      font-size: 1.4rem;
      font-weight: 500;
      margin-right: 1rem;
      &:hover {
        cursor: pointer;
        transition: all 0.2s;
      }
    }

    &--title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;

      &--text {
        font-size: 2.8rem;
        font-weight: 700;
      }

      &--container {
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &:hover {
          cursor: pointer;
        }
      }

      &--icon {
        height: 3rem;
        width: 3rem;
        fill: var(--junto-primary);
      }
    }

    &--description {
      font-size: 1.6rem;
      font-weight: 500;
      color: var(--junto-primary-medium);
      margin-bottom: 1.5rem;
    }
  }
}
</style>
