

# Okiba / search
Search utilities


###### Untranspiled code. 🛑

Okiba is transpiled for browser usage only. If you use it in production, **don't forget to transpile it with your bundler**.

__



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/search
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import search from '@okiba/core/search'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/search/index.js"></script>
```




## binarySearch(data, target, start, end, prop)


Binary searches an array







#### Arguments


##### + `data`: `Array.<Object>` or  `Array.<Number>`

data to search


##### + `target`: `Number`

the value to find


##### + `start`: `Number`

array index where to start from


##### + `end`: `Number`

array index where to end to


##### + `prop`: `String` | _optional_

property to look into (if data contains objects)





#### Returns

`Number` index of the closest element found