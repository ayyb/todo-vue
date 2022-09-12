<template>
  <div class="controller">
    <div class="select">
      <label for="order">Order</label>
      <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">
        <option value="date-asc">Oldest</option>
        <option value="date-desc">Latest</option>
      </select>
    </div>
    <button class="clear" @click="clearTodo">Clear All</button>
    <button @click="restoreTodo">Restore</button>
  </div>
</template>

<script>
export default {
  name: "TodoController",
  data() {
    return {
      selected: "date-asc" //오름차순 기본
    };
  },
  methods:{
    clearTodo(){
      this.$store.commit('initData')
    },
    sortTodo() {
      this.$store.commit("sortItem", { value: this.selected });
    },
    restoreTodo(){
      this.$store.commit('restore')
    }
  }
}
</script>

<style scoped>

</style>