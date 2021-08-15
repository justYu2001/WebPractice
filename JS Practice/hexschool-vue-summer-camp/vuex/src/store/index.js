import { createStore } from "vuex";

const moduleA = {
    namespaced: true,
    state: {
        name: "module a",
    },
    getters: {},
    mutations: {},
    actions: {
        doAction({ commit }) {
            commit("fetchUserInfo", "1", { deep: true });
        },
    },
};

const moduleB = {
    namespaced: true,
    state: {
        name: "module b",
    },
    getters: {},
    mutations: {},
    actions: {},
};

export default createStore({
    state: {
        greeting: "Hello Vue!",
        product: "book",
        price: 500,
        quantity: 100,
        user: {},
    },
    getters: {
        discount(state) {
            return state.quantity > 50 ? 0.8 : 0.9;
        },
        sellingPrice(state, getters) {
            return state.price * getters.discount;
        },
    },
    mutations: {
        setQuantity(state, payload) {
            state.quantity = payload;
        },
        setUserInfo(state, user) {
            state.user = user;
        },
    },
    actions: {
        async fetchUserInfo(context, id) {
            try {
                const url = `https://jsonplaceholder.typicode.com/users/${id}`;
                const res = await fetch(url);
                const userData = await res.json();
                context.commit("setUserInfo", userData);
            } catch (error) {
                console.log(error);
            }
        },
    },
    modules: {
        moduleA,
        moduleB,
    },
});
