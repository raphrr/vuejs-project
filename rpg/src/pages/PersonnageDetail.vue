<template>
  <layout :page-title="loadedPersonnage ? loadedPersonnage.title : 'Chargement...'" page-default-back-link="/personnage" :can-add="false">
    <objet-details :title="loadedPersonnage ? loadedPersonnage.title : 'Chargement...'" :img="loadedPersonnage ? loadedPersonnage.img : 'Chargement...'" :description="loadedPersonnage ? loadedPersonnage.description : 'Chargement...'"></objet-details>
  </layout>
</template>

<script>
import ObjetDetails from "@/components/ObjetDetails";
import Layout from "@/components/Layout";

export default {
  name: "PersonnageDetail",
  components: {ObjetDetails, Layout},
  data() {
    return {
      personnageId: this.$route.params.id
    }
  },
  computed: {
    loadedPersonnage() {
      return this.$store.getters.personnage(this.personnageId);
    }
  },
  watch: {
    '$route'(currentRoute) {
      this.personnageId = currentRoute.params.id;
    }
  }
}
</script>
