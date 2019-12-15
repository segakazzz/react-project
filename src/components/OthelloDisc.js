import React from 'react'
import { DARK, LIGHT } from '../constants'
import { LIGHT_PINK, LIGHT_GREEN} from '../constants'
import './css/disc.css'
import className from 'classnames'

const OthelloDisc = props => {
  let style = {}
  switch (props.isFlipped) {
    case true:
      style.border = '2px solid' + LIGHT_PINK
      break
    default:
      break
  }

  switch (props.isPlaced) {
    case true:
      style.border = '2px solid' + LIGHT_GREEN
      break
    default:
      break
  }
  // console.log(className('discStyle'))
  let classes = ''
  switch (props.color) {
    case DARK:
      classes = className('discStyle', 'black', 'show')
    break;
    case LIGHT:
      classes = className('discStyle', 'white', 'show')
      break;
    default:
      classes = className('discStyle', 'hidden')
  }
  
  return (
    <div style={style} className={classes} onClick={props.putPiece}>
      {/* Row: {props.row} Col: {props.col} */}
    </div>
  )
}

export default OthelloDisc
