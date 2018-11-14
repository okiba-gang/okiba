# Okiba

[![Build Status](https://semaphoreci.com/api/v1/okiba-gang/okiba/branches/master/shields_badge.svg)](https://semaphoreci.com/okiba-gang/okiba)
[![Maintainability](https://api.codeclimate.com/v1/badges/29a8700f940f1019e52e/maintainability)](https://codeclimate.com/github/okiba-gang/okiba/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/29a8700f940f1019e52e/test_coverage)](https://codeclimate.com/github/okiba-gang/okiba/test_coverage)

Sharp collection of tools for web development, created with performance in mind.  🔪🔪

Our primary concerns are: **maximum FPS** and **minimum bundle size** 🤓

That's why you can import every bit separately, so you'll bring the minimum set of what you really need into your bundle.

Aiming to achieve affidability and affordability, we try our best to keep our tools sharp with 100% test coverage and A maintainability.

If you're into buzzwords then Okiba is:
> **tree-shake friendly**, **DRY**, **dependency-free**, altough **internally cross-dependent**, built as a **lerna monorepo**

## Full API List:


### [arrays](https://github.com/okiba-gang/okiba/tree/master/packages/arrays)

  
  
**\+ [`arrayOrOne`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#arrayoronearrayLike)**
  
**\+ [`castArray`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#castarraycastable)**
  
  

### [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component)

  
  
**\+ [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/component#componentargs-el-ui-components-options)**
  
**\+ [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#ondestroy)**
  
**\+ [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#destroy)**
  
  

### [dom](https://github.com/okiba-gang/okiba/tree/master/packages/dom)

  
  
**\+ [`qs`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsselector-element)**
  
**\+ [`qsa`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsaselector-element)**
  
**\+ [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#onwindow-type-handler)**
  
**\+ [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#offwindow-type-handler)**
  
**\+ [`eventCoords`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#eventcoordsDOM)**
  
  

### [DragEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter)

  
  
**\+ [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#dragemitterel)**
  
**\+ [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#destroy)**
  
  

### [easings](https://github.com/okiba-gang/okiba/tree/master/packages/easings)

  
  
  

### [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter)

  
  
**\+ [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#onname-handler)**
  
**\+ [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#offname-handler)**
  
**\+ [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data)**
  
  

### [EventedComponent](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component)

  
  
**\+ [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#on)**
  
**\+ [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#off)**
  
**\+ [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#emit)**
  
  

### [math](https://github.com/okiba-gang/okiba/tree/master/packages/math)

  
  
**\+ [`lerp`](https://github.com/okiba-gang/okiba/tree/master/packages/math#lerpmin-max-fraction)**
  
**\+ [`cap`](https://github.com/okiba-gang/okiba/tree/master/packages/math#capn-min-max)**
  
**\+ [`distance`](https://github.com/okiba-gang/okiba/tree/master/packages/math#distancex1-x2)**
  
**\+ [`round`](https://github.com/okiba-gang/okiba/tree/master/packages/math#roundn-p)**
  
  

### [PoolSystem](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system)

  
  
**\+ [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#poolsystemparent-createEl)**
  
**\+ [`ensure`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#ensuresize)**
  
**\+ [`get`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#get)**
  
**\+ [`free`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#freeElement)**
  
**\+ [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#destroy)**
  
  

### [ResourceLoader](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader)

  
  
**\+ [`load`](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader#loadurl)**
  
  

### [search](https://github.com/okiba-gang/okiba/tree/master/packages/search)

  
  
**\+ [`binarySearch`](https://github.com/okiba-gang/okiba/tree/master/packages/search#binarysearchdata-target-start-end-prop)**
  
  

### [TimeProgress](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress)

  
  
**\+ [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#timeprogressduration)**
  
**\+ [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#update)**
  
**\+ [`reset`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reset)**
  
**\+ [`setProgress`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setprogressprogress)**
  
**\+ [`setDirection`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setdirectiondirection)**
  
**\+ [`reverse`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reverse)**
  
  

### [WorkerProxy](https://github.com/okiba-gang/okiba/tree/master/packages/worker-proxy)

  
  
  

### [worker-utils](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils)

  
  
**\+ [`createWorker`](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils#createworkerscript)**
  
  


