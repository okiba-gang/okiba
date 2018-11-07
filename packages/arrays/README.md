# Okiba // arrays
Array utils for okiba js


## arrayOrOne

Return the first element if it only contains one




```javascript
const els = arrayOrOne([🍏, 🍌])
console.log(els) // [🍏, 🍌]

const els = arrayOrOne([🍏])
console.log(els) // 🍏
```




#### Arguments


##### __`arrayLike`__: `Array-like`

The options object.


#### Returns

`any` The first element or the argument## castArray

Cast an array-like object or single element to Array





#### Arguments


##### __`castable`__: `any`

Array to cast


#### Returns

`Array` The array-like converted to Array, or an Array containing the element