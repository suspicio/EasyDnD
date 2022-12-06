<template>
  <div class="sign-main">
    <SignIn v-if="isSignIn" @switchSign="switchSign" />
    <SignUp v-else @switchSign="switchSign"  />
  </div>
</template>

<script>
import SignIn from "@/components/sign/SignIn";
import SignUp from "@/components/sign/SignUp";

export default {
  name: "SignView",
  components: {
    SignUp,
    SignIn
  },
  data() {
    return {
      isSignIn: true,
    }
  },
  methods: {
    switchSign() {
      this.isSignIn = !this.isSignIn;
    }
  }
}
</script>

<style lang="scss">
.sign-main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 300px;
}
</style>