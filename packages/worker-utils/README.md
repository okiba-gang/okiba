

# Okiba / worker-utils
Set of useful functions to ease WebWorkers development


###### Untranspiled code. 🛑

Okiba is transpiled for browser usage only. If you use it in production, **don't forget to transpile it with your bundler**.

__



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/worker-utils
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/worker-utils@0.1.16/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/worker-utils@0.1.16/dist/index.js"></script>
```




## createWorker(fn)


Creates a web worker starting from a function







#### Arguments


##### + `fn`: `function`

function to be included in the worker script, will be self-invoked





#### Returns

`WebWorker` worker running the passed script