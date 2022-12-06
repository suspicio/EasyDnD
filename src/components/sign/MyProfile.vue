<template>
  <div class="profile">
    <div class="sign-up">
      <label class="label-sign" for="email">Email Address</label>
      <input readonly class="filter-input" id="email" v-model="email">

      <label class="label-sign" for="name">First Name</label>
      <input :class="{'filter-error': errorName}" class="filter-input" id="name" v-model="name">

      <label class="label-sign" for="surname">Last Name</label>
      <input :class="{'filter-error': errorSurname}" class="filter-input" id="surname" v-model="surname">

      <label class="label-sign" for="nickname">Nickname</label>
      <input :class="{'filter-error': errorNickname}" class="filter-input" id="nickname" v-model="nickname">

      <label class="label-sign" for="password">Password</label>
      <input :class="{'filter-error': errorPassword}" class="filter-input" id="password" type="password" v-model="password">

      <div class="sign-up__buttons">
        <button class="btn-apply" @click="save">Save</button>
        <IconManager class="dragon-right4" icon="DragonIcon"/>
        <button class="btn-reset" @click="exit">Exit</button>
        <IconManager class="dragon-left4" icon="DragonIcon"/>
      </div>
    </div>
  </div>
</template>

<script>
import IconManager from "@/UI/icons/IconManager";
import Vue from 'vue';
import {mapActions} from "vuex";
import router from "@/router";

export default {
  name: "MyProfile",
  components: {
    IconManager
  },
  data() {
    return {
      errorName : false,
      errorSurname : false,
      errorNickname : false,
      errorPassword : false,
      email: '',
      name: '',
      surname: '',
      nickname: '',
      password: '',
      savedPass: '',
    }
  },
  created() {
      this.getUser().then(
          (callback) => {
            if (!callback?.email) {
              router.push('/404')
            } else {
              this.email = callback.email
              this.name = callback.name
              this.surname = callback.surname
              this.nickname = callback.nickname
              this.savedPass = callback.password
            }
          }
      )
  },
  methods: {
    ...mapActions(['saveUser', 'getUser']),

    save() {
      this.errorName = false;
      this.errorSurname = false;
      this.errorNickname = false;
      this.errorPassword = false;
      this.errorConfirmPassword = false;

      if (this.password !== '' && this.password.length < 8) {
        Vue.prototype.$toasted.error('Password is incorrect');
        this.errorPassword = true
        return
      }

      if (this.name === '') {
        Vue.prototype.$toasted.error('Name is incorrect');
        this.errorName = true
        return
      }

      if (this.surname === '') {
        Vue.prototype.$toasted.error('Surname is incorrect');
        this.errorSurname = true
        return
      }

      if (this.nickname === '') {
        Vue.prototype.$toasted.error('Nickname is incorrect');
        this.errorNickname = true
        return
      }

      if (this.password !== '')
        this.savedPass = this.password

      this.saveUser({
        email: this.email,
        name: this.name,
        password: this.savedPass,
        surname: this.surname,
        nickname: this.nickname
      })
      Vue.prototype.$toasted.success('Changes saved!')
    },

    exit() {
      localStorage.removeItem('activeUser')
      router.push('/')
    }
  }
}
</script>

<style lang="scss">
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 300px;
}

.filter-error {
  border: 2px solid red;
}

.sign-up {
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

      & + .dragon-right4 {
        animation: dragon 1000ms ease-out forwards;
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

  &-reset {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    background: #000;
    color: #fff;
    border-radius: 999px;
    font-family: 'Pirata One';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 36px;


    &:hover {
      // box-shadow: 0 0 20px 10px rgba(230, 30, 10, 0.6);
      animation: burn 1000ms ease-out forwards;

      & + .dragon-left4 {
        animation: dragon2 1000ms ease-out forwards;
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


    @keyframes flare {
      100% {
        transform: translateY(-20px) scale(1.5);
        filter: blur(10px);
        opacity: 0;
      }
    }

    @keyframes burn2 {
      0% {
        color: rgba(255, 130, 110, 1);
        background: rgba(255, 230, 110, 1);
        box-shadow: 0 0 5px 0 rgba(200, 0, 10, 1),
        0 0 5px 0 rgba(230, 30, 10, 0.8),
        0 0 5px 0 rgba(230, 230, 10, 0.6);
      }

      100% {
        color: rgba(255, 255, 255, 1);
        background: rgb(8, 168, 8);
        box-shadow: 0 -35px 40px 30px rgba(255, 130, 10, 0),
        0 -30px 30px 10px rgba(230, 30, 10, 0),
        0 -20px 10px 0 rgba(255, 255, 10, 0);
      }
    }
  }
}


.dragon {
  &-left4 {
    max-width: 75px;
    position: absolute;
    right: 686px;
    top: 586px;
    fill: #8dbd5c;
  }

  &-right4 {
    max-width: 75px;
    fill: #8dbd5c;
    position: absolute;
    right: 1150px;
    top: 586px;
    transform: rotateY(180deg);
  }
}
</style>