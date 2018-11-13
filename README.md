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
---

### [component](https://github.com/okiba-gang/okiba/tree/master/packages/component)
Manages a DOM component, binds UI and recursively binds child components.
Can be extended or instantiated
---

### [dom](https://github.com/okiba-gang/okiba/tree/master/packages/dom)
Utilities to work with dom elements and selectors
---

### [drag-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter)
Emits drag events for all common pointers kinds (touch & mouse)
---

### [easings](https://github.com/okiba-gang/okiba/tree/master/packages/easings)
Collection of easings to alter a value
---

### [event-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter)
Emits events that can be listened and unlistened to
---

### [evented-component](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component)
A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.
---

### [math](https://github.com/okiba-gang/okiba/tree/master/packages/math)
Collection of math functions
---

### [pool-system](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system)
Manages a dinamically grown pool of DOM Elements
import PoolSystem from '@okiba/pool-system'
---

### [resource-loader](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader)
Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.
---

### [search](https://github.com/okiba-gang/okiba/tree/master/packages/search)
Search utilities
---

### [time-progress](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress)
Maps progress ovrer time, normalized between 0 and 1
---

### [worker-proxy](https://github.com/okiba-gang/okiba/tree/master/packages/worker-proxy)
Transparent proxying of a class of yours
---

### [worker-utils](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils)
Set of useful functions to ease WebWorkers development



