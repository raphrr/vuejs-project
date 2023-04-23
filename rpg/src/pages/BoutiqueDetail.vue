<template>
  <layout :page-title="loadedShop ? loadedShop.title : 'Chargement...'" page-default-back-link="/shop" :can-add="false">
    <objet-details :title="loadedShop ? loadedShop.title : 'Chargement...'" :img="loadedShop ? loadedShop.img : 'Chargement...'" :description="loadedShop ? loadedShop.description : 'Chargement...'"></objet-details>
  </layout>
</template>

<script>
import Layout from "@/components/Layout";
import ObjetDetails from "@/components/ObjetDetails";

export default {
  name: "BoutiqueDetail",
  components: {ObjetDetails, Layout},
  data() {
    return {
      shopId: this.$route.params.id
    }
  },
  computed: {
    loadedShop() {
      return this.$store.getters.shop(this.shopId);
    }
  },
  watch: {
    '$route'(currentRoute) {
      this.shopId = currentRoute.params.id;
    }
  }
}
</script>

<style scoped>

</style>
