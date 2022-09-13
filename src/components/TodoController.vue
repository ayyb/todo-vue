<template>
<!--      <label for="order">Order</label>-->
<!--      <select name="order" id="order" class="selectbox" v-model="selected" v-on:change="sortTodo">-->
<!--        <option value="date-asc">Oldest</option>-->
<!--        <option value="date-desc">Latest</option>-->
<!--      </select>-->

    <v-container fluid >
        <v-row align="center" >
          <v-col
              class="d-flex"
              cols="12"
          >
            <v-select
                class="d-flex ma-3"
                v-model="selected"
                :items="items"
                item-title="key"
                item-value="value"
                label="Order"
                variant="outlined"
                @update:modelValue="sortTodo"
            ></v-select>
            <v-btn class="clear ma-3" @click="clearTodo">Clear All</v-btn>
<!--            <v-btn class="ma-3" @click="restoreTodo">Restore</v-btn>-->
          </v-col>
        </v-row>
      </v-container>
</template>

<script>
export default {
  name: "TodoController",
  data() {
    return {
      items: [{key:'Oldest',value:'date-asc'}, {key:'Latest',value:'date-desc'}],
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
    // restoreTodo(){
    //   this.$store.commit('restore')
    // }
  }
}
</script>

<style scoped>

</style>