import { SCREEN_RESIZE } from '../actions/actionTypes'
const initialState = {
  screenWidth: typeof window === 'object' ? window.innerWidth : null,
  screenHeight: typeof window === 'object' ? window.innerHeight : null
}

export default (state = initialState, action) => {
     console.log(action.type)
  switch (action.type) {
    case SCREEN_RESIZE:
        console.log(action)
      return Object.assign({}, state, {
        screenWidth: action.screenWidth,
        screenHeight: action.screenHeight
      })
    default:
      return state
  }
}
