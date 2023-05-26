export const IP = (() => {
  if (process.env.NODE_ENV === 'development') {
    return ''
  } else {
    console.log('生产环境')
    return ''
  }
})()
export const TIMEOUT = 5000
export const IMGIP = '' //图片ip
// 路由白名单,设置需要设置请求头的 content-type为x-www-form-urlencoded
export let routeWhiteList = new Map([['app-api/crm/notice/read', true]])
