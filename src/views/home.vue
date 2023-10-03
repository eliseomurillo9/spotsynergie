<template>
  <ion-page>
      <Header />
    <section class="page-container">
      <div
        class="img-container"
        :class="{ 'card-active': showInfo }"
        @click="showInfo = !showInfo"
      >
        <div class="info-container" v-if="showInfo">
          <h2>HELLO IM THE EVENT INFO</h2>
          <span
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos amet sint nostrum labore laboriosam minima odio vitae,
            dolorem, rerum hic nesciunt totam eos expedita dolorum dicta nobis
            quam, repudiandae asperiores!</span
          >
        </div>
      </div>
      <div class="buttons-container">
        <button class="btn" @click="swipeFunction(true)">
          <ion-icon aria-hidden="true" :icon="closeIcon" />
        </button>
        <button class="btn btn-yes" @click="swipeFunction(false)">
          <ion-icon aria-hidden="true" :icon="checkIcon" />
        </button>
      </div>
    </section>
  </ion-page>
</template>

<script setup>
import { ref, reactive } from "vue";
import closeIcon from "../icons/close.svg";
import checkIcon from "../icons/check.svg";
import Header from '../components/Header.vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/vue";

const showInfo = ref(false);
const swipeFunction = (response) => {
  console.log("I DONT WANNA GO");
};
</script>

<style>
.page-container {
  margin: auto;
  padding: 0 2rem 0 2rem;
}
.header-container {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

.img-container {
  background-size: cover;
  border-radius: 1.3rem;
  width: 25rem;
  height: 30rem;
  margin: auto;
  align-self: center;
  background-image: url("../assets/tour_Eiffel.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  transition: 0.5s ease-in-out;
}

.buttons-container {
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
}
.btn {
  background-color: red;
  border-radius: 100%;
  padding: 1rem;
  font-size: 3rem;
  display: flex;
}

.btn-yes {
  background-color: #03dac6;
}

.info-container {
  position: absolute;
  bottom: 0;
  padding: 1rem;
  z-index: 1;
  transition: 1s ease-in-out;
}

.card-active {
  height: 40rem;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  transition: 0.5s ease-in-out;
}
.card-active::after {
  z-index: 0;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35rem; /* Adjust the height of the gradient as needed */
  background: linear-gradient(
    360deg,
    rgba(27, 33, 41, 1) 0%,
    rgba(0, 0, 255, 0) 100%
  );
}

@media (max-width: 460px) {
  .img-container {
    width: 20rem;
    height: 25rem;
  }

  .btn {
    font-size: 2rem;
  }

  .card-active {
    height: 32rem;
    transition: 0.5s ease-in-out;
  }
}

@media (max-width: 378px) {
  .img-container {
    width: 15rem;
    height: 20rem;
  }
  .btn {
    font-size: 1.3rem;
  }
  .card-active {
    height: 30rem;
  }
}
</style>
