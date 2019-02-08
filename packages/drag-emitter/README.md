

# Okiba / DragEmitter
Emits drag events for all common pointers kinds (touch & mouse)




### Installation
```
npm i --save @okiba/drag-emitter
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






