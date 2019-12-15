import { combineReducers } from 'redux'
import othelloStyle from './othelloStyle'
import othelloGame from './othelloGame'

export default combineReducers({
    othelloStyle: othelloStyle,
    othelloGame: othelloGame
})