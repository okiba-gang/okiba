import Component from './'
import { JSDOM } from 'jsdom'


const { window } = (new JSDOM(`<div class="component">
<div class="ui-element"></div>
<div class="inner-component"></div>
<div class="inner-component-multiple"></div>
<div class="inner-component-multiple"></div>
</div>`))

const { document } = window

global.HTMLElement = window.HTMLElement
global.NodeList = window.NodeList
global.Node = window.Node
global.DOMTokenList = window.DOMTokenList
global.HTMLCollection = window.HTMLCollection

class InnerComponent extends Component {
  onDestroy() {
    this.isDestroyed = true
  }
}

class GhostComponent extends Component {}

class InnerComponentMultiple extends Component {}

const app = new Component({
  el: document.querySelector('.component'),
  ui: {element: '.ui-element'},
  components: {
    inner: {selector: '.inner-component', type: InnerComponent, options: {innerTestOption: true}},
    innerMultiple: {selector: '.inner-component-multiple', type: InnerComponentMultiple},
  },
  options: {
    testOption: true
  }
})

app.onDestroy = function() {
  this.isDestroyed = true
}

test('Component should have correct el', done => {
  expect(app.el).toEqual(document.querySelector('.component'))
  done()
})

test('Component should have correct ui', done => {
  expect(app.ui.element).toEqual(document.querySelector('.ui-element'))
  done()
})

test('GhostComponent should be attached on the same el of the parent Component', done => {
  const testComponent = new Component({
    el: document.querySelector('.component'),
    components: {
      ghostComponent: {
        ghost: true,
        type: GhostComponent
      }
    }
  })

  expect(testComponent.components.ghostComponent.el).toEqual(document.querySelector('.component'))
  done()
})

test('Component should throw if an ui element cannot be found', done => {
  function createMissingUIComponent() {
    return new Component({
      el: document.querySelector('.component'),
      ui: {
        missingEl: {selector: '.missing-el', required: true}
      }
    })
  }

  expect(createMissingUIComponent).toThrow()
  done()
})

test('Component should throw if sub-components declaration is wrong', done => {
  function createMissingComponentsComponent() {
    return new Component({
      el: document.querySelector('.component'),
      components: {selector: '.inner-component-multiple', type: InnerComponentMultiple}
    })
  }
  expect(createMissingComponentsComponent).toThrow()
  done()
})

test('Component should throw if a component element cannot be found and is required', done => {
  function createMissingComponentsComponent() {
    return new Component({
      el: document.querySelector('.component'),
      components: {
        missing: {selector: '.missing-el', type: InnerComponent, required: true}
      }
    })
  }
  expect(createMissingComponentsComponent).toThrow()
  done()
})

test('Component should not throw if a component element cannot be found and doesn\'t have required parameter', done => {
  function createMissingComponentsComponent() {
    return new Component({
      el: document.querySelector('.component'),
      components: {
        missing: {selector: '.missing-el', type: InnerComponent}
      }
    })
  }
  expect(createMissingComponentsComponent).not.toThrow()
  done()
})

test('Component should have this.ui[key] as single element when asArray is false (default)', done => {
  const testComponent = new Component({
    el: document.querySelector('.component'),
    ui: {
      element: { selector: '.ui-element' },
    }
  })
  expect(testComponent.ui.element instanceof Node)
  done()
})

test('Component should have this.ui[key] as an Array when asArray is true', done => {
  const testComponent = new Component({
    el: document.querySelector('.component'),
    ui: {
      element: { selector: '.ui-element', asArray: true },
    }
  })
  expect(Array.isArray(testComponent.ui.element))
  done()
})


test('Component should have this.components[key] as single element when asArray is false (default)', done => {
  const testComponent = new Component({
    el: document.querySelector('.component'),
    components: {
      inner: {selector: '.inner-component', type: InnerComponent}
    }
  })
  expect(testComponent.components.inner instanceof InnerComponent)
  done()
})

test('Component should have this.components[key] as an Array when asArray is true', done => {
  const testComponent = new Component({
    el: document.querySelector('.component'),
    components: {
      inner: {selector: '.inner-component', type: InnerComponent, asArray: true}
    }
  })
  expect(Array.isArray(testComponent.components.inner))
  done()
})

test('Component should have correct components', done => {
  expect(app.components.inner instanceof InnerComponent).toBe(true)
  done()
})

test('Component should have options', done => {
  expect(app.options).toEqual({testOption: true})
  expect(app.components.inner.options).toEqual({innerTestOption: true})
  done()
})

test('Component destroy should chain-call `onDestroy`', done => {
  app.destroy()
  expect(app.isDestroyed).toBe(true)
  expect(app.components).toEqual(null)
  done()
})

