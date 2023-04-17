<script setup>

</script>
<template>
   <div class="knowledgedoc pt-16 pb-5 bg-white-300 min-h-screen dark:bg-gray-500">
    <div class="stage max-w-[1200px] mx-auto p-5 bg-white rounded-md mt-5 dark:bg-gray-300">
      <h2 class="text-center font-bold text-2xl text-gray-400 dark:text-white-tit">新手启航</h2>
      <div class="doc-content w-full mt-8 flex justify-between">
         <div class="doc-box">
            <router-link class="flex flex-col items-center cursor-pointer h-full" :to="{name:'htmlIntroduction'}">
               <div class="w-[200px]">
                  <img src="@/assets/images/knowledgedoc/html.png" alt="">
               </div>
               <div class="px-4 pb-4 flex-1">
                  <h2 class="text-gray-400 text-lg font-bold dark:text-white-tit">
                     HTML标记语言
                  </h2>
                  <p class="text-gray-100 text-sm dark:text-white-text">
                     HTML是一种标记语言，是网页制作必备的一门语言。
                  </p>
               </div>
            </router-link>
         </div>
         <div class="doc-box flex flex-col items-center cursor-pointer">
            <div class="w-[200px]">
               <img src="@/assets/images/knowledgedoc/css.png" alt="">
            </div>
            <div class="px-4 pb-4 flex-1">
               <h2 class="text-gray-400 text-lg font-bold dark:text-white-tit">CSS样式表</h2>
               <p class="text-gray-100 text-sm dark:text-white-text">层叠样式表是一种用来表现HTML等文件样式的计算机语言。</p>
            </div>
         </div>
         <div class="doc-box flex flex-col items-center cursor-pointer">
            <div class="w-[200px]">
               <img src="@/assets/images/knowledgedoc/js.png" alt="">
            </div>
            <div class="px-4 pb-4 flex-1">
               <h2 class="text-gray-400 text-lg font-bold dark:text-white-tit">JavaScript编程语言</h2>
               <p class="text-gray-100 text-sm dark:text-white-text">JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。</p>
            </div>
         </div>
      </div>
    </div>
   </div>
</template>
<style lang="scss">
.knowledgedoc{
   .stage{
      .doc-content{
         .doc-box{
            @apply w-1/4 rounded-md;
            box-shadow: 0px 10px 20px #ced1d6;
         }
      }
   }
}
</style>