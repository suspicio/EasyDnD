import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from "@/views/DashboardView";
import ClassesView from "@/views/ClassesView";
import RacesView from "@/views/RacesView";
import EquipmentView from "@/views/EquipmentView";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/classes/:classType',
        name: 'Classes',
        component: ClassesView,
        props: true
    },
    {
        path: '/races/:racesType',
        name: 'Races',
        component: RacesView,
        props: true
    },
    {
        path: '/equipment/:equipmentType',
        name: 'Equipment',
        component: EquipmentView,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

function hasQueryParams (route) {
    return !!Object.keys(route.query).length
}

router.beforeEach((to, from, next) => {
    if (!hasQueryParams(to) && hasQueryParams(from)) {
        next({ name: to.name, query: from.query })
    } else {
        next()
    }
})

export default router