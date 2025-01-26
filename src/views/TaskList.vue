<template>
  <div>
    <h1>Popis zadataka</h1>
    <router-link to="/add-task">
      <button>Dodaj novi zadatak</button>
    </router-link>
    <select v-model="filter">
      <option value="all">Svi</option>
      <option value="completed">Dovršeni</option>
      <option value="incomplete">Nedovršeni</option>
    </select>
    <ul>
      <TaskItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle-task="toggleTask"
        @delete-task="deleteTask"
      />
    </ul>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore'
import { ref, computed, onMounted } from 'vue'
import TaskItem from './TaskItem.vue'

export default {
  components: {
    TaskItem,
  },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref('all')

    const filteredTasks = computed(() => {
      if (filter.value === 'completed') {
        return taskStore.tasks.filter((task) => task.completed)
      } else if (filter.value === 'incomplete') {
        return taskStore.tasks.filter((task) => !task.completed)
      }
      return taskStore.tasks
    })

    onMounted(() => {
      console.log('Komponenta je učitana!')
      taskStore.loadTasks()
    })

    return {
      tasks: taskStore.tasks,
      toggleTask: taskStore.toggleTaskCompletion,
      deleteTask: taskStore.deleteTask,
      filter,
      filteredTasks,
    }
  },
}
</script>

<style scoped>
button {
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #218838;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
input[type='checkbox'] {
  margin-right: 10px;
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.delete-button {
  background-color: transparent;
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 10px 0;
  cursor: pointer;
  border-radius: 5px;
}
</style>
