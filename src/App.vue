<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from './components/Layout/TheHeader.vue'
import TheFooter from './components/Layout/TheFooter.vue'
</script>
