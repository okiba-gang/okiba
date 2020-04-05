

# Okiba / DragEmitter
Emits drag events for all common pointers kinds (touch & mouse)

__



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/drag-emitter
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import DragEmitter from '@okiba/core/drag-emitter'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/drag-emitter/index.js"></script>
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






