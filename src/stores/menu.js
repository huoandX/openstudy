import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu',{
  state: () => {
      return {
        menus: ['10'],
      };
  },
  actions: {
  }
},{ persist: true }
)
