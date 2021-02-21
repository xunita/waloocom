const linker = {
  name: 'Test',
  format(value) {
    let str = value.replace(/ /g, '-')
    str = str.replace(/&/g, 'and')
    str = str.replace(/"/g, '')
    str = str.replace(/,/g, '')
    return str.toLowerCase()
  },
}

export default ({ app }, inject) => {
  inject('linker', linker)
}
