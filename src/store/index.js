import Vue from 'vue'
import Vuex from 'vuex'
import classes from '@/assets/content/classes.json'
import races from '@/assets/content/races.json'
import equipment from '@/assets/content/equipment.json'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        classes,
        races,
        equipment,
    },

    mutations: {
        setClasses(state, newClasses) {
            state.classes = newClasses
        },

        setRaces(state, newClasses) {
            state.races = newClasses
        },

        setEquipment(state, newEquipment) {
            state.equipment = newEquipment
        }
    },

    actions: {
        getClass (state, data) {
            return state.state.classes[data];
        },

        getRace (state, data) {
            return state.state.races[data];
        },

        getEquipment (state, data) {
            return state.state.equipment[data];
        }
    },

    getters: {
    }
})