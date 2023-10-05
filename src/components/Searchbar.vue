<template>
    <div class="search-bar">
        <input type="text" id="search-input" placeholder="Cinéma, Musée, Sports...">
    </div>
    <section class="page-container">
    </section>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<style>
.header-container{
    display: flex;
    justify-content: space-between;
    padding: 2rem;
}

.ion-page{
    justify-content: start;
}

.search-bar {
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px;
}

.search-bar input {
    flex: 1;
    font-size: 16px;
    padding: 10px;
    outline: none;
    border-radius: 20px;
    display: flex;
    margin: 10px;
    background-color: azure;
    color: black;
}

</style>