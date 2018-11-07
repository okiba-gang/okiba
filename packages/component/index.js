import {qsa} from '@okiba/dom'

/**
  * Accepted arguments:
  * - `el`: DOM element
  * - `ui`: Hash where key is name, and value is DOM selector
  * - `components`: Hash where key is the name, and value is an hash containing:
  *   - `selector`: DOM selector
  *   - `type`: Component class to instantiate
  *   - `options`: Optional hash passed to the class constructor
  */
class Component {
  constructor(el, ui, components, options) {
    this.el = el

    if (options) {
      this.options = options
    }

    if (ui) {
      this.ui = Object.keys(ui).reduce(
        (hash, key) => {
          const els = qsa(ui[key], this.el)

          if (els) {
            hash[key] = els
          } else {
            console.warn(`[!!] [Component] Cant't find UI element for selector: ${ui[key]}`)
          }

          return hash
        }, {}
      )
    }

    if (components) {
      this.components = Object.keys(args.components).reduce(
        (hash, key) => {
          const {type, selector, options} = args.components[key]
          const els = qsa(args.ui[key], this.el)

          if (els) {
            hash[key] = els.map(n => new type({el: n, options}))
          } else {
            console.warn(`[!!] [Component] Cant't find node with selector ${selector} for sub-component: ${key}`)
          }

          return hash
        }, {}
      )
    }
  }

  destroy() {
    if (this.onDestroy) {
      this.onDestroy()
    }

    Object.keys(this.components)
      .forEach(key => this.components[key].forEach(
        c => c.destroy()
      ))
  }
}


export default Component
