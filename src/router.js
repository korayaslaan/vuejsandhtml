import VueRouter from "vue-router";
import ProductPurchase from "./components/product/ProductPurchase";
import ProductSell from "./components/product/ProductSell";
import ProductList from "./components/product/ProductList";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    { path: "/vuejsandhtml/", component: ProductList },
    { path: "/vuejsandhtml/urunislemleri", component: ProductPurchase },
    { path: "/vuejsandhtml/uruncikislari", component: ProductSell },
    { path: "*", redirect: "/vuejsandhtml" },
]
export const router = new VueRouter({
    mode: "history",
    routes
})
