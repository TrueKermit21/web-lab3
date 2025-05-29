<template>
  <main class="container my-5">
    <h2>Профіль користувача</h2>
    <table class="table" v-if="profile">
      <tr><td>Ім'я</td><td>{{ profile.name }}</td></tr>
      <tr><td>Email</td><td>{{ profile.email }}</td></tr>
      <tr><td>Стать</td><td>{{ profile.gender }}</td></tr>
      <tr><td>Дата народження</td><td>{{ profile.dob }}</td></tr>
    </table>
    <p v-else>Користувач не увійшов</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const profile = ref(null)
const router = useRouter()

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  if (!user) {
    router.push('/login')  // Якщо не залогінений, перекидаємо на вхід
  } else {
    profile.value = user
  }
})
</script>
