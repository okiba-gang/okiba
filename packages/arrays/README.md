

# Okiba // arrays
Array utils for okiba js




### Installation
```
npm i --save @okiba/arrays
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


#### + `arrayLike`: `Array-like`

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


#### + `castable`: `any`

Array to cast






#### Returns

`Array` The array-like converted to Array, or an Array containing the element