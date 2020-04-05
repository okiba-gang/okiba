

# Okiba / functions
A collection of contextless utility functions


###### Untranspiled code. 🛑

Okiba is transpiled for browser usage only. If you use it in production, **don't forget to transpile it with your bundler**.

__



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/functions
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import functions from '@okiba/core/functions'
```

Or use it in the browser
```html
<script src="https://unpkg.com/@okiba/functions/index.js"></script>
```




## debounce(callback, latency, timer)


Callback debounce helper.
Returns a debounced version of provided callback






```javascript
import {debounce} from '@okiba/functions'

const onResize = () => console.log('window resized')
window.addEventListener('resize', debounce(onResize, 300))
```




#### Arguments


##### + `callback`: `function`

The callback to be debounced


##### + `latency`: `Number`

The debounce delay time


##### + `timer`: `Number`

The timer id





#### Returns

`function` The debounced version of original callback