

# Okiba // Okiba / pool-system
Class to manage dinamically a pool of system




### Installation
```
npm i --save @okiba/pool-system
```




## constructor(parent, createEl)


Create an istance of PoolSystem

```javascript
import PoolSystem from '@okiba/pool-system'

const container = document.querySelector('#container')

function createEl(){
 return document.createElement('img');
}

const pool = new PoolSystem(container, createEl)

```







#### Arguments


#### + `parent`: `Object`

The dom node used like container of pool system elements.


#　　　　　　　　　
#### + `createEl`: `function`

Function that create an istance of what you want to add to you pool system.






#### Returns

`PoolSystem` PoolSystem instance.
## ensure(size)


Function to ensure a minimum pool size.
Skipped If actual size is bigger that the passed size,
otherwise create new element to reach the new size

```javascript
pool.ensure(5)

```







#### Arguments


#### + `size`: `int`

Minimum pool size to ensure.






## get()


Return the first free element from pool.
If there isn't free element, the pool size is increased and a new element is created.
This behaviour provide you a dinamic pool system that create elements only if necessary







#### Returns

`any` A free element from pool
## free(el)


Set an element like free







#### Arguments


#### + `el`: `*`








## destroy()


Destroy all reference from instance






