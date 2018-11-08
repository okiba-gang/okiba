

# Okiba // evented-component
A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.




```javascript
// FetchButton.js
import EventedComponent from '@okiba/EventedComponent'

class FetchButton extends EventedComponent {
  constructor(args) {
    super(args)

    this.onClick = this.onClick.bind(this)
    this.el.addEventListener('click', this.onClick)
  }

  onClick() {
    fetch('/api')
      .then(data => this.emit('update', data))
  }

  onDestroy() {
    this.el.removeEventListener('click', this.onClick)
  }
}

// UIPiece.js
import Component from '@okiba/Component'

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
```
npm i --save @okiba/
```




## on()







#### See: [EventEmitter](event-emitter#on)







## off()







#### See: [EventEmitter](event-emitter#off)







## emit()







#### See: [EventEmitter](event-emitter#emit)






