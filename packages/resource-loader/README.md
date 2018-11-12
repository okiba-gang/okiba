

# Okiba // ResourceLoader
Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.




```javascript
import ResourceLoader from '@okiba/resource-loader'
const resLoader = new ResourceLoader()

imgUrls.forEac(imgUrl => resLoader.load(imgUrl))
```



### Installation
```
npm i --save @okiba/resource-loader
```


#### Todo:

+ Handle abortion
+ Fetch is not on IE11



## load(url)


Initiates loading of a resource at a given URL







#### Arguments


##### + `url`: `String`

Resource URL




