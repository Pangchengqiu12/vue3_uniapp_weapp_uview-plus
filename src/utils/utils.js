/**
 *@param {Function} callback 传入的执行函数
 *@param {Number} delay 延迟的时间单位毫秒，默认500
 *@return {Function}
 */
export function debounce(callback, delay = 500) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  }
}

/**
 * 11位手机号号码校验
 * @author liwei <2212261902@qq.com>
 * @param {string} phoneNumber 传入的手机号
 * @return {boolean} 返回一个布尔值
 */
export function checkPhone(phoneNumber) {
  let phone = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/
  return phone.test(phoneNumber)
}
