import { createApp } from "vue";
import App from "./App.vue";
import Employee from "./pages/Employee/Employee.vue";
import CustomerTitle from "./pages/Customer/CustomerTitle.vue";
import { createRouter, createWebHistory } from "vue-router";
import ElementPlus from "element-plus";
import VForm3 from "vform3-builds";
import "element-plus/dist/index.css";
import "vform3-builds/dist/designer.style.css";

import { createStore } from "vuex";

const misaroutes = [
  { path: "/employee", component: Employee },
  { path: "/customer", component: CustomerTitle },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: misaroutes, // short for `routes: routes`
});
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

const app = createApp(App);
app.use(ElementPlus);
app.use(VForm3);
app.use(store);
app.use(router).mount("#app");
