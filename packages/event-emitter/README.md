

# Okiba // EventEmitter
Emits events that can be listened and unlistened to





```javascript
import EventEmitter from '@okiba/event-emitter'
const emitter = new EventEmitter
emitter.on('log', console.log)
emitter.emit('log', 'Silence is deprecated')
// Logs: 'Silence is deprecated'

emitter.off('log', console.log)
emitter.emit('log', 'Will not run')
// ...Nothing happens
```



### Installation
```
npm i --save @okiba/event-emitter
```




## on(name, handler)


Sets an event listener for an event type







#### Arguments


#### + `name`: `String`

Event type


#　　　　　　　　　
#### + `handler`: `function`

Callback to be fired when that event occours






## off(name, handler)


Unsets an event listener for an event type







#### Arguments


#### + `name`: `String`

Event type


#　　　　　　　　　
#### + `handler`: `function`

Callback previously registered for that event type






## emit(name, data)


Triggers an event with optional data attached.
All listeners will be triggered in registration order.
Custom data will be passed to them as a parameter







#### Arguments


#### + `name`: `String`

Event type


#　　　　　　　　　
#### + `data`: `Object` | _optional_

Custom data to be passed to the handlers





