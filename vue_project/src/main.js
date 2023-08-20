import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import TableView from "./views/TableView.vue";
import FormView from "./views/FormView.vue";

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Accueil",
            component: HomeView
        },
        {
            path: "/table",
            name: "Tableau",
            component: TableView
        },
        {
            path: "/form",
            name: "Formulaire",
            component: FormView
        },
    ]
});

app.use(router);

app.mount("#app");
