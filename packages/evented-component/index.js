import Component from '@okiba/component'
import EventEmitter from '@okiba/event-emitter'

export default class EventedComponent extends Component {
  constructor(...args) {
    super(...args)
    this.emitter = new EventEmitter()
    this.on = this.emitter.on.bind(this.emitter)
    this.off = this.emitter.off.bind(this.emitter)
    this.emit = this.emitter.emit.bind(this.emitter)
  }
}
