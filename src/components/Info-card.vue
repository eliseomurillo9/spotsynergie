<template>
  <div class="card-container" @click="redirectToChat">
    <img v-if="image?.link" src="@/assets/eliseo.png" :alt="image.alt" />
    <ion-icon
      v-else
      class="icon-container"
      aria-hidden="true"
      :icon="profileIcon"
    />
    <div class="information-div">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
import { useRouter } from "vue-router";
import { IonIcon } from "@ionic/vue";
import profileIcon from "../icons/profile.svg";
const props = defineProps({
  title: String,
  text: String,
  image: Object,
});

const router = useRouter();
const redirectToChat = () => {
  router.push({ path: "/chat" });
};
</script>
<style>
.card-container {
  background-color: #d9d9d9;
  border-radius: 1rem;
  padding: 0.8rem;
  display: flex;
  gap: 2rem;
}

.card-container > img {
  height: 4rem;
  border-radius: 100%;
  margin: auto 0 auto 0;
}
.information-div > h2 {
  color: #ba0707;
  font-weight: 600;
  margin-bottom: 0;
}

.information-div > p {
  color: #2e2e2e;
  margin-top: 0.3rem;
}

.icon-container {
  background-color: #2e2e2e;
  border-radius: 100%;
  padding: 0.3rem;
  font-size: 3rem;
  margin: auto 0 auto 0;
}
</style>
