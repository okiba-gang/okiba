# Okiba




## [arrays](https://github.com/okiba-gang/okiba/tree/master/packages/)

Array utils for okiba js
  
  
**\+ [`arrayOrOne`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#arrayOrOne)**

> Return the first element if it only contains one
  
**\+ [`castArray`](https://github.com/okiba-gang/okiba/tree/master/packages/arrays#castArray)**

> Cast an array-like object or single element to Array
  
  

## [component](https://github.com/okiba-gang/okiba/tree/master/packages/)

Manages a DOM component, binds UI and recursively binds child components.
Can be extended or instantiated
  
  
**\+ [`constructor`](https://github.com/okiba-gang/okiba/tree/master/packages/component#Component)**

> 
  
**\+ [`onDestroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#onDestroy)**

> Virtual method, needs to be overridden
It's the place to call cleanup functions as it will
be called when your component is destroyed
  
**\+ [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/component#destroy)**

> Should not be overridden, will call `onDestroy`
and forward destruction to all child components
  
  

## [dom](https://github.com/okiba-gang/okiba/tree/master/packages/)

Utilities to work with dom elements and selectors
  
  
**\+ [`qsa`](https://github.com/okiba-gang/okiba/tree/master/packages/dom#qsa)**

> Selects an array of DOM elements, scoped to element
  
  

## [drag-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/)

Emits drag events for all common pointers kinds (touch & mouse)
  
  
**\+ [`DragEmitter`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#DragEmitter)**

> 
  
**\+ [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/drag-emitter#destroy)**

> Unbinds events from the element and deletes the reference.
To be called when the instance is not needed anymore for cleanup.
  
  

## [easings](https://github.com/okiba-gang/okiba/tree/master/packages/)

Collection of easings to alter a value
  
  
**\+ [`linear`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#linear)**

> Ease linear
  
**\+ [`easeInQuad`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInQuad)**

> Ease In Quad
  
**\+ [`easeOutQuad`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeOutQuad)**

> Ease Out Quad
  
**\+ [`easeInOutQuad`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInOutQuad)**

> Ease InOut Quad
  
**\+ [`easeInCubic`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInCubic)**

> Ease In Cubic
  
**\+ [`easeOutCubic`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeOutCubic)**

> Ease Out Cubic
  
**\+ [`easeInOutCubic`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInOutCubic)**

> Ease InOut Cubic
  
**\+ [`easeInQuart`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInQuart)**

> Ease In Quart
  
**\+ [`easeOutQuart`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeOutQuart)**

> Ease Out Quart
  
**\+ [`easeInOutQuart`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInOutQuart)**

> Ease InOut Quart
  
**\+ [`easeInQuint`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInQuint)**

> Ease In Quint
  
**\+ [`easeOutQuint`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeOutQuint)**

> Ease Out Quint
  
**\+ [`easeInOutQuint`](https://github.com/okiba-gang/okiba/tree/master/packages/easings#easeInOutQuint)**

> Ease InOut Quint
  
  

## [eslint-config]()


  
  
**\+ [`"no-shadow"`](https://github.com/okiba-gang/okiba/tree/master/packages/eslint-config#"no-shadow")**

> Variables
  
**\+ [`"no-cond-assign"`](https://github.com/okiba-gang/okiba/tree/master/packages/eslint-config#"no-cond-assign")**

> Possible errors
  
**\+ [`"consistent-return"`](https://github.com/okiba-gang/okiba/tree/master/packages/eslint-config#"consistent-return")**

> Best practices
  
**\+ [`indent`](https://github.com/okiba-gang/okiba/tree/master/packages/eslint-config#indent)**

> Style
  
  

## [event-emitter](https://github.com/okiba-gang/okiba/tree/master/packages/)

Emits events that can be listened and unlistened to
  
  
**\+ [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#on)**

> Sets an event listener for an event type
  
**\+ [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#off)**

> Unsets an event listener for an event type
  
**\+ [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter#emit)**

> Triggers an event with optional data attached.
All listeners will be triggered in registration order.
Custom data will be passed to them as a parameter
  
  

## [evented-component](https://github.com/okiba-gang/okiba/tree/master/packages/)

A component that has events.
Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
inerithing both's method sets.
  
  
**\+ [`on`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#on)**

> 
  
**\+ [`off`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#off)**

> 
  
**\+ [`emit`](https://github.com/okiba-gang/okiba/tree/master/packages/evented-component#emit)**

> 
  
  

## [math](https://github.com/okiba-gang/okiba/tree/master/packages/)

Collection of math functions
  
  
**\+ [`lerp`](https://github.com/okiba-gang/okiba/tree/master/packages/math#lerp)**

> Linear interpolation between a two values
  
**\+ [`cap`](https://github.com/okiba-gang/okiba/tree/master/packages/math#cap)**

> Limit a value between a min and a max (inclusive)
  
**\+ [`distance`](https://github.com/okiba-gang/okiba/tree/master/packages/math#distance)**

> Distance between two numbers
  
**\+ [`round`](https://github.com/okiba-gang/okiba/tree/master/packages/math#round)**

> Round a number with given precision, with memoized powers
  
  

## [pool-system](https://github.com/okiba-gang/okiba/tree/master/packages/)

Class to manage dinamically a pool of system
  
  
**\+ [`module:Okiba / pool-system`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#module:Okiba / pool-system)**

> Create an istance of PoolSystem

```javascript
import PoolSystem from '@okiba/pool-system'

const container = document.querySelector('#container')

function createEl(){
 return document.createElement('img');
}

const pool = new PoolSystem(container, createEl)

```
  
**\+ [`ensure`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#ensure)**

> Function to ensure a minimum pool size.
Skipped If actual size is bigger that the passed size,
otherwise create new element to reach the new size

```javascript
pool.ensure(5)

```
  
**\+ [`get`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#get)**

> Return the first free element from pool.
If there isn't free element, the pool size is increased and a new element is created.
This behaviour provide you a dinamic pool system that create elements only if necessary
  
**\+ [`free`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#free)**

> Set an element like free
  
**\+ [`destroy`](https://github.com/okiba-gang/okiba/tree/master/packages/pool-system#destroy)**

> Destroy all reference from instance
  
  

## [resource-loader](https://github.com/okiba-gang/okiba/tree/master/packages/)

Manages loading of resources trough fetch to boost caching.
Transparently relies on a WebWorker if possible to load on a separate thread.
  
  
**\+ [`load`](https://github.com/okiba-gang/okiba/tree/master/packages/resource-loader#load)**

> Initiates loading of a resource at a given URL
  
  

## [search](https://github.com/okiba-gang/okiba/tree/master/packages/)

Search utilities
  
  
**\+ [`binarySearch`](https://github.com/okiba-gang/okiba/tree/master/packages/search#binarySearch)**

> Binary searches an array
  
  

## [time-progress](https://github.com/okiba-gang/okiba/tree/master/packages/)

Maps progress ovrer time, normalized between 0 and 1
  
  
**\+ [`TimeProgress`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#TimeProgress)**

> 
  
**\+ [`update`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#update)**

> Has to be called at every loop or whenever you want get an updated progress
  
**\+ [`reset`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reset)**

> Sets the timer back to zero
  
**\+ [`setProgress`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setProgress)**

> Forces a certain progress, reflected on the time
  
**\+ [`setDirection`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#setDirection)**

> Sets a direction in time.
`1` is forward in time (progress goes from 0 to 1)
`-1` is backwards in time (progress goes from 1 to 0)
  
**\+ [`reverse`](https://github.com/okiba-gang/okiba/tree/master/packages/time-progress#reverse)**

> Reverses the direction in time
  
  

## [worker-proxy]()


  
  
  

## [worker-utils](https://github.com/okiba-gang/okiba/tree/master/packages/)

Set of useful functions to ease WebWorkers development
  
  
**\+ [`createWorker`](https://github.com/okiba-gang/okiba/tree/master/packages/worker-utils#createWorker)**

> Creates a web worker starting from a function
  
  


