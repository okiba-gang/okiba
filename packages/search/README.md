

# Okiba / search
Search utilities




### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/search
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/search@1.0.11/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/search@1.0.11/dist/index.js"></script>
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