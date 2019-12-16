import React from 'react'
import { DARK, LIGHT } from '../constants'
import '../scss/disc.scss'
import className from 'classnames'

const OthelloDisc = props => {
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

  if(props.isFlipped) classes += ' flipped'
  if(props.isPlaced) classes += ' placed'

  return (
    <div className={classes} onClick={props.putPiece}>
      {/* Row: {props.row} Col: {props.col} */}
    </div>
  )
}

export default OthelloDisc
