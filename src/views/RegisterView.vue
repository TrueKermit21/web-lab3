<template>
  <main class="container my-5">
    <h2>Реєстрація користувача</h2>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Ім'я</label>
        <input v-model="form.name" type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Електронна пошта</label>
        <input v-model="form.email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Стать</label>
        <select v-model="form.gender" class="form-select" required>
          <option value="">Оберіть</option>
          <option>Чоловік</option>
          <option>Жінка</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="dob" class="form-label">Дата народження</label>
        <input v-model="form.dob" type="date" class="form-control" id="dob" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Пароль</label>
        <input v-model="form.password" type="password" class="form-control" id="password" required />
      </div>
      <button type="submit" class="btn btn-primary">Зареєструватись</button>
    </form>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  gender: '',
  dob: '',
  password: ''
})

function handleSubmit() {
  // Отримуємо існуючих користувачів із localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]')

  // Перевірка, чи email вже зареєстрований
  const exists = users.some(u => u.email === form.email)
  if (exists) {
    alert('Користувач з таким email вже існує')
    return
  }

  // Додаємо нового користувача
  users.push({ ...form })
  localStorage.setItem('users', JSON.stringify(users))

  alert('Реєстрація пройшла успішно!')
  router.push('/login')  // Переходимо до сторінки входу
}
</script>
