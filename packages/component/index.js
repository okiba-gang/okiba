/**
 * @module Component
 * Manages a DOM component, binds UI and recursively binds child components
 * @example
 * new Component(el, ui, component, options)
 */
import {qsa} from '@okiba/dom'

/**
 * Accepts an hash containing UI and component props
 * which will then be bound
 * @param   {Element}   el       DOM Element to be bound
 * @param   {Object}    [ui]
 * UI hash where keys are name and values are selectors
 * ```javascript
 * { buttonNext: '#buttonNext' }
 * ```
 * Becomes:
 * ```javascript
 * this.ui.buttonNext
 * ```
 * @param   {Object}    [components]
 * Components hash for childs to bind, keys are names and values are component initialization props:
 * ```javascript
 * {
 *   slider: {
 *     // Matched using [qs]('https://github/okiba-gang/okiba/packages/dom'), scoped to the current component element
 *     selector: '.domSelector',
 *     // Component class, extending Okiba Component
 *     type: Slider,
 *     // Options hash
 *     options: {fullScreen: true}
 *   }
 * }
 * ```
 *
 * Becomes:
 * ```javascript
 * this.components.slider
 * ```
 * @param   {Object}    [options]         Custom options passed to the component
 *
 * @example
 * import {qs} from '@okiba/dom'
 * import {Slider} from './components/Slider'
 *
 * const app = new Component(
 *   qs('#app'),
 *   { buttonNext: '#buttonNext' },
 *   {
 *     slider: {
 *       selector: '.slider',
 *       type: Slider,
 *       options: { fullScreen: true }
 *     }
 *   },
 * })
 *
 *
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
      this.components = Object.keys(components).reduce(
        (hash, key) => {
          const {type, selector, options} = components[key]
          const els = qsa(ui[key], this.el)

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

  /**
   * Virtual method, needs to be overridden
   * It's the place to call cleanup functions as it will
   * be called when your component is destroyed
   */
  onDestroy() {}

  /**
   * Should not be overridden, will call `onDestroy`
   * and forward destruction to all child components
   */
  destroy() {
    Object.keys(this.components)
      .forEach(key => this.components[key].forEach(
        c => c.destroy()
      ))

    if (this.onDestroy) {
      this.onDestroy()
    }
  }
}

export default Component
