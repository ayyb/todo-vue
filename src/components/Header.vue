 <template>
    <header class="header">
      <h1 class="logo">Todo List 😎</h1>
      <p class="date">{{ timestamp }}</p>
    </header>
  </template>

<script>
import getDate from "@/components/common/getDate";
export default {
  name: "TodoHeader",
  data(){
    return{
      timestamp:`${getDate().month} / ${getDate().date} ${getDate().week} ${getDate().hour} : ${getDate().minute}`
    }
  },
}
</script>

<style scoped>

</style>