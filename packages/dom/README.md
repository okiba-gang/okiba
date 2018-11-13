

# Okiba // dom
Utilities to work with dom elements and selectors




### Installation
```
npm i --save @okiba/dom
```




## qs(selector, element)


Selects a DOM Element, scoped to element






```javascript
import {qs} from '@akiba/dom'
const pear = qs('.pear')
console.log(pear) // [div.pear]
```




#### Arguments


##### + `selector`: `String`

DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)


##### + `element`: `Element` | _optional_ - _default_: `document`

DOM Element to scope the selection query, only childs of that element will be tageted





#### Returns

`Element` A DOM Element matching `selector`
## qsa(selector, element)


Selects an array of DOM Elements, scoped to element






```javascript
import {qsa} from '@akiba/dom'
const fruits = qsa('.fruit')
console.log(fruits) // [div.fruit, div.fruit]
```




#### Arguments


##### + `selector`: `String`

DOM Selector (tag, class, id, anything that can be passed to `querySelector` API)


##### + `element`: `Element` | _optional_ - _default_: `document`

DOM Element to scope the selection query, only childs of that element will be tageted





#### Returns

`Array.<Element>` An array of DOM elements matching `selector`
## on(window, type, handler)


Attaches an event listener to a DOM Element, or an array of.






```javascript
import {qsa, on} from '@okiba/dom'
const buttons = qsa('.button')

on(buttons, 'click', onClick)
on(buttons, ['mouseenter', 'mouseleve'], onMouseChange)

// adds `onClick` to 'click' and `onMouseChange` to both 'mouseenter' and 'mouseleave'
on(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
```




#### Arguments


##### + `window`: `Element` or  `Array.<Element>` | _optional_

source
the element which will trigger the event


##### + `type`: `String` or  `Array.<String>`

the event name to bind. Or an array of


##### + `handler`: `function` or  `Array.<function()>`

the callback to be fired at the event. If an array is supplied the handlers will be bound in order,
if there are less handlers than event types, the last handler is bound to all remaining events.





#### Returns

`Boolean` Success of the binding
## off(window, type, handler)


Detached an event listener from a DOM Element, or an array of.






```javascript
import {qs, off} from '@okiba/dom'
const button = qs('.button')

button.addEventListener('click', onButtonClick)
// or okiba's `on` on(button, 'click')

off(button, 'click', onButtonClick)

// removes `onMouseChange` from both 'mouseenter' and 'mouseleave'
off(buttons, ['mouseenter', 'mouseleve'], onMouseChange)

// removes `onClick` from 'click' and `onMouseChange` from both 'mouseenter' and 'mouseleave'
off(buttons, ['click', mouseenter', 'mouseleve'], [onClick, onMouseChange])
```




#### Arguments


##### + `window`: `Element` or  `Array.<Element>` | _optional_

source
Element which will trigger the event


##### + `type`: `String` or  `Array.<String>`

Event name to unbind. Or an array of


##### + `handler`: `function` or  `Array.<function()>`

Callback bound to the event. If an array is supplied the handlers will be unbound in order,
if there are less handlers than event types, the last handler is unbound from all remaining events.





#### Returns

`Boolean` Success of the unbinding
## eventCoords(DOM)


Read mouse and touch position in the same way






```javascript
import {eventCoords, on} from '@okiba/dom'
on(window, ['mousemove', 'touchmove'], onMove)

function onMove(e){
 const coords = eventCoords(e)
 console.log(coords)
}
```




#### Arguments


##### + `DOM`: `Event`

Event





#### Returns

`Object` Event position coordinates (clientX and ClientY)