/**
 * @module class-utils
 * @description Utilities that operate on classes
 */

/**
 * Mixes properties and methods from a class into a given `this` context
 * @example
 * class Fruit {
 *   constructor() {
 *     this.isPeeled = false
 *   }
 *
 *   peel() {
 *     this.isPeeled = true
 *   }
 * }
 *
 * class Coloured {
 *   constructor(color) {
 *     this.color = color
 *   }
 * }
 *
 * class Edible {
 *   constructor(color) {
 *     mixin(Fruit, this)
 *     mixin(Coloured, this, color)
 *   }
 * }
 *
 * const edible = new Edible('red')
 * edible.peel()
 * console.log(edible.isPeeled, edible.color)
 * // Logs: true, 'red'
 *
 * @param {Class} BaseClass The class definition to mix-in
 * @param {Object} context The context that has to include methods and props
 * @param {...any} Arguments to pass to the BaseClass constructor
 */
export function mixin(BaseClass, context, ...args) {
  const base = new BaseClass(...args)
  for (const k in base) {
    context[k] = base[k]
  }

  Object.getOwnPropertyNames(base.constructor.prototype)
    .forEach(k => {
      if (k !== 'constructor') {
        context[k] = base.constructor.prototype[k].bind(context)
      }
    })
}
