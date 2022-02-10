export default (context, inject) => {
  inject('log', () => {
    console.log('hello from plugin')
  })
}
