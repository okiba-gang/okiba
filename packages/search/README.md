

# Okiba / search
Search utilities

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