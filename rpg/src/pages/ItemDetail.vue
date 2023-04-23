<template>
  <layout :page-title="loadedItem ? loadedItem.title : 'Chargement...'" page-default-back-link="/item" :can-add="false">
    <objet-details :title="loadedItem ?  loadedItem.title : 'Chargement...'" :img="loadedItem ?  loadedItem.img : 'Chargement...'" :description="loadedItem ?  loadedItem.description : 'Chargement...'"></objet-details>
  </layout>
</template>

<script>
import ObjetDetails from "@/components/ObjetDetails";
import Layout from "@/components/Layout";

export default {
  name: "ItemDetail",
  components: {ObjetDetails, Layout},
  data() {
    return {
      itemId: this.$route.params.id
    }
  },
  computed: {
    loadedItem() {
      return this.$store.getters.item(this.itemId);
    }
  },
  watch: {
    '$route'(currentRoute) {
      this.itemId = currentRoute.params.id;
    }
  }
}
</script>
