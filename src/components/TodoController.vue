<template>
  <div class="controller">
    <div class="select">
      <label for="order">Order</label>
      <select name="order" id="order" class="selectbox">
        <option value="date-asc">Date Ascending</option>
        <option value="date-desc">Date Descending</option>
        <option value="name-asc">Name Ascending</option>
        <option value="name-desc">Name Descending</option>
      </select>
    </div>
    <button class="clear" @click="reqClear">Clear All</button>
  </div>
</template>

<script>
export default {
  name: "TodoController",
  methods:{
    reqClear(){
      this.$store.commit('initData')
    }
  }
}
</script>

<style scoped>

</style>