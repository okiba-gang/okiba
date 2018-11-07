# Okiba // Component
Manages a DOM component, binds UI and recursively binds child components



```javascript
new Component(el, ui, component, options)
```



## Component





```javascript
import {qs} from '@okiba/dom'
import {Slider} from './components/Slider'

const app = new Component(
  qs('#app'),
  { buttonNext: '#buttonNext' },
  {
    slider: {
      selector: '.slider',
      type: Slider,
      options: { fullScreen: true }
    }
  },
})
```




#### Arguments


##### __`el`__: `Element` or  `String`

DOM Element or selector

# 　　　　　
##### __`ui`__: `Object` | _optional_

UI hash where keys are name and values are selectors
```javascript
{ buttonNext: '#buttonNext' }
```
Becomes:
```javascript
this.ui.buttonNext
```

# 　　　　　
##### __`components`__: `Object` | _optional_

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
##### __`options`__: `Object` | _optional_

Custom options passed to the component

## onDestroy

Virtual method, needs to be overridden
It's the place to call cleanup functions as it will
be called when your component is destroyed




## destroy

Should not be overridden, will call `onDestroy`
and forward destruction to all child components




