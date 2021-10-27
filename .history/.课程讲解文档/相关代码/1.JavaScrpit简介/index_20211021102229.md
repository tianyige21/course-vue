## Data Types 
### 基础类型
   - Number 
   - String
   - Boolean
   - undefined
   - Symbole
###  Object
   - function
   - Array 
   - Data
   - RegExp


###  js的单线程


> 单线程语言：JavaScript 的设计就是为了处理浏览器网页的交互（DOM操作的处理、UI动画等），决定了它是一门单线程语言。
 >> Tip:如果有多个线程，它们同时在操作 DOM，那网页将会一团糟。

```
console.log('script start')
console.log('do something...')
console.log('script end')

// script start
// do something...
// script end
```

### 浏览器的多线程

```
console.log('script start')

console.log('do something...')

setTimeout(() => {
  console.log('timer over')
}, 1000)

// 点击页面
console.log('click page')

console.log('script end')

// script start
// do something...
// click page
// script end
// timer over
```
#### 线程如下：
- JS引擎线程
- 事件触发线程
- 定时触发器线程
- 异步http请求线程
- GUI渲染线程