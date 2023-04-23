<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen class="ion-padding">
      <slot />
    </ion-content>
    <ion-toolbar>
      <ion-tabs>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="boutique" href="/shop">
            <ion-icon :icon="bagHandleOutline"></ion-icon>
            <ion-label>Boutique</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="item" href="/item">
            <ion-icon :icon="libraryOutline"></ion-icon>
            <ion-label>Items</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="personnage" href="/personnage">
            <ion-icon :icon="personOutline"></ion-icon>
            <ion-label>Personnage</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-toolbar>
  </ion-page>
</template>

<script>

import {
  IonHeader,
  IonContent,
  IonPage,
  IonToolbar,
  IonTitle,
  IonBackButton,
  IonTabs,
  IonTabButton,
  IonTabBar,
  IonIcon,
  IonButtons, IonLabel
} from "@ionic/vue";
import {bagHandleOutline, libraryOutline, personOutline} from "ionicons/icons";

export default {
  props: ["pageDefaultBackLink", "pageTitle", "canAdd"],
  name: "Layout",
  components: {
    IonHeader,
    IonContent,
    IonPage,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonTabs,
    IonTabButton,
    IonTabBar,
    IonIcon,
    IonButtons,
    IonLabel
  },
  setup() {
    return {
      bagHandleOutline,
      personOutline,
      libraryOutline
    }
  }
}
</script>
