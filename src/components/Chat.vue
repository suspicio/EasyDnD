<template>
  <div class="chat">
    <div class="main-box">
      <div class="message" v-for="(value, key) in messages" :key="'mess-'+key">
        {{value.sender}} {{value.message}}
      </div>
    </div>
    <input class="filter-input" placeholder="Message" v-model="newMessage" />
    <button style="margin-top: 20px" class="btn-apply" @click="sendMessage">Send!</button>
  </div>
</template>

<script>
export default {
  name: "ChatChat",
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      newMessage: ''
    }
  },
  methods: {
    sendMessage() {
      if (this.newMessage === '')
        return;
      this.$emit('sendMessage', this.newMessage)
      this.newMessage = ''
    }
  }
}
</script>

<style lang="scss">
.chat {
  max-height: 400px;
  min-height: 400px;
  position: absolute;
  top: 300px;
  right: 30px;
  overflow: scroll;
}

.message {
  font-family: 'Pirata One';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  background: white;
}
</style>