import VueRouter from "vue-router";
import ProductPurchase from "./components/product/ProductPurchase";
import ProductSell from "./components/product/ProductSell";
import ProductList from "./components/product/ProductList";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    { path: "/", component: ProductList },
    { path: "/urunislemleri", component: ProductPurchase },
    { path: "/uruncikislari", component: ProductSell },
    { path: "*", redirect: "/" },
]
export const router = new VueRouter({
    mode: "history",
    routes
})