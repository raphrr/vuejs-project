<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <slot/>
  </ion-content>
</template>

<script>

import {IonHeader, IonToolbar, IonContent, IonTitle} from '@ionic/vue';

export default {
  name: "ModalLayout",
  props: ['title', 'pageDefaultBackLink'],
  components: {
    IonTitle,
    IonContent,
    IonToolbar,
    IonHeader
  }
}
</script>
