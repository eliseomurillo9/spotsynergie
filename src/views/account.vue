<template>
      <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ACCOUNT</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">ACCOUNT</ion-title>
        </ion-toolbar>
      </ion-header>
      <h1>HELLO IM ACCOUNT</h1>
    </ion-content>
  </ion-page>
    
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
</script>