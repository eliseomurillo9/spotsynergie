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
        <div class="avatar">
          <ion-avatar>
            <img alt="Silhouette of a person's head" src="../assets/user.png" />
          </ion-avatar>
        </div> 
        <div class="first-username">
          <ion-text > USERNAME</ion-text>
        </div> 
        <div class="second-username">
          <ion-text > @USERNAME</ion-text>
        </div>
      </ion-header>
      <!-- <div class="user"> -->
           
          <swiper @slideChange="onSlideChange">
            <swiper-slide>
              <div class="img-container"> 
                <div class="background-image">
                <img src="@/assets/guy1.jpeg" alt="Background Image" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-container"> 
                <div class="background-image">
                <img src="@/assets/guy1.jpeg" alt="Background Image" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-container"> 
                <div class="background-image">
                <img src="@/assets/guy1.jpeg" alt="Background Image" />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="img-container"> 
                <div class="background-image">
                <img src="@/assets/guy1.jpeg" alt="Background Image" />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        
        <!-- <div class="img-container"> -->
          <!-- <div class="background-image">
            <img src="@/assets/guy1.jpeg" alt="Background Image" />
          </div> -->
        <!-- <div class="user-icon" >
          <ion-icon :icon="user"   /> -->
          <!-- <div class="avatar">
            <img src="../assets/some.jpg" />
          </div> -->
      <!-- </div> -->
        <!-- <div class="background"> -->
          <div class="desc-container">
            <ion-textarea  placeholder="Description" :clear-on-edit="true" />
          </div>  
        
      
      
    </ion-content>
  </ion-page>
    
</template>
<style>
.page-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
}
.swiper{
  /* padding: 1px; */
  height: 40rem;
  bottom: 33px;
  
}
.swiper .swiper-slide img{
    object-fit: cover;
    width: 341px;
    height: 520px;
    flex-shrink: 0;
    border-radius: 29px;
    /* align-self: center ; */
    margin: 24px ;
    
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
  border: 2px solid #f7f2f2;
  /* background-color: #fff; */
  
}

.desc-container ion-textarea{
    object-fit: cover;
    width: 364px;
    height: 7rem;
    flex-shrink: 0;
    align-self: center ;
    border-radius: 15px;
    background: #34495E;
    flex-shrink: 0;
    padding: 2rem;
    color: #FFF;
    font-family: Inter;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    left: 13px;
    bottom: 70px;
    
}
.avatar ion-avatar{
  width: 80px;
  height: 80px; 
  position: absolute;
  margin: 0 auto;
  border-top: 10rem;
  display: block;             
  border-radius: 50%;
  position: absolute;
  top: 125px;
  left: 55px;
  border: 4px solid #747272;
  /* &::before,
	&::after {
		border: 3px solid transparent;
		border-radius: 50%;
		border-top: 5px solid #161313;
		content:"";
		display: block;
		height: 88px;
		left: 50%;
		width: 88px;
		position: absolute;
    top: -8px;
	}
	
	&::before {
		top: -1 * 10px;
		transform: translateX(-50%);
	}
	
	&::after {
		bottom: -1 * 10px;
		transform: translateX(-50%) rotate(180deg);
  } */
}
.first-username {
  width: 168px;
  height: 36px;
  flex-shrink: 0;
  color: #fafafa;
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  top: 139px;
  left: 55px;
  position: absolute;
  left: 10rem;
}
.second-username {
  width: 136px;
  height: 29px;
  flex-shrink: 0;
  color: #7C7B7B;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
  top: 165px;
  position: absolute;
  left: 170px;
}
</style>

<script>

  // import { IonTextarea } from '@ionic/vue';
  // import { defineComponent } from 'vue';


  // export default defineComponent({
  //   components: { IonTextarea },
  // });
  import { defineComponent } from 'vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: {
      Swiper,
      SwiperSlide,
      IonContent,
      IonPage,
    },
  });

// // import { personCircleOutline } from '@ionicons/icons';
// import user from '../icons/user.svg'


// export default {
//   components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonTextarea},
//   setup(){
//     return{
//       user
//   }}
// };

</script>