import { IMGIP } from './config.js'
//判断当前数据值是否为空获取是否定义但是没有赋值
export const isNull = (value) => {
  if (value === null || value === undefined || value === '') {
    return true
  }
  return false
}
//判断当前对象是否为空对象
export const isEmptyObject = (object) => {
  return isNull(object) || !(Object.keys(object).length > 0)
}
//判断当前数据是否为空数组
export const isEmptyArray = (array) => {
  return isNull(array) || !(array.length > 0)
}
//获取图片前缀ip
export const getImageIp = () => {
  return IMGIP
}
//封装toast若提示框
export const showToast = (icon, title) => {
  /* #ifdef MP-ALIPAY */
  if (icon === 'error') {
    icon = 'fail'
  }
  /* #endif */
  return uni.showToast({
    icon,
    title,
  })
}
export function getTime(time) {
  if (!time) {
    return ''
  }
  let data = Math.round((new Date().getTime() - time) / 1000)
  if (data >= 60) {
    let m = Math.round(data / 60)
    if (m >= 60) {
      let house = Math.round(m / 60)
      if (house > 24) {
        let day = Math.round(house / 24)
        if (day >= 365) {
          return Math.round(day / 365) + '年'
        } else {
          return day + '天'
        }
      } else {
        return house + '小时'
      }
    } else {
      return m + '分钟'
    }
  } else {
    return data + '秒'
  }
}

// 时间戳转换方法    time:需要被转换的时间戳数字
export function formatDate(time) {
  var date = new Date(parseInt(time))
  var year = date.getFullYear()
  var mon = addZero(date.getMonth() + 1)
  var day = addZero(date.getDate())
  var h = addZero(date.getHours())
  var m = addZero(date.getMinutes())
  var s = addZero(date.getSeconds())
  return year + '-' + mon + '-' + day + ' ' + h + ':' + m + ':' + s
}

// addZero(n) 一般用于补零
function addZero(n) {
  // return n > 10 ? n : '0'+n
  return String(n).padStart(2, 0)
}
export default {
  install: (app, options) => {
    app.config.globalProperties.$util = {
      isNull,
      isEmptyObject,
      isEmptyArray,
      getImageIp,
      showToast,
      getTime,
      formatDate,
    }
    options = {
      isNull,
      isEmptyObject,
      isEmptyArray,
      getImageIp,
      showToast,
      getTime,
      formatDate,
    }
    app.provide('util', options)
  },
}
