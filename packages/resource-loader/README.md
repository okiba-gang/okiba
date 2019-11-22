

# Okiba / ResourceLoader
Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.




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

You can grab it as an `npm` package 
```bash
npm i --save @okiba/resource-loader
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/resource-loader@0.1.11/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/resource-loader@0.1.11/dist/index.js"></script>
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