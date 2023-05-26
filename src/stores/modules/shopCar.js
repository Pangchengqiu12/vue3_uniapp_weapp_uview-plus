import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useShopCarStore = defineStore('shopCar', () => {
  const shopCarList = ref(['1', '2', '3'])
  return {
    shopCarList,
  }
})
