

# Okiba / TimeProgress
Maps progress ovrer time, normalized between 0 and 1




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

You can grab it as an `npm` package 
```bash
npm i --save @okiba/time-progress
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/time-progress@1.0.8/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/time-progress@1.0.8/dist/index.js"></script>
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






