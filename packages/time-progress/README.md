# Okiba / TimeProgress


```javascript

const timeProgress = new TimeProgress()

function update(){
  const progress = timeProgress.update()
  if(progress < 1){
    requestAnimationFrame(update)
  }
}

requestAnimationFrame(update)

```