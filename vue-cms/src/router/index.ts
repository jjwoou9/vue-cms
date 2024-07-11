import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TestComponent from "../components/TestComponent.vue";
import Editor2 from "../components/Editor2.vue";
import Grapes from "../views/Grapes.vue";

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
            name: "TestComponent",  // router name
            component: TestComponent,  // Path로 이동될 Component
        },
        // 다른 라우트 추가
    ]
})

export default router