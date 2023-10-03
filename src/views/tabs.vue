<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/add-event">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Ajouter un evenement</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/search">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/message">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Message</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="tab5" href="/tabs/account">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Compte</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

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
import { ellipse, square, triangle } from "ionicons/icons";
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
    title: "Ajouter un evenement",
    icon: add,
    link: "/tabs/add-event",
    tabNumber: "tab1",
  },
  {
    title: "Ajouter un evenement",
    icon: add,
    link: "/tabs/add-event",
    tabNumber: "tab1",
  },
]);
</script>
