<template>
    <!-- <h1>{{ greeting }}</h1> -->
    <p>作者:{{ author }}</p>
    <p>商品:{{ productName }}</p>
    <!-- <p>總價: {{ price * quantity }}</p> -->
    <p>目前打{{ noPointDiscount }}折</p>
    <p>打折後的價錢:{{ sellingPrice }}</p>
    數量:<input type="number" v-model.number="newQuantity" />
    <button @click="setQuantity(newQuantity)">確認</button>
    <p>{{ user }}</p>
    <h2>{{ nameA }}</h2>
    <h2>{{ nameB }}</h2>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
    name: "App",
    data() {
        return {
            name: "Yu",
            newQuantity: 0,
        };
    },
    computed: {
        ...mapState({
            productName: (state) => state.product,
            user: "user",
            nameA: (state) => state.moduleA.name,
            nameB: (state) => state.moduleB.name,
        }),
        author() {
            return this.name;
        },
        ...mapGetters(["sellingPrice", "discount"]),
        noPointDiscount() {
            const discountString = this.discount.toString();
            const pointIndex = discountString.indexOf(".");
            return discountString.slice(pointIndex + 1, discountString.length);
        },
    },
    methods: {
        ...mapMutations(["setQuantity"]),
        ...mapActions(["fetchUserInfo"]),
    },
    created() {
        this.fetchUserInfo("1");
    },
};
</script>

<style></style>
