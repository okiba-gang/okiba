

# Okiba / easings
Collection of easings to alter a value

__



```javascript
import {easeInQuad} from '@okiba/easings'
const easedProgress = easeInQuad(progress)
```



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/easings
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import easings from '@okiba/core/easings'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/easings/index.js"></script>
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



