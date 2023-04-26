import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useModelStore = defineStore('modelFlag', () => {
  const modelFlag = ref(true)
  return { modelFlag }
},{ persist: true }
)

