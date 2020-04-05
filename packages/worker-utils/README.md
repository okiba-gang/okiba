

# Okiba / worker-utils
Set of useful functions to ease WebWorkers development

__



### Installation

```bash
npm i --save @okiba/worker-utils
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/worker-utils/index.js"></script>
```

## Usage

```javascript
import worker-utils from '@okiba/worker-utils'
```

#### Untranspiled code 🛑
Okiba Core packages are not transpiled, so _don't forget to transpile them with your favourite bundler_.
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