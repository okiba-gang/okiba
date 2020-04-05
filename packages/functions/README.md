

# Okiba / functions
A collection of contextless utility functions

__



### Installation

```bash
npm i --save @okiba/functions
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/functions/index.js"></script>
```

## Usage

```javascript
import functions from '@okiba/functions'
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