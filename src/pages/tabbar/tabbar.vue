<template>
  <view class="page index">
    <view class="main">
      <index v-if="PageCur === 'index'" />
      <shop v-if="PageCur === 'shop'" ref="shopRef" />
    </view>
    <view class="tabbar">
      <view class="action" @click="navChange" data-cur="index">
        <view class="cuIcon-cu-image">
          <image
            :src="PageCur === 'index' ? '../../static/tabBar/index_cur.png' : '../../static/tabBar/index.png'"
            mode="heightFix"
          ></image>
        </view>
        <view :class="PageCur === 'index' ? 'color_main' : ''">首页</view>
      </view>

      <view class="action" @click="navChange" data-cur="shop">
        <view class="cuIcon-cu-image">
          <image
            :src="PageCur === 'shop' ? '../../static/tabBar/shop_cur.png' : '../../static/tabBar/shop.png'"
            mode="heightFix"
          ></image>
        </view>
        <view :class="PageCur === 'shop' ? 'color_main' : ''">商城</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import index from '@/pages/tabbar/index'
import shop from '@/pages/tabbar/shop'
import { onLoad } from '@dcloudio/uni-app'
import { ref, onMounted, inject } from 'vue'

let PageCur = ref('shop')
const shopRef = ref(null)

function navChange(e) {
  PageCur.value = e.currentTarget.dataset.cur
}

onLoad(() => {})
</script>

<style lang="scss" scoped>
.index {
  overflow: auto;
  position: relative;
  @include flex-c;
  .main {
    flex: 1 0 0;
    overflow: auto;
    padding-bottom: 100rpx;
  }
  .tabbar {
    width: 100%;
    height: calc(100upx + env(safe-area-inset-bottom) / 2);
    padding-bottom: calc(env(safe-area-inset-bottom) / 2);
    @include flex-r-evely-center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    color: $tabbarColor;
    text-align: center;
    font-size: $tabbarFontSize;
    background-color: $tabbarBgColor;
    > view {
      flex: 1;
    }
    // .action {
    //   @include flex-c-center-center;
    // }
    .color_main {
      color: $tabbarColorChecked;
    }
    .cuIcon-cu-image image {
      width: 50rpx;
      height: 50rpx;
    }
  }
}
</style>
<style></style>
