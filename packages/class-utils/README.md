

# Okiba / class-utils
Utilities that operate on classes


###### Untranspiled code. 🛑

Okiba is transpiled for browser usage only. If you use it in production, **don't forget to transpile it with your bundler**.

__



### Installation

You can grab it as a `npm` package
```bash
npm i --save @okiba/class-utils
```
or you can grab it from core
```bash
npm i --save @okiba/core
```
```javascript
import class-utils from '@okiba/core/class-utils'
```

Or use it in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/class-utils/index.js"></script>
```




## mixin(BaseClass, context, Arguments)


Mixes properties and methods from a class into a given `this` context






```javascript
class Fruit {
  constructor() {
    this.isPeeled = false
  }

  peel() {
    this.isPeeled = true
  }
}

class Coloured {
  constructor(color) {
    this.color = color
  }
}

class Edible {
  constructor(color) {
    mixin(Fruit, this)
    mixin(Coloured, this, color)
  }
}

const edible = new Edible('red')
edible.peel()
console.log(edible.isPeeled, edible.color)
// Logs: true, 'red'
```




#### Arguments


##### + `BaseClass`: `Class`

The class definition to mix-in


##### + `context`: `Object`

The context that has to include methods and props


##### + `Arguments`: `any`

to pass to the BaseClass constructor




