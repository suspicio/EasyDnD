<template>
  <div class="sign-in">
    <label class="label-sign" for="name">Table Name</label>
    <input class="filter-input" id="name" v-model="map">
    <div class="sign-in__buttons">
      <button class="btn-apply" @click="createTable">Create Table</button>
      <IconManager class="dragon-right5" icon="DragonIcon"/>
      <IconManager class="dragon-left5" icon="DragonIcon"/>
    </div>
  </div>
</template>

<script>
import IconManager from "@/UI/icons/IconManager";
import Vue from 'vue';
import {mapMutations} from "vuex";
import router from "@/router";

export default {
  name: "CreateTable",
  components: {IconManager},
  data() {
    return {
      map: '',
    }
  },
  methods: {
    ...mapMutations(['setUser']),

    createTable() {
      if (localStorage.getItem('map-' + this.map)) {
        Vue.prototype.$toasted.error('Such map exists');
        return;
      }
      localStorage.setItem('map-' + this.map, '[]')
      localStorage.setItem('mess-' + this.map, '[]')
      router.push('/map/' + this.map)
    },

    switchSign() {
      this.$emit('switchSign');
    }
  }
}
</script>

<style lang="scss">
.sign-in {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  &__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
}

.label-sign {
  font-family: 'Pirata One';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 41px;
  color: #fff;
  margin: 15px;
}

.btn {
  &-apply {
    cursor: pointer;
    margin-right: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background: #fff;
    border-radius: 999px;
    font-family: 'Pirata One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;


    &:hover {
      // box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
      animation: burn2 1000ms ease-out forwards;

      & + .dragon-right5 {
        animation: dragon 1000ms ease-out forwards;
      }

      & ~ .dragon-left5 {
        animation: dragon2 1000ms ease-out forwards;
      }

      @keyframes dragon2 {
        0% {
          transform: translate(0);
        }

        50% {
          transform: translate(10px, 10px);
        }

        100% {
          transform: translate(0);
        }
      }

      &::before {
        content: '';
        position: absolute;
        left: 40px;
        width: 100px;
        height: 40px;
        background: rgba(255, 230, 110, 1);
        border-radius: 100%;
        animation: flare 1000ms ease-out forwards;
      }

      &::after {
        content: '';
        position: absolute;
        right: 40px;
        width: 100px;
        height: 40px;
        background: rgba(255, 230, 110, 1);
        border-radius: 100%;
        animation: flare 1000ms ease-out forwards;
      }
    }


    @keyframes flare {
      100% {
        transform: translateY(-20px) scale(1.5);
        filter: blur(10px);
        opacity: 0;
      }
    }

    @keyframes dragon {
      0% {
        transform: translate(0) rotateY(180deg);
      }

      50% {
        transform: translate(-10px, 10px)  rotateY(180deg);
      }

      100% {
        transform: translate(0) rotateY(180deg);
      }
    }

    @keyframes burn {
      0% {
        color: rgba(255, 130, 110, 1);
        background: rgba(255, 230, 110, 1);
        box-shadow: 0 0 5px 0 rgba(200, 0, 10, 1),
        0 0 5px 0 rgba(230, 30, 10, 0.8),
        0 0 5px 0 rgba(230, 230, 10, 0.6);
      }

      100% {
        color: rgba(0, 0, 0, 1);
        background: rgb(239, 5, 5);
        box-shadow: 0 -35px 40px 30px rgba(255, 130, 10, 0),
        0 -30px 30px 10px rgba(230, 30, 10, 0),
        0 -20px 10px 0 rgba(255, 255, 10, 0);
      }
    }
  }
}


.dragon {
  &-left5 {
    max-width: 75px;
    position: absolute;
    right: 650px;
    top: 290px;
    fill: #8dbd5c;
  }

  &-right5 {
    max-width: 75px;
    fill: #8dbd5c;
    position: absolute;
    right: 1200px;
    top: 290px;
    transform: rotateY(180deg);
  }
}
</style>