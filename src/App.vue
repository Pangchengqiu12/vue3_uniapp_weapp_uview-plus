<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { provide, readonly, ref } from 'vue'
let globalData = ref({})
onLaunch(() => {
  uni.getSystemInfo({
    success: function (e) {
      // #ifndef MP
      globalData.value.StatusBar = e.statusBarHeight
      if (e.platform == 'android') {
        globalData.value.CustomBar = e.statusBarHeight + 50
      } else {
        globalData.value.CustomBar = e.statusBarHeight + 45
      }
      // #endif

      // #ifdef MP-WEIXIN
      globalData.value.StatusBar = e.statusBarHeight
      let custom = wx.getMenuButtonBoundingClientRect()
      globalData.value.Custom = custom
      globalData.value.CustomBar = custom.bottom + custom.top - e.statusBarHeight + 4
      // #endif

      // #ifdef MP-ALIPAY
      globalData.value.StatusBar = e.statusBarHeight
      globalData.value.CustomBar = e.statusBarHeight + e.titleBarHeight
      // #endif
    },
  })
})
onShow(() => {
  // provide('globalData', readonly(globalData))
})
onHide(() => {
  console.log('App Hide')
})
provide('globalData', readonly(globalData))
</script>

<style>
/*每个页面公共css */
page {
  box-sizing: border-box;
  height: 100%;
}
</style>
