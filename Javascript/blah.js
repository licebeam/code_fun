true || false

const boolValue = true || false


const shouldBeABool = !!'cool'

const truthy = ''
const truthy = []
const truth = {}
const truthy = true

const falsey = undefined
const falsey = null
const falsey = false


if (truthy === true) {
  console.log('im true')
}


const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;