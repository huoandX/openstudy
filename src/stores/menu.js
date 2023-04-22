import { defineStore } from 'pinia'
import router from '@/router'
export const useMenuStore = defineStore('menu',{
  state: () => {
      return {
        menus: [],
      };
  },
  actions: {
    init() {
      this.getMenuByRoute()
    },
     // 根据路由获取菜单
    getMenuByRoute() { 
      this.menus = router.getRoutes().filter(route => route.children.length && route.meta.show)
      .map(route => {
        let menu = { ...route.meta?.menu }
        menu.children = route.children.filter(route => route.meta?.menu)
          .map(route => { return { ...route.meta?.menu ,route:route.name} })
        return menu
      })
      .filter(menu => menu.children?.length)
    }
  }
},{ persist: true }
)
