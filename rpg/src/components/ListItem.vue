<template>
  <ion-item :router-link="`/${route}/${id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="img" :alt="title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonLabel, IonImg } from "@ionic/vue";
export default {
  props: ["route", "id", "title", "img"],
  name: "ListItem",
  components: {
    IonItem,
    IonThumbnail,
    IonLabel,
    IonImg
  }
}
</script>

<style scoped>

</style>
