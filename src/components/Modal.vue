<template>
    <v-card>
      <v-card-title class="headline">Sorry - 😢</v-card-title>
      <v-card-text>
        <slot name="modal-text">
          {{ modalText }}
        </slot>
      </v-card-text>
      <v-btn @click="$emit('close')">ok</v-btn>
    </v-card>
</template>

<script>
export default {
  name: "todoModal"
}
</script>

<style scoped>

</style>