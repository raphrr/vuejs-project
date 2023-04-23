<template>
  <layout page-title="Boutique" :can-add="true">
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="setOpen(true)">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <list-component :objets="shops" route="shop"></list-component>
    <ion-modal :is-open="modalOpened" @onDidDismiss="setOpen(false)">
        <ModalLayout title="Ajout de boutique">
          <ion-item>
            <ion-label position="floating">Titre :</ion-label>
            <ion-input placeholder="Nom de la boutique" v-model="shopName"></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Description :</ion-label>
            <ion-textarea rows="6" placeholder="Description de la boutique" v-model="shopDesc"></ion-textarea>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Image URL :</ion-label>
            <ion-input placeholder="https://www.google.com/" type="url" v-model="shopImg"></ion-input>
          </ion-item>
          <br>
          <br>
          <ion-button expand="block" color="danger" @click="setOpen(false)">
            Cancel
          </ion-button>
          <ion-button expand="block" color="success" :disabled="shopName.trim() == '' || shopDesc.trim() == '' || shopImg.trim() == ''" @click="addShop()">
            Add
          </ion-button>
        </ModalLayout>
    </ion-modal>
  </layout>
</template>

<script>
import { IonFab, IonFabButton, IonIcon, IonModal, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue';
import { add } from "ionicons/icons";
import ListComponent from "@/components/ListComponent";
import Layout from "@/components/Layout";
import ModalLayout from "@/components/ModalLayout";

export default {
  name: "Boutique",
  data() {
    return {
      modalOpened: false,
      shopName: '',
      shopDesc: '',
      shopImg: ''
    }
  },
  components: {ModalLayout, Layout, ListComponent, IonFabButton, IonFab, IonIcon, IonModal, IonInput, IonItem, IonTextarea, IonLabel},
  computed: {
    shops() {
      return this.$store.getters.shops;
    }
  },
  methods: {
    setOpen(isOpen) {
      this.modalOpened = isOpen;
    },
    addShop() {
      this.$store.dispatch('addShop', { title: this.shopName, description: this.shopDesc, img: this.shopImg });
      this.modalOpened = false;
    }
  },
  mounted() {
    this.$store.dispatch('getShopData');
  },
  setup() {
    return {
      add,
    }
  }
}
</script>
