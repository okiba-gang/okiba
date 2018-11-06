<a name="module_Okiba / arrays"></a>

## Okiba / arrays
Utilities to work with arrays


* [Okiba / arrays](#module_Okiba / arrays)
    * [.arrayOrOne(arrayLike)](#module_Okiba / arrays.arrayOrOne) ⇒ <code>any</code>
    * [.castArray(castable)](#module_Okiba / arrays.castArray) ⇒ <code>Array</code>

<a name="module_Okiba / arrays.arrayOrOne"></a>

### Okiba / arrays.arrayOrOne(arrayLike) ⇒ <code>any</code>
Return the first element if it only contains one

```javascript
const els = arrayOrOne([🍏, 🍌])
console.log(els) // [🍏, 🍌]

const els = arrayOrOne([🍏])
console.log(els) // 🍏
```

**Kind**: static method of [<code>Okiba / arrays</code>](#module_Okiba / arrays)  
**Returns**: <code>any</code> - The first element or the argument  

| Param | Type | Description |
| --- | --- | --- |
| arrayLike | <code>Array-like</code> | The options object. |

<a name="module_Okiba / arrays.castArray"></a>

### Okiba / arrays.castArray(castable) ⇒ <code>Array</code>
Cast an array-like object or single element to Array

**Kind**: static method of [<code>Okiba / arrays</code>](#module_Okiba / arrays)  
**Returns**: <code>Array</code> - The array-like converted to Array, or an Array containing the element  

| Param | Type | Description |
| --- | --- | --- |
| castable | <code>any</code> | Array to cast |

