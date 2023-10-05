<template>
  <ion-page>
    <Header :dateSelected="dateFormat"/>
    <section v-if="!getEventsFromMock[eventNumber]" class="error-message">
      <h2>No eventd availables</h2>
    </section>
    <section v-else class="page-container">
    <Header :dateSelected="dateFormat"/>
    <section v-if="!getEventsFromMock[eventNumber]" class="error-message">
      <h2>No eventd availables</h2>
    </section>
    <section v-else class="page-container">
      <div
        v-if="getEventsFromMock.length > 0"
        v-if="getEventsFromMock.length > 0"
        class="img-container"
        :style="{
          backgroundImage:
            'url(' + getEventsFromMock[eventNumber]?.avatar + ')',
        }"
        :style="{
          backgroundImage:
            'url(' + getEventsFromMock[eventNumber]?.avatar + ')',
        }"
        :class="{ 'card-active': showInfo }"
        @click="showInfo = !showInfo"
      >
        <div class="info-container" v-if="showInfo">
          <h2>{{ getEventsFromMock[eventNumber]?.name }}</h2>
          <span>{{ getEventsFromMock[eventNumber]?.description }}</span>
          <h2>{{ getEventsFromMock[eventNumber]?.name }}</h2>
          <span>{{ getEventsFromMock[eventNumber]?.description }}</span>
        </div>
      </div>
      <div class="buttons-container">
        <button class="btn" @click="swipeFunction()">
        <button class="btn" @click="swipeFunction()">
          <ion-icon aria-hidden="true" :icon="closeIcon" />
        </button>
        <button
          class="btn btn-yes"
          @click="swipeFunction(true, getEventsFromMock[eventNumber].id)"
        >
        <button
          class="btn btn-yes"
          @click="swipeFunction(true, getEventsFromMock[eventNumber].id)"
        >
          <ion-icon aria-hidden="true" :icon="checkIcon" />
        </button>
      </div>
    </section>
  </ion-page>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { ref, reactive, onMounted, computed } from "vue";
import closeIcon from "../icons/close.svg";
import checkIcon from "../icons/check.svg";
import Header from "../components/Header.vue";
import { setEvent, filterEvents } from "../services/eventService.js";
import { dateFormat } from '../composables/dates.js';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
} from "@ionic/vue";
const getEventsFromMock = ref([]);
const getEventsFromMock = ref([]);
const showInfo = ref(false);
const eventNumber = ref(0);


onMounted(async () => {
  getEventsFromMock.value = await filterEvents();
});

const swipeFunction = (response, id) => {
  if (response) {
    setEvent(id);
    eventNumber.value++;
  } else if (!getEventsFromMock.value[eventNumber.value]) {
    eventNumber.value = null;
  } else {
    eventNumber.value++;
  }
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
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
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

.error-message{
    margin: auto;
}

.error-message{
    margin: auto;
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
