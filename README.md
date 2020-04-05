# Okiba Core

[![Tests Status](https://github.com/okiba-gang/okiba/workflows/Tests/badge.svg)](https://github.com/okiba-gang/okiba/actions?workflow=Tests)
[![Maintainability](https://api.codeclimate.com/v1/badges/29a8700f940f1019e52e/maintainability)](https://codeclimate.com/github/okiba-gang/okiba/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/29a8700f940f1019e52e/test_coverage)](https://codeclimate.com/github/okiba-gang/okiba/test_coverage)
🏅

Sharp collection of tools for front-end development, created with performance in mind.  🗡

Our primary concerns are: **maximum FPS** and **minimum bundle size** 🚀

You can visualize it as a bag full of **ninja tools** for you to pick and use to tackle your **front-end challenges**.

______


#### Okiba **is**:

##### A set of tools you can use separately.

It is meant to **level-up** and **ease-in** your web-development routines.

It's designed so that you can drop-in as much or as less you want, by importing just what you actually use, up to a single function level, so that your final bundle will stay slim.

It is always evolving and open to contributons from OSS peers.

#### Okiba **is not**:

##### A library, framework or language.

It is not meant to replace the tools you already have, but rather offer battle-tested solutions to common routine tasks; sometimes it offers a cheaper alternative.

It does not impose choiches and integrates smoothly with frameworks you already use.

______

We strive to achieve **affidability** and **affordability**.

#### Our granularity is *fine*

###### We `export` single units that you can `import` separately. ✨

This way **tree-shake** and **uglification** can work at their best.

Being **dependency-free** you always know what you're using and can look it up in our API, no surpises.


#### Our code is *DRY* and *minimal*

###### If something is common we abstract it away. 💡

We don't put something in until it is actually needed.

We strictly check for duplication and complexity, and take charge of some development pain in order to keep bundle size small.

#### Our seriousness level is *high*

###### Our quality checks are automated. 🤖

Metrics matter, so our CI tools help us by enforcing **100% coverage** and **A maintainability**.

No line makes it into `master` if the overall code quality gets degraded.

_We could state that our API is 100% documented, but we still have no tests in place to back this metric up... so we don't 🤡_

______

## Installation

You can grab all Okiba Core packages by using npx installer:
```bash
npx @okiba/core
```

## Usage

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

## Full API List:


#### [arrays](https://github.com/okiba-gang/okiba/tree/master/packages/arrays)
Array utils for okiba js
###### [`arrayOrOne`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#arrayoronearrayLike), [`castArray`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#castarraycastable), [`spliceOne`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#spliceonearray-index)

---


#### [class-utils](https://github.com/okiba-gang/okiba/tree/master/packages/class-utils)
Utilities that operate on classes
###### [`mixin`](https://github.com/okiba-gang/okiba/tree/master/packages/class-utils#mixinBaseClass-context-Arguments)

---


#### [component](https://github.com/okiba-gang/okiba/tree/master/packages/component)
Manages a DOM component, binds UI and recursively binds child components.
Can be extended or instantiated
###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/component#componentargs-el-ui-components-options), [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#ondestroy), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#destroy)

---


#### [dom](https://github.com/okiba-gang/okiba/tree/master/packages/dom)
Utilities to work with dom elements and selectors
###### [`byId`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#byidid), [`qs`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsselector-element), [`qsa`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsaselector-element), [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#onwindow-type-handler), [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#offwindow-type-handler), [`eventCoords`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#eventcoordsDOM), [`offset`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#offsetel), [`getElements`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#getelementstarget), [`matches`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#matchesel-selectors-testAncestors), [`isChildOf`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#ischildofel-target), [`delegate`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#delegatetarget-event-callback-options-context), [`createCustomEvent`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#createcustomeventtype-options)

---


#### [drag-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter)
Emits drag events for all common pointers kinds (touch & mouse)
###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#dragemitterel), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#destroy)

---


#### [easings](https://github.com/okiba-gang/okiba/tree/master/packages/easings)
Collection of easings to alter a value
###### 

---


#### [event-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter)
Emits events that can be listened and unlistened to
###### [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#onname-handler), [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#offname-handler), [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emitname-data), [`hasListeners`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#haslistenerstype), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#destroy)

---


#### [evented-component](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component)
A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.
###### [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#on), [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#off), [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#emit), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#destroy)

---


#### [functions](https://github.com/okiba-gang/okiba/tree/master/packages/functions)
A collection of contextless utility functions
###### [`debounce`](https://github.com/okiba-gang/okiba/tree/master/packages/functions#debouncecallback-latency-timer)

---


#### [math](https://github.com/okiba-gang/okiba/tree/master/packages/math)
Collection of math functions
###### [`lerp`](https://github.com/okiba-gang/okiba/tree/master/packages/math#lerpmin-max-fraction), [`map`](https://github.com/okiba-gang/okiba/tree/master/packages/math#mapn-min1-max1-min2-max2), [`cap`](https://github.com/okiba-gang/okiba/tree/master/packages/math#capn-min-max), [`distance`](https://github.com/okiba-gang/okiba/tree/master/packages/math#distancex1-x2), [`round`](https://github.com/okiba-gang/okiba/tree/master/packages/math#roundn-p)

---


#### [pool-system](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system)
Manages a dinamically grown pool of DOM Elements
import PoolSystem from '@okiba/pool-system'
###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#poolsystemparent-createEl), [`ensure`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#ensuresize), [`get`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#get), [`free`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#freeElement), [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#destroy)

---


#### [resource-loader](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader)
Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.
###### [`load`](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader#loadurl)

---


#### [search](https://github.com/okiba-gang/okiba/tree/master/packages/search)
Search utilities
###### [`binarySearch`](https://github.com/okiba-gang/okiba/tree/master/packages/search#binarysearchdata-target-start-end-prop)

---


#### [store](https://github.com/okiba-gang/okiba/tree/master/packages/store)
A store module to implement state management.
###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/store#module:storeinitialState), [`set`](https://github.com/okiba-gang/okiba/tree/master/packages/store#setkey-value), [`get`](https://github.com/okiba-gang/okiba/tree/master/packages/store#getkey), [`getState`](https://github.com/okiba-gang/okiba/tree/master/packages/store#getstate), [`setState`](https://github.com/okiba-gang/okiba/tree/master/packages/store#setstatestate), [`reset`](https://github.com/okiba-gang/okiba/tree/master/packages/store#reset), [`subscribe`](https://github.com/okiba-gang/okiba/tree/master/packages/store#subscribekey-callback), [`unsubscribe`](https://github.com/okiba-gang/okiba/tree/master/packages/store#unsubscribekey-callback)

---


#### [time-progress](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress)
Maps progress ovrer time, normalized between 0 and 1
###### [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#timeprogressduration), [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#update), [`reset`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reset), [`setProgress`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setprogressprogress), [`setDirection`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setdirectiondirection), [`reverse`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reverse)

---


#### [worker-utils](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils)
Set of useful functions to ease WebWorkers development
###### [`createWorker`](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils#createworkerfn)






