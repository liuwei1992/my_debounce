const debounce = (fun, delay) => {
  if (typeof fun !== 'function') throw Error('请传入函数参数')

  let timer
  function clear() {
    if (timer) clearTimeout(timer)
  }

  const _debounce = function (...args) {
    return new Promise((resolve, reject) => {
      try {
        // 取消上次
        clear()

        timer = setTimeout(() => {
          // event 等参数
          resolve(fun.apply(this, args))
          timer = null
        }, delay)
      } catch (err) {
        reject(err)
      }
    })
  }

  // 取消
  _debounce.cancel = () => {
    clear()
    timer = null
  }

  return _debounce
}

export default debounce
