

# Okiba / Store
A store module to implement state management.

__



```javascript
import Store from '@okiba/store'

const store = new Store({ level: 1 })

const onLevelChange = level => {
 console.log(level)
}

store.subscribe('level', onLevelChange)

store.set('level', 2) // Logs: 2
```



### Installation

```bash
npm i --save @okiba/store
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/store/index.js"></script>
```

## Usage

```javascript
import Store from '@okiba/store'
```

#### Untranspiled code 🛑
Okiba Core packages are not transpiled, so _don't forget to transpile them with your favourite bundler_.
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







## constructor(initialState)









#### Arguments


##### + `initialState`: `Object`

The initial store's state





## set(key, value)


Single state property setter







#### Arguments


##### + `key`: `String`

The property key


##### + `value`: `any`

The property value





## get(key)


Single state property getter







#### Arguments


##### + `key`: `String`

The property key





## getState()


State getter







#### Returns

`Object` The current state
## setState(state)


State setter







#### Arguments


##### + `state`: `Object`

The new state object





## reset()


State resetter







## subscribe(key, callback)


State update subscription handler







#### Arguments


##### + `key`: `String`

The property to be observed


##### + `callback`: `function`

The function to be called on property update





## unsubscribe(key, callback)


State update unsubscription handler







#### Arguments


##### + `key`: `String`

The property to be unobserved


##### + `callback`: `function`

The handler to be dismissed




