import { init } from '@rematch/core'
import models from './models.js'

console.log(models)
const store = init({
  models,
})

export default store