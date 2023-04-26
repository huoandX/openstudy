<script setup>
import menuService from '@/composables/menus.js'
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const route = useRoute()
// 当路由发生改变的时候进行变化
watch(route, () => {
  menuService.setCurrentMenu(route)
}, { immediate: true })
</script>
<template>
   <div class="main pt-16 flex">
      <div class="sidebar w-[300px] overflow-auto">
         <div class="nav p-2">
            <div class="nav-main" v-for="menu of menuService.menus.value[0].children">
              <h2
              @click="menuService.toggleParentMenu(menu)"
              class="px-4 py-2 cursor-pointer flex justify-between items-center text-gray">
                <span>{{ menu.meta.menu.title }}</span>
                <i class="fas fa-chevron-right mr-14 duration-300" :class="{'rotate-90':menu.isClick}"></i>
              </h2>
              <ul class="pl-3" v-for="cmenu of menu.children">
                <li v-show="menu.isClick" 
                @click="$router.push({name:cmenu.name})"
                :class="{active :cmenu.isClick}"
                class="px-4 py-2 my-1 cursor-pointer rounded-md hover:bg-white-50 hover:text-blue"
                >
                  {{ cmenu.meta.menu.title }}
                </li>
              </ul>
            </div>
         </div>
      </div>
      <router-view class="flex-1"></router-view>
   </div>
</template>
<style lang="scss">
.main{
  .sidebar{
    height:calc(100vh - 64px);
    border-right: 1px solid #f7f7f7;
    .nav{
      >div{
        ul{
          .active{
            @apply bg-blue-100 text-blue;
          }
        }
      }
    }
  }
}
</style>