<template>
  <div class="channelView">
    <direct-message
      v-for="message in messages"
      :key="message.id"
      :message="message"
    ></direct-message>
  </div>
</template>



<script>
import DirectMessage from "./../../../../components/direct-message/DirectMessage.vue";
export default {
  created() {
    console.log("yo");
  },
  data() {
    return {
      messages: [
        {
          id: 12345,
          username: "urkyang",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Hey what is up everyone!",
        },
        {
          id: 56779,
          username: "jdeepee",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Welcome to Junto!",
        },
        {
          id: 1,
          username: "urkyang",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Hey what is up everyone!",
        },
        {
          id: 2,
          username: "jdeepee",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Welcome to Junto!",
        },
        {
          id: 3,
          username: "urkyang",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Hey what is up everyone!",
        },
        {
          id: 4,
          username: "jdeepee",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Welcome to Junto!",
        },
        {
          id: 5,
          username: "urkyang",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Hey what is up everyone!",
        },
        {
          id: 6,
          username: "jdeepee",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Welcome to Junto!",
        },
        {
          id: 7,
          username: "jdeepee",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Welcome to Junto!",
        },
        {
          id: 8,
          username: "jdeepee",
          profilePicture: "./../../../assets/images/junto_app_icon.png",
          type: "TextMessage",
          message: "Welcome to Junto!",
        },
      ],
    };
  },
  components: {
    DirectMessage,
  },
};
</script>

<style lang="scss">
.channelView {
  padding: 2rem;
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>