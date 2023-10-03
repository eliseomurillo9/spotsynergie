<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="icon-container">
        <ion-tab-button
          v-for="tab in navBar"
          :tab="tab.tabNumber"
          :href="tab.link"
        >
          <ion-icon class="icon-color" aria-hidden="true" :icon="tab.icon" />
          <ion-label style="white-space: pre-line;">{{ tab.title }}</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<style>
.icon-container {
  display: flex;
  flex-direction: row;
}
</style>
<script setup>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { ref } from "vue";
import add from "../icons/add.svg";
import chat from "../icons/chat.svg";
import home from "../icons/home.svg";
import profile from "../icons/profile.svg";
import search from "../icons/search.svg";

const navBar = ref([
  {
    title: "Ajouter un evenement",
    icon: add,
    link: "/tabs/add-event",
    tabNumber: "tab1",
  },
  {
    title: "Parcourir",
    icon: search,
    link: "/tabs/search",
    tabNumber: "tab2",
  },
  {
    title: "Accueil",
    icon: home,
    link: "/tabs/home",
    tabNumber: "tab3",
  },
  {
    title: "Conversation",
    icon: chat,
    link: "/tabs/message",
    tabNumber: "tab4",
  },
  {
    title: "Compte",
    icon: profile,
    link: "/tabs/account",
    tabNumber: "tab5",
  },
]);
</script>
