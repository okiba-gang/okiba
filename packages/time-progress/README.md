

# Okiba // TimeProgress
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
```
npm i --save @okiba/time-progress
```




## constructor(duration)









#### Arguments


#### + `duration`: | _optional_ - _default_: `400`

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


#### + `progress`: `Number`

[description]






## goForward()


Sets the direction to go forward in time (progress goes from 0 to 1)







## goBackwards()


Sets the direction to go backwards in time (progress goes from 0 to 1)







## reverse()


Reverses the direction in time






