<template>
  <IonPage>
    <section class="chats-list-container">
      <h1>Mes contacts</h1>
      <infoCard v-for="(message, i) in messages" :key="i" :title="message.name" :text="message.message" :image="message.avatar" class="info-card-space"/>
    </section>
  </IonPage>
</template>

<style lang="css">

.chats-list-container{
  padding: 1rem;
}
h1 {
  color: #03dac6;
  font-weight: 600;
  font-size: 2.3rem;
  padding-bottom: 1rem;
}

.info-card-space{
  margin: 1rem 0 1rem 0;
}
</style>
<script setup>
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonPage,
} from "@ionic/vue";
import infoCard from "../components/Info-card.vue";
import { ref } from "vue";

const messages = ref([
  {
    name: "Eliseo Murillo",
    message: "Comming on Saturday?",
    avatar: {
      link: 'eliseo.png',
      alt: 'avatar',
    }
  },
  {
    name: "Maxime Lecref",
    message: "Coucou",
  },
]);
</script>
