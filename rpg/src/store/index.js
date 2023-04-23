import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            shops: [
                {id: 1, title: "Shop 1", description: "Shop 1 description", img: "https://www.centre-commercial.fr/bay2/wp-content/uploads/sites/37/2017/07/MY-KOZY-SHOP-BAY-2.png"},
            ],
            items: [
                {id: 1, title: "Item 1", description: "Item 1 description", img: "https://static.grainedephotographe.com/58-2007/Objet_en_studio.jpg"},
            ],
            personnages: [
                {id: 1, title: "Personnage 1", description: "Personnage 1 description", img: "https://www.francetvinfo.fr/image/759r5hedj-cf2b/580/326/10410843.jpg"},
            ]
        }
    },
    getters: {
        shops(state) {
            return state.shops;
        },
        shop(state) {
            return (shopId) => {
                return state.shops.find(el => el.id === parseInt(shopId));
            }
        },
        items(state) {
            return state.items;
        },
        item(state) {
            return (itemId) => {
                return state.items.find(el => el.id === parseInt(itemId));
            }
        },
        personnages(state) {
            return state.personnages;
        },
        personnage(state) {
            return (personnageId) => {
                return state.personnages.find(el => el.id === parseInt(personnageId));
            }
        }
    },
    mutations: {
        addShop (state, shop) {
            state.shops.push({ id: state.shops.length+1, title: shop.title, description: shop.description, img: shop.img });
        },
        addItem (state, item) {
            state.items.push({ id: state.items.length+1, title: item.title, description: item.description, img: item.img });
        },
        addPersonnage (state, perso) {
            state.personnages.push({ id: state.personnages.length+1, title: perso.title, description: perso.description, img: perso.img });
        },
        setShops(state, shops) {
            state.shops = shops;
        },
        setItems(state, items) {
            state.items = items;
        },
        setPersos(state, persos) {
            state.personnages = persos;
        },
    },
    actions: {
        getShopData(context) {
            axios.get("http://localhost:3000/api/shops").then(response => {
                context.commit("setShops", response.data);
            });
        },
        addShop(context, shopData) {
            let data_to_send = {shop: shopData}
            axios.post('http://localhost:3000/api/add/shop', { data: data_to_send, headers: {'Content-type': 'application/json; charset=UTF-8'}}).then(response => {
                context.commit("addShop", response.data);
            });
        },
        getItemData(context) {
            axios.get("http://localhost:3000/api/items").then(response => {
                context.commit("setItems", response.data);
            });
        },
        addItem(context, itemData) {
            let data_to_send = {item: itemData}
            axios.post('http://localhost:3000/api/add/item', { data: data_to_send, headers: {'Content-type': 'application/json; charset=UTF-8'}}).then(response => {
                context.commit("addItem", response.data);
            });
        },
        getPersoData(context) {
            axios.get("http://localhost:3000/api/persos").then(response => {
                context.commit("setPersos", response.data);
            });
        },
        addPerso(context, persoData) {
            let data_to_send = {perso: persoData}
            axios.post('http://localhost:3000/api/add/perso', { data: data_to_send, headers: {'Content-type': 'application/json; charset=UTF-8'}}).then(response => {
                context.commit("addPersonnage", response.data);
            });
        },
    }
});

export default store;
