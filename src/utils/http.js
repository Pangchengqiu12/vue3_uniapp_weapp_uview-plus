import { IP, TIMEOUT, routeWhiteList } from '@/utils/config.js'
import { useMemberStore } from '@/stores'
import { showToast } from '@/common/utils/util.js'
const request = ({ method, url, param }, maxCount = 2) => {
  const memberStore = useMemberStore()
  return new Promise((resolve, reject) => {
    uni.showLoading({ title: '加载中' })
    let header
    method === 'GET' || method === 'DELETE' || routeWhiteList.get(url)
      ? (header = {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${memberStore?.userInfo?.accessToken}`,
        })
      : (header = { Authorization: `Bearer ${memberStore?.userInfo?.accessToken}` })
    uni.request({
      url: IP + url,
      method,
      data: param,
      header,
      timeout: TIMEOUT,
      success: (res) => {
        uni.hideLoading()
        if (res.statusCode !== 200) return
        let {
          data,
          data: { code, msg },
        } = res
        switch (code) {
          case 0:
            resolve(data)
            break
          case 403:
            uni.hideLoading()
            uni.showModal({
              title: '提示',
              content: '当前用户未登陆，请前往登录页进行登陆',
              success: (res) => {
                if (res.confirm) {
                  //跳转至授权页面
                  uni.reLaunch({ url: '/pages/login/login' })
                } else {
                  uni.reLaunch({ url: '/pages/index/index' })
                }
              },
            })
            break
          default:
            showToast('error', msg)
            reject(data)
        }
      },
      fail: (error) => {
        let { errMsg } = error
        uni.hideLoading()
        showToast('error', errMsg)
        reject(errMsg)
        // if (errMsg === 'request:fail timeout') {
        //   showToast('error', '网络请求超时')
        //   reject('timeout')
        // } else if (errMsg === 'request:fail HTTP错误') {
        //   showToast('error', '请检查网络')
        //   reject('newwork')
        // } else {
        //   showToast('error', errMsg)
        //   reject(errMsg)
        // }
      },
    })
  }).catch((err) => {
    maxCount <= 0 ? Promise.reject(err) : request({ method, url, param }, maxCount - 1)
  })
}

export function $post(url, param, maxCount) {
  return request(
    {
      method: 'POST',
      url,
      param,
    },
    maxCount,
  )
}

export function $get(url, param, maxCount) {
  return request(
    {
      method: 'GET',
      url,
      param,
    },
    maxCount,
  )
}
export function $put(url, param, maxCount) {
  return request(
    {
      method: 'PUT',
      url,
      param,
    },
    maxCount,
  )
}
export function $delete(url, param, maxCount) {
  return request(
    {
      method: 'DELETE',
      url,
      param,
    },
    maxCount,
  )
}
