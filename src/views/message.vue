<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Conversation</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <button class="btn" @click="redirectToChat">
        <ion-icon aria-hidden="true" :icon="closeIcon" />
      </button>
      <div ref="talkjs" style="width: auto; margin: auto; height: 40rem">
        <i>Loading chat...</i>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/vue";
import closeIcon from "../icons/close.svg";
import Talk from "talkjs";
export default {
  name: "Chatbox",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return { closeIcon };
  },
  methods: {
    redirectToChat() {
      this.$router.push({ path: "/tabs/message" });
    },
  },
  async mounted() {
    await Talk.ready;
    const me = new Talk.User({
      id: "1",
      name: "me",
      photoUrl:
        "https://images.prismic.io/utopix-next-website/Mzk0NGJkOWEtY2ZlYS00MjVjLTkwNTAtOGY5OWQzN2IzNGVi_762cec57-2eaf-4eaf-9a0d-2e7860147e48_profilhomme7.jpg?auto=compress,format&rect=0,0,3830,5219&w=3830&h=5219?w=850",
      role: "default",
    });

    const talkSession = new Talk.Session({
      appId: "t15EuZRn",
      me: me,
    });

    const user2 = new Talk.User({
      id: "2",
      name: "Sebastian",
      email: "Sebastian@example.com",
      photoUrl:
        "https://img-19.commentcamarche.net/WNCe54PoGxObY8PCXUxMGQ0Gwss=/480x270/smart/d8c10e7fd21a485c909a5b4c5d99e611/ccmcms-commentcamarche/20456790.jpg",
      welcomeMessage: "Salut! Comment puis-je t'aider?",
      role: "default",
    });

    const conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, user2)
    );

    conversation.setParticipant(me);
    conversation.setParticipant(user2);

    const chatbox = talkSession.createChatbox();
    chatbox.select(conversation);

    chatbox.mount(this.$refs.talkjs);
  },
};
</script>

<style>
.body {
  background-color: #121212;
}

.btn {
  background-color: red;
  border-radius: 100%;
  padding: 0.2rem;
  font-size: 1rem;
  display: flex;
  margin-left: auto;
  margin-right: 0.5rem;
}
</style>
