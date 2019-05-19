

# Okiba / math
Collection of math functions




### Installation

You can grab it as an `npm` package 
```bash
npm i --save @okiba/math
```

Or use it in the browser
```html
<!-- Minified -->
<script src="https://unpkg.com/@okiba/math@1.0.3/dist/index.min.js"></script>

<!-- Full -->
<script src="https://unpkg.com/@okiba/math@1.0.3/dist/index.js"></script>
```




## lerp(min, max, fraction)


Linear interpolation between a two values






```javascript
import {lerp} from '@okiba/math'
const xPosition = lerp(0, 100, 0.5)
console.log(xPosition) // 50
```




#### Arguments


##### + `min`: `Number`

Minimum possible value


##### + `max`: `Number`

Maximum possible value


##### + `fraction`: `Number`

Current position





#### Returns

`Number` The interpolated value
## cap(n, min, max)


Limit a value between a min and a max (inclusive)






```javascript
import {cap} from '@okiba/math'
let progress = 1.1
progress = cap(0, 1, progress)
console.log(progress) // 1
```




#### Arguments


##### + `n`: `Number`

Value to cap


##### + `min`: `Number`

Minimum possible value


##### + `max`: `Number`

Maximum possible value





#### Returns

`Number` Capped value
## distance(x1, x2)


Distance between two numbers






```javascript
import {distance} from '@okiba/math'
const x1 = -100, x2 = 100
const d = distance(x1, x2)
console.log(d) // 200
```




#### Arguments


##### + `x1`: `Number`

First number


##### + `x2`: `Number`

Second number





#### Returns

`Number` Distance between the values
## round(n, p)


Round a number with given precision, with memoized powers






```javascript
import {round} from '@okiba/math'
const rounded = distance(1.111111, 3)
console.log(rounded) // 1.111
```




#### Arguments


##### + `n`: `Number`

Number to round


##### + `p`: `Number` | _optional_ - _default_: `3`

Precision of digits to leave





#### Returns

`Number` Rounded number