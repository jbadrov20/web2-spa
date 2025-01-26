<template>
  <div>
    <h1>Dodaj novi zadatak</h1>
    <form @submit.prevent="submitTask">
      <div>
        <label for="task-title">Naslov zadatka: </label>
        <input type="text" id="task-title" v-model="title" placeholder="Unesite naslov zadatka" />
      </div>
      <button type="submit">Dodaj Zadatak</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const taskStore = useTaskStore()
    const router = useRouter()
    const title = ref('')

    const submitTask = () => {
      if (!title.value.trim()) {
        alert('Naslov zadatka ne smije biti prazan!')
        return
      }

      taskStore.addTask({ id: Date.now(), title: title.value, completed: false })

      title.value = ''
      router.push('/tasks')
    }

    return {
      title,
      submitTask,
    }
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
}

input {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
