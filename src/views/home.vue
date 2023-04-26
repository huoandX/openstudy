<script setup>

</script>
<template>
   <div class="home flex justify-between pt-32 dark:bg-gray-500 h-screen">
    <div class="text-5xl h-[50vh] w-1/2 pl-48 flex flex-col justify-center text-gray dark:text-white-200">
      <transition appear enter-active-class="animate__animated animate__fadeInLeft">
        <p class="">Hi! 这里是</p>
      </transition>
      <transition appear enter-active-class="animate__animated animate__fadeInLeft blue">
        <p class="text-blue-200 font-bold mb-10 mt-2">openStudy</p>
      </transition>
      <transition appear enter-active-class="animate__animated animate__fadeInLeft black">
        <p class="text-lg">
        致力打造一个通俗易懂的前端查阅文档，内容持续更新中...
      </p>
      </transition>
    </div>
    <div class=" w-1/2 pr-64 overflow-hidden">
      <transition appear enter-active-class="animate__animated animate__fadeInRightBig">
        <img src="@/assets/images/homeImg.png" alt="">
      </transition>
    </div>
   </div>
</template>
<style lang="scss" scoped>
.home{
  .animate__animated.animate__fadeInLeft.blue{
    animation-delay: 0.3s;
  }
  .animate__animated.animate__fadeInLeft.black{
    animation-delay: 0.6s;
  }
}
</style>