import React from 'react'
import { DARK, LIGHT } from '../reducers/player'

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
  return (
    <div style={discStyle} onClick={props.putPiece}>
      Row: {props.row} Col: {props.col}
    </div>
  )
}

export default OthelloDisc