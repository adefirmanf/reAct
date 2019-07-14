import { createStore } from 'redux'
import reducer from './reducers'

const createstore = createStore(reducer)
export default createstore;