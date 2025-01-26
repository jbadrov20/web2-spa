import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      const lastId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0
      this.tasks.push({
        ...task,
        id: lastId + 1,
        completed: false,
      })
    },
    toggleTaskCompletion(id) {
      const task = this.tasks.find((task) => task.id === id)
      if (task) task.completed = !task.completed
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },
    async loadTasks() {
      if (this.tasks.length) return

      try {
        const response = await fetch('https://run.mocky.io/v3/45a041c4-91cd-4350-bc25-7a2b53ef4ea0')
        this.tasks = await response.json()
      } catch (error) {
        console.error('Greška pri učitavanju zadataka:', error)
      }
    },
  },
})
