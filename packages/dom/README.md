# Okiba // dom
Utilities to work with dom elements and selectors


## qsa

Selects an array of DOM elements, scoped to element




```javascript
import {qsa} from '@akiba/dom'
const fruits = qsa('.fruit')
console.log(fruits) // [div.fruit, div.fruit]
```




#### Arguments


##### __`selector`__: `String`

DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)

# 　　　　　
##### __`element`__: `Element` | _optional_ - _default_: `document`

DOM element to scope the selection query, only childs of that element will be tageted


#### Returns

`Array.<Element>` An array of DOM elements matching `selector`