import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from "@/views/DashboardView";
import ClassesView from "@/views/ClassesView";
import RacesView from "@/views/RacesView";
import EquipmentView from "@/views/EquipmentView";
import SpellsView from "@/views/SpellsView";
import SingleSpellView from "@/views/SingleSpellView";
import BeastsView from "@/views/BeastsView";
import SingleBeastView from "@/views/SingleBeastView";
import GuidesView from "@/views/GuidesView"
import NotFoundView from "@/views/NotFoundView";
import SignView from "@/views/SignView";
import MyProfile from "@/components/sign/MyProfile";
import TableMap from "@/views/TableMap";
import JoinTable from "@/views/JoinTable";
import CreateTable from "@/views/CreateTable";

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
    },
    {
        path: '/spells/:spellsType',
        name: 'Spells',
        component: SpellsView,
        props: true
    },
    {
        path: '/spell/:spellName',
        name: 'Spell',
        component: SingleSpellView,
        props: true
    },
    {
        path: '/beasts/:beastsType',
        name: 'Beasts',
        component: BeastsView,
        props: true
    },
    {
        path: '/beast/:beastName',
        name: 'Beast',
        component: SingleBeastView,
        props: true
    },
    {
        path: '/guides/:guideType',
        name: 'Guides',
        component: GuidesView,
        props: true
    },
    {
        path: '/sign',
        name: 'Sign',
        component: SignView,
    },
    {
        path: '/profile',
        name: 'Profile',
        component: MyProfile,
    },
    {
        path: '/map/:id',
        name: 'Map',
        component: TableMap,
        props: true,
        meta: { inGame: true }
    },
    {
        path: '/create-map',
        name: 'CreateMap',
        component: CreateTable,
    },
    {
        path: '/join',
        name: 'JoinTable',
        component: JoinTable,
    },
    {
        path: '*',
        name: 'NotFound',
        component: NotFoundView,
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