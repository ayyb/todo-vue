<template>
  <div>
    <h1>My todo List 😊</h1>
    <h2>Hello!</h2>
    <h3>What is your name?</h3>
    <v-responsive
        class="mx-auto"
        max-width="344"
    >
    <v-text-field
        clearable
        outlined
        label="name"
        id="user-name" v-model="userName" v-on:keyup.enter="addUserName"
    ></v-text-field>
    </v-responsive>
    <v-btn @click="addUserName">Enter</v-btn>
  </div>
</template>

<script>
export default {
  name: "TodoHello",
  data(){
    return {
      userName:""
    }
  },
  methods:{
    addUserName(){
      this.$store.commit('addName', this.userName)
      this.$emit("addName", this.userName); //이벤트 발생
    }
  }
}
</script>

<style scoped>

</style>