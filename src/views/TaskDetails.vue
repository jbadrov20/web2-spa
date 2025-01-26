<template>
  <div>
    <h1>Detalji zadatka</h1>
    <p>Ovdje će biti prikazani detalji o zadatku ID: {{ id }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    const id = route.params.id

    return { id }
  },
}
</script>
