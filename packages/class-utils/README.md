

# Okiba / class-utils
Utilities that operate on classes

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




