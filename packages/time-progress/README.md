

# Okiba / TimeProgress
Maps progress ovrer time, normalized between 0 and 1

__



```javascript
import TimeProgress from '@okiba/time-progress'

const tp = new TimeProgress(400)
tp.setProgress(0.2)

 function loop() {
  const progress = tp.update()
  domeElement.style.opacity = progress

  if (progress > 0.8 || progress < 0.2) {
    tp.reverse()
  }

  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)
```



### Installation

```bash
npm i --save @okiba/time-progress
```

Or import it directly in the browser
```html
<script type="module" src="https://unpkg.com/@okiba/time-progress/index.js"></script>
```

## Usage

```javascript
import TimeProgress from '@okiba/time-progress'
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







## constructor(duration)









#### Arguments


##### + `duration`: | _optional_ - _default_: `400`

Amount of time it takes to reach progress = 1





## update()


Has to be called at every loop or whenever you want get an updated progress







#### Returns

`Number` Normalized progress in time
## reset()


Sets the timer back to zero







## setProgress(progress)


Forces a certain progress, reflected on the time







#### Arguments


##### + `progress`: `Number`

[description]





## setDirection(direction)


Sets a direction in time.
`1` is forward in time (progress goes from 0 to 1)
`-1` is backwards in time (progress goes from 1 to 0)







#### Arguments


##### + `direction`: `Number`

1 is forward, -1 is backwards





## reverse()


Reverses the direction in time






