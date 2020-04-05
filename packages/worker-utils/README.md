

# Okiba / worker-utils
Set of useful functions to ease WebWorkers development

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

## Usage

#### Untranspiled code 🛑
Okiba UI packages are not transpiled, so _don't forget to transpile them with your favourite bundler_.
For example, using Babel with Webpack, you should prevent imports from okiba to be excluded from transpilation, like follows:

```javascript
{
  test: /\.js$/,
  exclude: /node_modules\/(?!(@okiba)\/).*/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env']
    }
  }
}
```




## createWorker(fn)


Creates a web worker starting from a function







#### Arguments


##### + `fn`: `function`

function to be included in the worker script, will be self-invoked





#### Returns

`WebWorker` worker running the passed script