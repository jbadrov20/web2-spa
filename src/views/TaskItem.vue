<template>
  <div class="task-item">
    <div>
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle-task', task.id)" />
      <span class="task-title" :class="{ completed: task.completed }">{{ task.title }}</span>
    </div>
    <div class="task-actions">
      <button @click="$emit('delete-task', task.id)">Obriši</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  margin: 8px 0;
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.task-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.task-title {
  font-size: 16px;
  color: #333;
  flex-grow: 1;
  margin-left: 10px;
}

.task-title.completed {
  text-decoration: line-through;
  color: #6c757d;
}

.task-actions {
  display: flex;
  gap: 10px;
}

button {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #c82333;
}

input[type='checkbox'] {
  cursor: pointer;
  width: 20px;
  height: 20px;
}
</style>
