<template>
  <div>
    <ion-img :src="img" :alt="title"></ion-img>
    <h2 class="ion-text-center"> {{ title }}</h2>
    <p>
      Description :
      <br>
      {{ description }}
    </p>
  </div>
</template>

<script>
import { IonImg } from "@ionic/vue";

export default {
  props: ["title", "img", "description"],
  name: "ObjetDetails",
  components: {
    IonImg
  }
}
</script>
