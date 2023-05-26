import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useMemberStore = defineStore(
  'userinfo',
  () => {
    const userInfo = ref(null)
    const setUserInfo = (val) => {
      userInfo.value = val
    }
    return {
      userInfo,
      setUserInfo,
    }
  },
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
