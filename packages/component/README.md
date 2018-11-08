

# Okiba // Component
Manages a DOM component, binds UI and recursively binds child components.
Can be extended or instantiated




```javascript
// ./components/Slider.js

import Component from '@okiba/component'
import SliderControls from '@components/SliderControls'

const ui = {
  slides: '.slide',
}

const components = {
  controls: {
    selector: '.slider-controls', type: SliderControls, options: {big: true}
  }
}

class Slider extends Component {
  constructor({el, options}) {
    super({el, ui, components, options})

    this.ui.slides.forEach(
      slide => slide.style.opacity = 0
    )

    this.components.controls.forEach(
      controls => controls.onNext(this.next.bind(this))
    )
  }
}
```

```javascript
// ./main.js

import {qs} from '@okiba/dom'
import Component from '@okiba/component'
import Slider from './components/Slider'

const app = new Component({
  el: qs('#app'),
  components: {
    selector: '.slider', type: Slider
  }
})
```



### Installation
```
npm i --save @okiba/
```




## constructor(args: {el, ui, components, options})









#### Arguments


#### + `args`: `Object`

Arguments to create a component



##### + `el`: `Element`

DOM Element to be bound


#　　　　　　　　　
##### + `ui`: `Object` | _optional_

UI hash where keys are name and values are selectors
```javascript
{ buttonNext: '#buttonNext' }
```
Becomes:
```javascript
this.ui.buttonNext
```


#　　　　　　　　　
##### + `components`: `Object` | _optional_

Components hash for childs to bind, keys are names and values are component initialization props:
```javascript
{
  slider: {
    // Matched using [qs]('https://github/okiba-gang/okiba/packages/dom'), scoped to the current component element
    selector: '.domSelector',
    // Component class, extending Okiba Component
    type: Slider,
    // Options hash
    options: {fullScreen: true}
  }
}
```

Becomes:
```javascript
this.components.slider
```


#　　　　　　　　　
##### + `options`: `Object` | _optional_

Custom options passed to the component









## onDestroy()


Virtual method, needs to be overridden
It's the place to call cleanup functions as it will
be called when your component is destroyed







## destroy()


Should not be overridden, will call `onDestroy`
and forward destruction to all child components






