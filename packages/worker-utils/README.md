

# Okiba / worker-utils
Set of useful functions to ease WebWorkers development


###### Untranspiled code. 🛑

Okiba is transpiled for browser usage only. If you use it in production, **don't forget to transpile it with your bundler**.

__



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/worker-utils
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import worker-utils from '@okiba/core/worker-utils'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/worker-utils/index.js"></script>
```




## createWorker(fn)


Creates a web worker starting from a function







#### Arguments


##### + `fn`: `function`

function to be included in the worker script, will be self-invoked





#### Returns

`WebWorker` worker running the passed script