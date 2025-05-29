<template>
  <main class="container my-5">
    <h2>Телефонний довідник</h2>
    <ul class="list-group">
      <li v-for="contact in contacts" :key="contact.id" class="list-group-item">
        {{ contact.name }} — {{ contact.phone }}
      </li>
    </ul>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const contacts = ref([])

onMounted(() => {
  contacts.value = [
    { id: 1, name: 'Олександр', phone: '+380501112233' },
    { id: 2, name: 'Марія', phone: '+380671234567' }
  ]
})
</script>
