import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import TableView from "./views/TableView.vue";
import PopupView from "./views/PopupView.vue";
import FormView from "./views/FormView.vue";
import BrokenView from "./views/BrokenView.vue";
import NoView from "./views/NoView.vue";

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
            path: "/popup",
            name: "Popup",
            component: PopupView
        },
        {
            path: "/form",
            name: "Formulaire",
            component: FormView
        },
        {
            path: "/broken",
            name: "CSS",
            component: BrokenView
        },
        {
            path: "/:pathMatch(.*)*'",
            name: "NotFound",
            component: NoView
        }
    ]
});

app.use(router);

app.mount("#app");
