

# Okiba / DragEmitter
Emits drag events for all common pointers kinds (touch & mouse)


###### Untranspiled code. 🛑

Okiba is transpiled for browser usage only. If you use it in production, **don't forget to transpile it with your bundler**.

__



### Installation

You can grab it as an `npm` package
```bash
npm i --save @okiba/drag-emitter
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/drag-emitter@0.2.5/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/drag-emitter@0.2.5/dist/index.js"></script>
```




## constructor(el)








```javascript
import {DragEmitter} from '@okiba/drag-emitter'
import {qs} from '@okiba/dom'

const dragEmitter = new DragEmitter(qs('.container'))
dragEmitter.on(
  'drag',
  ({deltaX, clientX, deltaY, clientY}) => {
    console.log(deltaX, clientX, deltaY, clientY)
  }
```




#### Arguments


##### + `el`: `Element`

Element whose surface is used for drag events





## destroy()


Unbinds events from the element and deletes the reference.
To be called when the instance is not needed anymore for cleanup.






