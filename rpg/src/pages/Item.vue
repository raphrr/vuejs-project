<template>
  <layout page-title="Item" :can-add="true">
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="setOpen(true)">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <list-component :objets="items" route="item"></list-component>
    <ion-modal :is-open="modalOpened" @onDidDismiss="setOpen(false)">
      <ModalLayout title="Ajout d'un item">
        <ion-item>
          <ion-label position="floating">Titre :</ion-label>
          <ion-input placeholder="Nom de l'item" v-model="itemName"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description :</ion-label>
          <ion-textarea rows="6" placeholder="Description de l'item" v-model="itemDesc"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image URL :</ion-label>
          <ion-input placeholder="https://www.google.com/" type="url" v-model="itemImg"></ion-input>
        </ion-item>
        <br>
        <br>
        <ion-button expand="block" color="danger" @click="setOpen(false)">
          Cancel
        </ion-button>
        <ion-button expand="block" color="success" :disabled="itemName.trim() == '' || itemDesc.trim() == '' || itemImg.trim() == ''" @click="addItem()">
          Add
        </ion-button>
      </ModalLayout>
    </ion-modal>
  </layout>
</template>

<script>
import { IonFab, IonFabButton, IonIcon, IonModal, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue';
import { add } from "ionicons/icons";
import Layout from "@/components/Layout";
import ListComponent from "@/components/ListComponent";
import ModalLayout from "@/components/ModalLayout";

export default {
  name: "Item",
  data() {
    return {
      modalOpened: false,
      itemName: '',
      itemDesc: '',
      itemImg: ''
    }
  },
  computed: {
    items() {
      return this.$store.getters.items;
    }
  },
  components: {ModalLayout, Layout, ListComponent, IonFabButton, IonFab, IonIcon, IonModal, IonInput, IonItem, IonTextarea, IonLabel},
  methods: {
    setOpen(isOpen) {
      this.modalOpened = isOpen;
    },
    addItem() {
      this.$store.dispatch('addItem', { title: this.itemName, description: this.itemDesc, img: this.itemImg });
      this.modalOpened = false;
    }
  },
  mounted() {
    this.$store.dispatch('getItemData');
  },
  setup() {
    return {
      add,
    }
  }
}
</script>
