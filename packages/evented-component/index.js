/**
 * @module EventedComponent
 * A component that has events.
 * Extends [Component](https://github.com/okiba-gang/okiba/tree/master/packages/component) and
 * composes with [EventEmitter](https://github.com/okiba-gang/okiba/tree/master/packages/event-emitter),
 * inerithing both's method sets.
 *
 * @example
 * // FetchButton.js
 * import EventedComponent from '@okiba/EventedComponent'
 *
 * class FetchButton extends EventedComponent {
 *   constructor(args) {
 *     super(args)
 *
 *     this.onClick = this.onClick.bind(this)
 *     this.el.addEventListener('click', this.onClick)
 *   }
 *
 *   onClick() {
 *     fetch('/api')
 *       .then(data => this.emit('update', data))
 *   }
 *
 *   onDestroy() {
 *     this.el.removeEventListener('click', this.onClick)
 *   }
 * }
 *
 * // UIPiece.js
 * import Component from '@okiba/Component'
 *
 * const components = {
 *   fetchButton: {selector: '.fetch-button', type: FetchButton}
 * }
 *
 * class UIPiece extends Component {
 *   constructor({el, options}) {
 *     super({el, ui, components, options})
 *
 *     this.components.fetchButton.on(
 *       'update', this.update
 *     )
 *   }
 *
 *   onDestroy() {
 *     this.components.fetchButton.off(
 *       'update', this.update
 *     )
 *   }
 * }
 */
import Component from '@okiba/component'
import EventEmitter from '@okiba/event-emitter'


export default class EventedComponent extends Component {
  constructor(args) {
    super(args)
    this.emitter = new EventEmitter()
    /**
     * @function on
     * @see {"EventEmitter": "event-emitter#on"}
     */
    this.on = this.emitter.on.bind(this.emitter)

    /**
     * @function off
     * @see {"EventEmitter": "event-emitter#off"}
     */
    this.off = this.emitter.off.bind(this.emitter)

    /**
     * @function emit
     * @see {"EventEmitter": "event-emitter#emit"}
     */
    this.emit = this.emitter.emit.bind(this.emitter)
  }
}
