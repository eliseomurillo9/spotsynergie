<template>
  <section class="header-container">
    <div class="location-container">
      <div class="city-location">
        <ion-icon aria-hidden="true" :icon="dotLocationIcon" />
        <span>Lille</span>
      </div>
      <span>A moins de 10 km</span>
    </div>
    <div class="date-container">
      <span>Pour:</span>
      <input type="date" name="" id="" />
    </div>
  </section>
</template>

<script setup>
import { IonIcon } from "@ionic/vue";
import dotLocationIcon from "../icons/dot-location.svg";
</script>
<style>
.header-container{
    display: flex;
    justify-content: space-between;
}
.city-location {
  color: #03dac6;
}

.location-container > span {
  font-weight: 600;
}

.date-container {
  display: flex;
  flex-direction: column;
}
</style>
