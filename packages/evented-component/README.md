

# Okiba / EventedComponent
A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.




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

You can grab it as an `npm` package 
```bash
npm i --save @okiba/evented-component
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/evented-component@1.0.7/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/evented-component@1.0.7/dist/index.js"></script>
```




## on()







#### See: [EventEmitter::on](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data)







## off()







#### See: [EventEmitter::off](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter##offname-handler)







## emit()







#### See: [EventEmitter::emit](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data)







## destroy()







#### See: [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component#destroy)






