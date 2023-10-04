<template>
  <ion-page>
    <Header />
    <Searchbar />
    <section class="subject1">
      <h1>Musées</h1>
      <div class="card-container ion-no-padding">
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card1</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card2</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card3</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
      </div>

    </section>
    <section class="subject2">
      <h1>Cinéma</h1>
      <div class="card-container ion-no-padding">
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card1</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card2</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card3</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
      </div>

    </section>
    <section class="subject3">
      <h1>Restaurants</h1>
      <div class="card-container ion-no-padding">
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card1</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card2</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
        <div class="card">
            <img src="https://via.placeholder.com/150" alt="Placeholder Image">
          <div class="card-content">
              <h2>Card3</h2>
              <p>This is a simple card example. You can put any content here.</p>
          </div>
        </div>
      </div>

    </section>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Header from '@/components/Header.vue';
import Searchbar from '@/components/Searchbar.vue';

</script>
<style>
.ion-page{
  overflow-y: auto;
}

.header-container{
  display: flex;
  justify-content: space-between;
  padding: 2rem;
}

h1{
  margin-left: 30px;
}

.card-container {
    display: flex;
    overflow-x: auto; /* Permet le défilement horizontal */
    width: 100vw; /* 100% de la largeur de la vue (viewport) */
    min-width: 100%; /* Assure que le conteneur a une largeur minimale égale à la largeur de l'écran */

}

.card {
  min-width: 200px;
  border: 1px solid #ccc;
  border-radius: 30px;
  overflow: hidden;
  margin: 10px 20px;

}

.card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.card:last-child {
    margin-right: 0;
}

.card-content {
    padding: 20px;
}

.card-content h2 {
    margin: 0 0 10px;
    font-size: 24px;
}

.card-content p {
    margin: 0;
    font-size: 16px;
}
</style>