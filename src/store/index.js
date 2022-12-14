import Vue from 'vue'
import Vuex from 'vuex'
import classes from '@/assets/content/classes.json'
import races from '@/assets/content/races.json'
import equipment from '@/assets/content/equipment.json'
import spells from '@/assets/content/spells.json'
import beasts from '@/assets/content/beasteary.json'
import guides from '@/assets/content/guides.json'
import router from "@/router";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        classes,
        races,
        equipment,
        spells,
        beasts,
        guides,
        user: {}
    },

    mutations: {
        setUser(state, newUser) {
            localStorage.setItem('activeUser', JSON.stringify(newUser))
            state.user = newUser
        },
    },

    actions: {
        getClass (state, data) {
            if (!state.state.classes?.[data])
                router.push('/404')
            return state.state.classes[data];
        },

        getRace (state, data) {
            if (!state.state.races?.[data])
                router.push('/404')
            return state.state.races[data];
        },

        getEquipment (state, data) {
            if (!state.state.equipment?.[data])
                router.push('/404')
            return state.state.equipment[data];
        },

        getSpells (state) {
            return state.state.spells;
        },

        getSpell (state, data) {
            if (state.state.spells['content'].filter((elem) => {
                return elem.name === data
            }).length === 0)
                router.push('/404')
            return state.state.spells['content'].filter((elem) => {
                return elem.name === data
            });
        },

        getBeasts (state) {
            return state.state.beasts;
        },

        getBeast (state, data) {
            if (state.state.beasts.filter((elem) => {
                return elem.name === data
            }).length === 0)
                router.push('/404')
            return state.state.beasts.filter((elem) => {
                return elem.name === data
            })[0];
        },

        getGuide (state, data) {
            if (!state.state.guides?.[data])
                router.push('/404')
            return state.state.guides[data];
        },

        saveUser (state, data) {
            state.state.user = data;
            localStorage.setItem('activeUser', JSON.stringify(data))
            localStorage.setItem(data.email, JSON.stringify(data));
        },

        getUser (state) {
            if (localStorage.getItem('activeUser') === null)
                return null
            state.state.user = JSON.parse(localStorage.getItem('activeUser'));
            return state.state.user;
        }
    },

    getters: {
    }
})

export default store;