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
Array utils for okiba js

###### [`arrayOrOne`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#arrayoronearrayLike), [`castArray`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#castarraycastable)
---

### [component](https://github.com/okiba-gang/okiba/tree/master/packages/component)
Manages a DOM component, binds UI and recursively binds child components.
Can be extended or instantiated

###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/component#componentargs-el-ui-components-options), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#ondestroy), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#destroy)
---

### [dom](https://github.com/okiba-gang/okiba/tree/master/packages/dom)
Utilities to work with dom elements and selectors

###### [`qs`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsselector-element), [`qsa`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsaselector-element), [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#onwindow-type-handler), [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#offwindow-type-handler), [`eventCoords`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#eventcoordsDOM)
---

### [drag-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter)
Emits drag events for all common pointers kinds (touch & mouse)

###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#dragemitterel), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#destroy)
---

### [easings](https://github.com/okiba-gang/okiba/tree/master/packages/easings)
Collection of easings to alter a value

###### 
---

### [event-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter)
Emits events that can be listened and unlistened to

###### [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#onname-handler), [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#offname-handler), [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#destroy)
---

### [evented-component](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component)
A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.

###### [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#on), [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#off), [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#emit), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#destroy)
---

### [math](https://github.com/okiba-gang/okiba/tree/master/packages/math)
Collection of math functions

###### [`lerp`](https://github.com/okiba-gang/okiba/tree/master/packages/math#lerpmin-max-fraction), [`cap`](https://github.com/okiba-gang/okiba/tree/master/packages/math#capn-min-max), [`distance`](https://github.com/okiba-gang/okiba/tree/master/packages/math#distancex1-x2), [`round`](https://github.com/okiba-gang/okiba/tree/master/packages/math#roundn-p)
---

### [pool-system](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system)
Manages a dinamically grown pool of DOM Elements
import PoolSystem from '@okiba/pool-system'

###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#poolsystemparent-createEl), [`ensure`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#ensuresize), [`get`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#get), [`free`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#freeElement), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#destroy)
---

### [resource-loader](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader)
Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.

###### [`load`](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader#loadurl)
---

### [search](https://github.com/okiba-gang/okiba/tree/master/packages/search)
Search utilities

###### [`binarySearch`](https://github.com/okiba-gang/okiba/tree/master/packages/search#binarysearchdata-target-start-end-prop)
---

### [time-progress](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress)
Maps progress ovrer time, normalized between 0 and 1

###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#timeprogressduration), [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#update), [`reset`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reset), [`setProgress`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setprogressprogress), [`setDirection`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setdirectiondirection), [`reverse`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reverse)
---

### [worker-utils](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils)
Set of useful functions to ease WebWorkers development

###### [`createWorker`](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils#createworkerfn)



