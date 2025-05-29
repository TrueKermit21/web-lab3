<template>
  <header class="bg-primary text-white p-3">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo-container d-flex align-items-center">
        <img src="@/assets/images/logo.jpg" alt="Логотип" class="logo me-2" >
        <h1 class="h4">Телефонний довідник</h1>
      </div>
      <nav>
        <RouterLink class="text-white me-3" to="/">Про додаток</RouterLink>
        <RouterLink class="text-white me-3" to="/register">Реєстрація</RouterLink>
        <RouterLink class="text-white me-3" to="/login">Вхід</RouterLink>
        <RouterLink class="text-white me-3" to="/profile">Профіль</RouterLink>
        <RouterLink class="text-white" to="/phonebook">Довідник</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
