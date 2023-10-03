<template>
  <ion-app class="app-container">
    <ion-router-outlet />
  </ion-app>
</template>

<style>
.app-container{
background-color: #1B2129;
}
</style>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
</script>
