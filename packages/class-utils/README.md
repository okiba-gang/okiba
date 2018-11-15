

# Okiba / class-utils
Utilities that operate on classes




### Installation
```
npm i --save @okiba/class-utils
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




