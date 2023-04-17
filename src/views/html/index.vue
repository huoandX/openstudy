<script setup>
import { ref } from 'vue';
const htmlCatalogue = ref([
  {
    title: '基础知识',
    children: [
      { title: 'HTML简介', name: '', active: true },
      { title: '开发环境' },
      { title: '基础知识' },
      { title: '注释' },
    ]
  },
  {
    title: '页面结构',
    children: [
      { title: '语义标签' },
      { title: '嵌套关系' },
      { title: '基本结构' },
      { title: '内容标题' },
      { title: '页眉页脚' },
      { title: '导航元素' },
      { title: '主要区域' },
      { title: '内容区域' },
      { title: '区块定义' },
      { title: '符加区域' },
      { title: '通用容器' },
    ]
  },
  {
    title: '文本相关',
    children: [
      { title: '基本标签' },
      { title: '描述文本' },
      { title: '强调文本' },
      { title: '引用标签' },
      { title: '联系信息' },
    ]
  },
  {
    title: '链接与图片',
    children: [
      { title: '图片处理' },
      { title: '网页链接' },
    ]
  },
  {
    title: '表单与列表',
    children: [
      { title: '表单' },
      { title: '列表' },
    ]
  },
  {
    title: '表格与多媒体',
    children: [
      { title: '表格' },
      { title: '声音' },
      { title: '视频' },
    ]
  }
])
const handleMenu = (menu) => {
  console.log(menu);
  menu.isClick = true;
  menu.active = true;
  menu.children.forEach((item) => {
    item.active = false;
  })
  menu.children[0].active = true;
}
</script>
<template>
   <div class="main pt-16">
      <div class="sidebar w-[300px] overflow-auto">
         <div class="nav p-2">
            <h2 class="text-blue-200 font-medium px-4 py-2 cursor-pointer
            ">HTML全面指南</h2>
            <div class="nav-main" v-for="menu of htmlCatalogue">
              <h2 @click="handleMenu(menu)"
              class="px-4 py-2 cursor-pointer flex justify-between items-center text-gray">
                <span>{{ menu.title }}</span>
                <i class="fas fa-chevron-right mr-14 duration-300" :class="{'rotate-90':menu.isClick}"></i>
              </h2>
              <ul class="pl-3" v-for="cmenu of menu.children">
                <li v-show="menu.active" 
                :class="{active :cmenu.active}"
                class="px-4 py-2 cursor-pointer rounded-md hover:bg-white-50 hover:text-blue"
                >
                  {{ cmenu.title }}
                </li>
              </ul>
            </div>
         </div>
      </div>
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