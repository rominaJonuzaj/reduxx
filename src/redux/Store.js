import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import Reducer from '../components/Reducer'

const Store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default Store