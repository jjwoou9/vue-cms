import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Grapes from "../views/Grapes.vue";
import Test from "../views/Test.vue";
import Compose from "../views/Compose.vue";
import Copilot from "../views/Copilot.vue";
import DemoPage from "../views/DemoPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/grapes',
            name: 'grapes',
            component: Grapes
        },
        {
            path: "/test",  // TestComponent.vue로 이동할 Path
            name: "test",  // router name
            component:Test,  // Path로 이동될 Component
        },
        {
            path: "/compose",
            name: "compose",
            component: Compose
        },
        {
            path: "/cop",
            name: "cop",
            component: Copilot
        },
        {
            path: "/demo",
            name: "demo",
            component: DemoPage
        }
        // 다른 라우트 추가
    ]
})

export default router
