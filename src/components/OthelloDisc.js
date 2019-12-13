import React from 'react'
import { DARK, LIGHT } from '../reducers/player'
import { LIGHT_PINK, LIGHT_GREEN} from './styleType'

const style = {
  disc: {
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    display: 'none',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '0.5rem'
  }
}

const OthelloDisc = props => {
  let discStyle = { ...style.disc }
  switch (props.color) {
    case DARK:
      discStyle.display = 'flex'
      discStyle.backgroundColor = 'black'
      discStyle.color = 'white'
      break
    case LIGHT:
      discStyle.display = 'flex'
      discStyle.backgroundColor = 'white'
      discStyle.color = 'black'
      break
    default:
      discStyle.display = 'none'
      break
  }
  switch (props.isFliped) {
    case true:
      discStyle.border = '2px solid' + LIGHT_PINK
      break
    default:
      break
  }

  switch (props.isPlaced) {
    case true:
      discStyle.border = '2px solid' + LIGHT_GREEN
      break
    default:
      break
  }
  return (
    <div style={discStyle} onClick={props.putPiece}>
      Row: {props.row} Col: {props.col}
      {/* isFliped: {props.isFliped ? 'Yes' : 'No'}  */}
      {/* isPlaced: {props.isPlaced ? 'Yes' : 'No'} */}
    </div>
  )
}

export default OthelloDisc
