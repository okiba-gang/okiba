import * as Easings from './'

const tests = {
  'linear': [0.25, 0.75],
  'easeInQuad': [0.0625, 0.5625],
  'easeOutQuad': [0.4375, 0.9375],
  'easeInOutQuad': [0.125, 0.875],
  'easeInCubic': [0.015625, 0.421875],
  'easeOutCubic': [0.578125, 0.984375],
  'easeInOutCubic': [0.0625, 0.9375],
  'easeInQuart': [0.00390625, 0.31640625],
  'easeOutQuart': [0.68359375, 0.99609375],
  'easeInOutQuart': [0.03125, 0.96875],
  'easeInQuint': [0.0009765625, 0.2373046875],
  'easeOutQuint': [0.7626953125, 0.9990234375],
  'easeInOutQuint': [0.015625, 0.984375],
}

for(let ease in tests){
  test(`${ease} of 0.25 return ${test[ease]}`, done => {
    const e = Easings[ease](0.25)
    expect(e).toBe(tests[ease][0])
    done()
  })

  test(`${ease} of 0.75 return ${test[ease]}`, done => {
    const e = Easings[ease](0.75)
    expect(e).toBe(tests[ease][1])
    done()
  })
}