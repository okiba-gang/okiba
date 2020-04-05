

# Okiba / EventedComponent
A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.

__



```javascript
// FetchButton.js

import EventedComponent from '@okiba/evented-component'
import {on, off} from '@okiba/dom'

class FetchButton extends EventedComponent {
  constructor(args) {
    super(args)

    this.onClick = this.onClick.bind(this)
    on(this.el, 'click', this.onClick)
  }

  onClick() {
    fetch('/api')
      .then(data => this.emit('update', data))
  }

  onDestroy() {
    off(this.el, 'click', this.onClick)
  }
}
```

```javascript
// UIPiece.js

import Component from '@okiba/component'

const components = {
  fetchButton: {selector: '.fetch-button', type: FetchButton}
}

class UIPiece extends Component {
  constructor({el, options}) {
    super({el, ui, components, options})

    this.components.fetchButton.on(
      'update', this.update
    )
  }

  onDestroy() {
    this.components.fetchButton.off(
      'update', this.update
    )
  }
}
```



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/evented-component
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import EventedComponent from '@okiba/core/evented-component'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/evented-component/index.js"></script>
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




## on()







#### See: [EventEmitter::on](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data)







## off()







#### See: [EventEmitter::off](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter##offname-handler)







## emit()







#### See: [EventEmitter::emit](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data)







## destroy()







#### See: [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component#destroy)






