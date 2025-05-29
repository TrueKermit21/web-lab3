<template>
  <main class="container my-5">
    <h2>Вхід</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Пароль</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>
      <button class="btn btn-primary">Увійти</button>
    </form>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')

function handleLogin() {
  const users = JSON.parse(localStorage.getItem('users') || '[]')

  const user = users.find(u => u.email === email.value && u.password === password.value)

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user))
    alert('Вхід успішний')
    router.push('/profile')  // Переходимо до профілю
  } else {
    alert('Неправильний email або пароль')
  }
}
</script>
