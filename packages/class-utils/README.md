

# Okiba / class-utils
Utilities that operate on classes




### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/class-utils
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/class-utils@1.0.7/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/class-utils@1.0.7/dist/index.js"></script>
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




