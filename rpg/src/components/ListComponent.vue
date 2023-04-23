<template>
  <ion-list>
    <list-item v-for="objet in objets" v-bind:key="objet.id" :title="objet.title" :img="objet.img" :id="objet.id" :route="route"></list-item>
  </ion-list>
</template>

<script>

import { IonList } from "@ionic/vue";
import ListItem from "@/components/ListItem";

export default {
  props: ["objets", "route"],
  name: "ListComponent",
  components: {
    ListItem,
    IonList
  }
}
</script>
