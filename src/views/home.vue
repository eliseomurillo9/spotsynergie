<template>
  <ion-page>
   <section class="page-container">
    <div class="header-container">
        <div>
            <span>ICON</span><span>Lille</span>
        </div>
        <div>
            <span>{{counter}}</span>
            <span>Selectionner une date</span>
        </div>
    </div>
    <div class="img-container">
        <img src="@/assets/tour_Eiffel.jpeg" alt="">
    </div>
    <button class="btn-container" @click="swipeFunction(true)"> X </button>
    <button class="btn-container-yes" @click="swipeFunction(false)"> check </button>
   </section>
  </ion-page>
</template>

<style>
.page-containe{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.header-container{
    display: flex;
    justify-content: space-between;
    padding: 2rem;
}

.img-container {
    margin: auto;
}

.img-container img{
    object-fit: cover;
    width: 25rem;
    height: 30rem;
    margin: auto;
    align-self: center ;
}

.btn-container {
    background-color: red;
    border-radius: 100%;
    padding: 2rem;
    font-size: 3rem;
}

.btn-container-yes {
    background-color: #03DAC6;
     border-radius: 100%;
    padding: 2rem;
    font-size: 3rem;
}
</style>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";


const counter = ref('COUOCU');
const list = reactive({})

const swipeFunction = (response:any) => {
    if (response) {
        console.log(counter.value);
    } else {
        console.log('I DONT WANNA GO');
    }
}
</script>
