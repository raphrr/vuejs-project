<template>
  <layout page-title="Personnage" :can-add="true">
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button @click="setOpen(true)">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <list-component :objets="personnages" route="personnage"></list-component>
    <ion-modal :is-open="modalOpened" @onDidDismiss="setOpen(false)">
      <ModalLayout title="Ajout d'un personnage">
        <ion-item>
          <ion-label position="floating">Titre :</ion-label>
          <ion-input placeholder="Nom du personnage" v-model="persoName"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Description :</ion-label>
          <ion-textarea rows="6" placeholder="Description du personnage" v-model="persoDesc"></ion-textarea>
        </ion-item>
        <ion-item>
          <ion-label position="floating">Image URL :</ion-label>
          <ion-input placeholder="https://www.google.com/" type="url" v-model="persoImg"></ion-input>
        </ion-item>
        <br>
        <br>
        <ion-button expand="block" color="danger" @click="setOpen(false)">
          Cancel
        </ion-button>
        <ion-button expand="block" color="success" :disabled="persoName.trim() == '' || persoDesc.trim() == '' || persoImg.trim() == ''" @click="addPersonnage()">
          Add
        </ion-button>
      </ModalLayout>
    </ion-modal>
  </layout>
</template>

<script>
import { IonFab, IonFabButton, IonIcon, IonModal, IonItem, IonLabel, IonInput, IonTextarea } from '@ionic/vue';
import { add } from "ionicons/icons";
import ModalLayout from "@/components/ModalLayout";
import Layout from "@/components/Layout";
import ListComponent from "@/components/ListComponent";

export default {
  name: "Personnage",
  data() {
    return {
      modalOpened: false,
      persoName: '',
      persoDesc: '',
      persoImg: ''
    }
  },
  computed: {
    personnages() {
      return this.$store.getters.personnages;
    }
  },
  components: {ModalLayout, Layout, ListComponent, IonFabButton, IonFab, IonIcon, IonModal, IonInput, IonItem, IonTextarea, IonLabel},
  methods: {
    setOpen(isOpen) {
      this.modalOpened = isOpen;
    },
    addPersonnage() {
      this.$store.dispatch('addPerso', { title: this.persoName, description: this.persoDesc, img: this.persoImg });
      this.modalOpened = false;
    }
  },
  mounted() {
    this.$store.dispatch('getPersoData');
  },
  setup() {
    return {
      add,
    }
  }
}
</script>
