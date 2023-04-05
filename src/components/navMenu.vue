<script setup>

</script>
<template>
   <nav class="navMenu w-screen h-[60px] px-6 py-2 flex justify-center items-center">
      <div class="navMain max-w-[1200px] w-[1200px] flex justify-between items-center">
        <div class="headerL">
          <img class="w-[32px] rounded-full" src="@/assets/images/header-img.jpg" alt="">
        </div>
        <div class="nav text-gray">
          <router-link class="active mr-4 px-4 py-2 text-white bg-blue rounded-md" :to="{name:'home'}">首页</router-link>
          <router-link class="px-1 py-2" :to="{name:'knowledgedoc'}">知识文档</router-link>
        </div>
      </div>
   </nav>
</template>
<style lang="scss">
.navMenu{
  box-shadow: 0 1px 4px rgba(183, 215, 248, 0.15);
  .navMain{
    .nav{
      >a{
        
      }
      
    }
  }
}
</style>