import {mixin} from '@okiba/class-utils'

it('should mix fields and props of classes into a context', done => {
  class A {
    constructor(a) {
      this.a = a
    }

    getA() {
      return this.a
    }
  }

  class B {
    constructor(b) {
      this.b = b
    }

    getB() {
      return this.b
    }
  }

  class C {
    constructor(a, b) {
      mixin(A, this, a)
      mixin(B, this, b)
    }
  }


  const c = new C('a', 'b')

  expect(c).toMatchObject({a: 'a', b: 'b'})
  expect(c.getA()).toBe('a')
  expect(c.getB()).toBe('b')

  done()
})
