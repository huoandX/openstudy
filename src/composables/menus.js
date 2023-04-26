import { ref } from "vue";
import router from '@/router'
class Menu {
  menus = ref([])
  constructor() {
    this.menus.value = this.getMenuByRoute()
  }
  // 设置当前菜单
  setCurrentMenu(menu) {
    this.menus.value[0].children.forEach((m) => {
      m.children.forEach(c => {
        c.isClick = false
        if (c.name == menu.name) {
          m.isClick = true
          c.isClick = true
        }
      })
    })
  }
  toggleParentMenu(menu) {
    console.log(menu);
    if (menu.isClick) {
      menu.isClick = false
      return
    }
    menu.isClick = true
  }
   // 根据路由获取菜单
   getMenuByRoute() { 
     return router.getRoutes().filter(route => route.children.length && route.meta.show).map(route => {
       route.children.map(child => {
          child.children.map(child => {
            // console.log({...child.meta.menu,route:child.name});
           return { ...child.meta.menu ,route: child.name} 
          })
          return child.children
       })
      return route
    })
  }
}
export default new Menu();