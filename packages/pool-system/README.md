

# Okiba / PoolSystem
Manages a dinamically grown pool of DOM Elements
import PoolSystem from '@okiba/pool-system'




```javascript
const container = document.querySelector('#container')

function createEl(){
 return document.createElement('img');
}

const pool = new PoolSystem(container, createEl)
```



### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/pool-system
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/pool-system@1.0.5/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/pool-system@1.0.5/dist/index.js"></script>
```




## constructor(parent, createEl)









#### Arguments


##### + `parent`: `Object`

DOM Element used as container for all pool elements.


##### + `createEl`: `function`

Function that creates an istance the element you want to add to the pool.





## ensure(size)


Makes sure the pool can host a minimum number of elements,
grows it if that's not the case.







#### Arguments


##### + `size`: `Number`

Minimum pool size to ensure.





## get()


Hands a free element from the pool.
If there isn't one, it automatically grows the pool's.
This provides dynamic sizing which ensures







#### Returns

`Element` A free DOM Element
## free(Element)


Marks an element as elegible for reutilization,
and pushes it into the pool







#### Arguments


##### + `Element`: `Element`

to mark as free





## destroy()


Nulls all references to DOM Elements






