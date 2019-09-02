

# Okiba / arrays
Array utils for okiba js




### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/arrays
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/arrays@1.0.5/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/arrays@1.0.5/dist/index.js"></script>
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




