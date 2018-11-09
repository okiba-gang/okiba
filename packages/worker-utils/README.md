

# Okiba // worker-utils
Set of useful functions to ease WebWorkers development




### Installation
```
npm i --save @okiba/
```




## createWorker(script)


Creates a web worker starting from a function







#### Arguments


##### + `script`: `function`

function to be included in the worker script, will be self-invoked





#### Returns

`WebWorker` worker running the passed script