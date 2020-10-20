import { combineReducers } from 'redux'
import MenuReducer from './reducers/menuReducer'
import AuthReducer from './reducers/authReducer'
import UserReducer from './reducers/userReducer'
import coursesTabReducer from './reducers/coursesTabReducer'

export default combineReducers({
  menu: MenuReducer, auth: AuthReducer, user: UserReducer, courseTab: coursesTabReducer
})