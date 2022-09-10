<template>
  <div class="title">
    <p class="title__message">
      <span>{{ message }},</span>
      <span
          v-on:keyup.enter="handleName"
          v-on:blur="handleBlur"
          class="title__name"
          ref="test"
          contenteditable="true"
      >{{ propName }}</span>
    </p>
    <p class="title__task">
      You've got
      <span class="title__task-total">{{leftItem}} / {{ totalItem }}</span> tasks today.
    </p>
  </div>
</template>

<script>
export default {
  name: 'TitleComp',
  props:["propName"],
  computed: {
    totalItem() {
      return this.$store.state.todos.length
    } ,
    leftItem(){
      let count = 0;
      for(let i=0; i<this.$store.state.todos.length; i++){
        if(this.$store.state.todos[i].completed === false){
          count++;
        }
      }
      return count
    }
    },
  data(){
    return{
      message : "Good evening"
    }
  },
  methods: {
    handleBlur(e) {
      const originalName = this.propName;
      const newName = e.target.innerText;
      if (newName !== originalName) {
        if (newName === "") {
          e.target.innerText = originalName;
        } else {
          this.$emit("changeName", newName);
        }
      }
    },
    handleName() {
      this.$refs.test.blur();
    }
  }
}
</script>