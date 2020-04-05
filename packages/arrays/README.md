

# Okiba / arrays
Array utils for okiba js

__



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/arrays
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import arrays from '@okiba/core/arrays'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/arrays/index.js"></script>
```

## Usage

#### Untranspiled code 🛑
Okiba UI packages are not transpiled, so _don't forget to transpile them with your favourite bundler_.
For example, using Babel with Webpack, you should prevent imports from okiba to be excluded from transpilation, like follows:

```javascript
{
  test: /\.js$/,
  exclude: /node_modules\/(?!(@okiba)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```




## arrayOrOne(arrayLike)


Return the first element if it only contains one






```javascript
const els = arrayOrOne([🍏, 🍌])
console.log(els) // [🍏, 🍌]

const els = arrayOrOne([🍏])
console.log(els) // 🍏
```




#### Arguments


##### + `arrayLike`: `Array-like`

The options object.





#### Returns

`any` The first element or the argument, undefined if empty array
## castArray(castable)


Cast an array-like object or single element to Array






```javascript
const elements = castArray(document.querySelectorAll('p')) // [p, p]
const fruits = castArray(🍒) // [🍒]
```




#### Arguments


##### + `castable`: `any`

Array to cast





#### Returns

`Array` The array-like converted to Array, or an Array containing the element
## spliceOne(array, index)


Removes an element from an array in-place without causing Garbage Collection






```javascript
const array = [🍎, 🍐, 🍌]
spliceOne(array, 1)
console.log(array) // Logs: [🍎, 🍌]
```




#### Arguments


##### + `array`: `Array`

Array you want to remove an element from


##### + `index`: `Number`

The index of the element to remove




