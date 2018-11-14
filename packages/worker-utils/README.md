

# Okiba // worker-utils
Set of useful functions to ease WebWorkers development




### Installation
```
npm i --save @okiba/worker-utils
```




## createWorker(fn)


Creates a web worker starting from a function







#### Arguments


##### + `fn`: `function`

function to be included in the worker script, will be self-invoked





#### Returns

`WebWorker` worker running the passed script