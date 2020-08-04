import {combineReducers} from 'redux'

const tokenReducer = (state=null, action) => {
  switch (action.type) {
    case 'SETTOKEN':
      return action.payload
    default:
      return state
  }
}

const userReducer = (state=null, action) => {
  switch (action.type) {
    case 'SETUSER':
      return action.payload
    default:
      return state
  }
}

const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer
})

export default rootReducer
