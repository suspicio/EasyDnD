import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

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