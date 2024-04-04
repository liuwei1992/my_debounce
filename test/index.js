import debounce from '../lib/index.js'

const inputEl = document.querySelector('input')

const myDebounceOnInput = debounce(function () {
  console.log('输入框内容', this.value)
}, 1000)

inputEl.oninput = myDebounceOnInput

document.querySelector('button').onclick = () => {
  myDebounceOnInput.cancel()
}

const testres = debounce(() => {
  return 'this is result'
}, 2000)
// 返回值
testres().then((value) => console.log(value))
