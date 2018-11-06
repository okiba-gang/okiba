export function createWorker(script) {
  return new Worker(
    URL.createObjectURL(
      new Blob([`(${script})()`])
    )
  )
}
