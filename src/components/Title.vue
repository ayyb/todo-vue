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
      <span class="title__task-total">{{ taskTotal }}</span> tasks today.
    </p>
  </div>
</template>

<script>
export default {
  name: 'TitleComp',
  props:["propName"],
  computed: {
    taskTotal() {
      return this.$store.state.todos.length
    } },
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