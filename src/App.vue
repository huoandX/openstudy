<script setup>
import navMenu from '@/components/navMenu.vue';
import { useModelStore } from '@/stores/toggleModel'
const store = useModelStore()
</script>

<template>
  <div :class="{ dark:!store.modelFlag }">
    <navMenu></navMenu>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
