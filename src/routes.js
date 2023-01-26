import { createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import NotFoundPage from "./pages/notFound";

const routers  = createRouter({
    history: routerHistory,
    routes: [
        {
            path:"/",
            component: HomePage,
        },
        {
            path:"/about",
            component: AboutPage,
        },
        {
            path: "/:CatchALL(.*)/*",
            component: NotFoundPage,
        

        },

    ],
});

export default routers;