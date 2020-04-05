

# Okiba / EventEmitter
Emits events that can be listened and unlistened to

__



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

You can grab it as a `npm` package
```bash
npm i --save @okiba/event-emitter
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import EventEmitter from '@okiba/core/event-emitter'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/event-emitter/index.js"></script>
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




## on(name, handler)


Sets an event listener for an event type







#### Arguments


##### + `name`: `String`

Event type


##### + `handler`: `function`

Callback to be fired when that event occours





## off(name, handler)


Unsets an event listener for an event type







#### Arguments


##### + `name`: `String`

Event type


##### + `handler`: `function`

Callback previously registered for that event type





## emit(name, data)


Triggers an event with optional data attached.
All listeners will be triggered in registration order.
Custom data will be passed to them as a parameter







#### Arguments


##### + `name`: `String`

Event type


##### + `data`: `Object` | _optional_

Custom data to be passed to the handlers





## hasListeners(type)


Checks if the given event has at least one registered callback







#### Arguments


##### + `type`: `String`

The event type





## destroy()


Removes all event listeners and deletes the handlers object






