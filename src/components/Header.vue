<template>
  <section class="header-container">
    <div class="location-container">
      <div class="city-location">
        <ion-icon aria-hidden="true" :icon="dotLocationIcon" />
        <span>Lille</span>
      </div>
      <select name="select-ratio" id="select-ratio">
        <option
          v-for="(distance, i) in distanceRatio"
          :value="distance"
          :key="i"
        >
          {{ distance }}
        </option>
      </select>
    </div>
    <div class="date-container">
      <span>Pour:</span>
      <input
        type="date"
        name="event-date"
        id="event-date"
        v-model="selectedDate"
      />
    </div>
  </section>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import dotLocationIcon from "../icons/dot-location.svg";
import { ref, reactive, defineProps } from "vue";

const props = defineProps({
  dateSelected: String
})


const selectedDate = ref(props.dateSelected);


const distanceRatio = ref(["2 Km", "5 Km", "8 Km", "10 Km"]);

</script>
<style>
.header-container {
  display: flex;
  justify-content: space-between;
}
.city-location,
.date-container > span {
  color: #03dac6;
}

.location-container > span {
  font-weight: 600;
}

.date-container {
  display: flex;
  flex-direction: column;
}

.date-container > input {
  background-color: inherit;
  border: none;
}

.location-container > select {
    border: none;
    background-color: #1B2129;
}
</style>
