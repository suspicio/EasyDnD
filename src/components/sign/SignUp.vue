<template>
  <div class="sign-up">
    <label class="label-sign" for="email">Email Address</label>
    <input :class="{'filter-error': errorEmail}" class="filter-input" id="email" v-model="email">

    <label class="label-sign" for="name">First Name</label>
    <input :class="{'filter-error': errorName}" class="filter-input" id="name" v-model="name">
    
    <label class="label-sign" for="surname">Last Name</label>
    <input :class="{'filter-error': errorSurname}" class="filter-input" id="surname" v-model="surname">
    
    <label class="label-sign" for="nickname">Nickname</label>
    <input :class="{'filter-error': errorNickname}" class="filter-input" id="nickname" v-model="nickname">
    
    <label class="label-sign" for="password">Password</label>
    <input :class="{'filter-error': errorPassword}" class="filter-input" id="password" type="password" v-model="password">
    
    <label class="label-sign" for="confirmPassword">Confirm Password</label>
    <input :class="{'filter-error': errorConfirmPassword}" class="filter-input" id="confirmPassword" type="password" v-model="confirmPassword">
    
    <div class="sign-up__buttons">
      <button class="btn-apply" @click="signUp">Sign Up</button>
      <IconManager class="dragon-right3" icon="DragonIcon"/>
      <button class="btn-reset" @click="switchSign">Sign In</button>
      <IconManager class="dragon-left3" icon="DragonIcon"/>
    </div>
  </div>
</template>

<script>
import IconManager from "@/UI/icons/IconManager";
import Vue from 'vue';
import {mapActions} from "vuex";
import router from "@/router";

export default {
  name: "SignUp",
  components: {
    IconManager
  },
  data() {
    return {
      errorEmail : false,
      errorName : false,
      errorSurname : false,
      errorNickname : false,
      errorPassword : false,
      errorConfirmPassword : false,
      email: '',
      name: '',
      surname: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    }
  },
  methods: {
    ...mapActions(['saveUser']),

    signUp() {
      this.errorEmail = false;
      this.errorName = false;
      this.errorSurname = false;
      this.errorNickname = false;
      this.errorPassword = false;
      this.errorConfirmPassword = false;

      if (this.email === '' || this.email.length < 10 || !this.email.includes('@')) {
        Vue.prototype.$toasted.error('Email is incorrect');
        this.errorEmail = true
        return
      }

      if (this.password === '' && this.password.length < 8) {
        Vue.prototype.$toasted.error('Password is incorrect');
        this.errorPassword = true
        return
      }

      if (this.password !== this.confirmPassword) {
        Vue.prototype.$toasted.error('Passwords are not same');
        this.errorConfirmPassword = true
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

      if (localStorage.getItem(this.email)) {
        Vue.prototype.$toasted.error('Email is reserved');
        this.errorEmail = true
        return
      }

      this.saveUser({
        email: this.email,
        name: this.name,
        password: this.password,
        surname: this.surname,
        nickname: this.nickname
      })
      router.push('/profile')
    },

    switchSign() {
      this.$emit('switchSign');
    }
  }
}
</script>

<style lang="scss">
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

      & + .dragon-right3 {
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

      & + .dragon-left3 {
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
  &-left3 {
    max-width: 75px;
    position: absolute;
    right: 446px;
    top: 686px;
    fill: #8dbd5c;
  }

  &-right3 {
    max-width: 75px;
    fill: #8dbd5c;
    position: absolute;
    right: 920px;
    top: 686px;
    transform: rotateY(180deg);
  }
}
</style>