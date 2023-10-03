<template>
  <IonPage>
  <div class="center">
    <ion-card>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <ion-card-header>
        <ion-card-title>Card Title</ion-card-title>
        <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        Here's a small text description for the card content. Nothing more, nothing less.
      </ion-card-content>
    </ion-card>
  </div>
  </IonPage>
</template>

<style lang="css">
  .center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script setup>
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage } from '@ionic/vue';
  import { defineComponent } from 'vue';
</script>