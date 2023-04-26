<script setup>
import sideMenu from '@/components/sideMenu.vue';
</script>
<template>
   <div class="main pt-16 flex">
      <sideMenu></sideMenu>
      <router-view class="flex-1"></router-view>
   </div>
</template>
<style lang="scss">
</style>