

# Okiba / ResourceLoader
Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.

__



```javascript
import ResourceLoader from '@okiba/resource-loader'

const resLoader = new ResourceLoader()

// if `window.Worker` is available
// `fetch` happens on a separate thread!

urls.forEach(
  url => resLoader.load(url)
    .then(console.log('Loaded! 📦'))
    .catch(console.log('Fail! ☹️'))
)
```



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/resource-loader
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import ResourceLoader from '@okiba/core/resource-loader'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/resource-loader/index.js"></script>
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


#### Todo:

+ Handle abortion
+ Fetch is not on IE11
+ Clone response and pass it as promise reslult



## load(url)


Initiates loading of a resource at a given URL







#### Arguments


##### + `url`: `String`

Resource URL





#### Returns

`Promise` A promise which will be resolved if the resource
is loaded and rejected if not.