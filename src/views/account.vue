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
      <div class="user-icon" >
          <ion-icon :icon="user"   />
      </div>
      <div class="img-container">
        <div class="background-image">
          <img src="@/assets/guy1.jpeg" alt="Background Image" />
        </div>
        
      </div>  
        <ion-item>
          <div class="desc-container">
            <ion-textarea aria-label="Description" aria-placeholder="Description"></ion-textarea>
          </div>  
        </ion-item>
      
      
    </ion-content>
  </ion-page>
    
</template>
<style>
.page-containe{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.img-container {
    
    /* position: relative; */
}

.background-image img{
    object-fit: cover;
    width: 361px;
    height: 550px;
    flex-shrink: 0;
    border-radius: 29px;
    align-self: center ;
    margin: 15px ;
    
}
.user-icon ion-icon{
  width: 68px;
  height: 67px;
  border-top: 10rem;
  display: block;             
  border-radius: 50%;
  position: absolute;
  top: 9rem;
  left: 2rem;
  border: 5px solid #f7f2f2;
  /* background-color: #fff; */
  font-size: 64px;
}
.desc-container ion-textarea{
    object-fit: cover;
    width: 357px;
    height: 6rem;
    flex-shrink: 0;
    align-self: center ;
    border-radius: 15px;
    background: #34495E;
    flex-shrink: 0;
    
}


</style>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonIcon } from '@ionic/vue';
// import { personCircleOutline } from '@ionicons/icons';
import user from '../icons/user.svg'

export default {
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon},
  setup(){
    return{
      user
  }}
};

</script>