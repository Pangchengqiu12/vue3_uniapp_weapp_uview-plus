<template>
  <view class="nav" :style="[{ height: customBar + 'px' }]">
    <view class="cu-custom" :style="[{ height: customBar + 'px' }]">
      <view class="cu-bar fixed" :style="style">
        <view class="action" @tap="BackPage" v-if="isBack">
          <u-icon name="arrow-left" size="18" :bold="true"></u-icon>
          <slot name="backText"></slot>
        </view>
        <view class="content" :style="[{ top: statusBar + 'px' }]">
          <slot name="content"></slot>
        </view>
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script setup>
import { inject, ref, computed } from 'vue'

let globalData = inject('globalData')
let statusBar = ref(globalData.value.StatusBar)
let customBar = ref(globalData.value.CustomBar)

const props = defineProps({
  bgColor: {
    type: String,
    default: '',
  },
  isBack: {
    type: [Boolean, String],
    default: false,
  },
  bgImage: {
    type: String,
    default: '',
  },
})

const style = computed(() => {
  let StatusBar = statusBar.value
  let CustomBar = customBar.value
  let bgImage = props.bgImage
  let style = `height:${CustomBar}px;padding-top:${StatusBar}px;`
  if (props.bgImage) {
    style = `${style}background-image:url(${bgImage});`
  }
  if (props.bgColor) {
    style = `${style}background-color:${props.bgColor};`
  }
  return style
})
function BackPage() {
  uni.navigateBack({
    delta: 1,
  })
}
</script>

<style lang="scss" scoped>
.nav {
  overflow: hidden;
}
.cu-custom {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.nav::after {
  content: '';
  width: 100%;
  height: 100%;
  display: block;
  clear: both;
}
.cu-bar {
  @include flex-r-start-center;
  position: relative;
  .action {
    padding-left: 26rpx;
  }
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }
}
</style>
