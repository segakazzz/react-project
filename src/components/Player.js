import React from 'react'
import { DARK, LIGHT } from '../constants'
import '../scss/player.scss'
import className from 'classnames'

const Player = props => {
  const { size, player, text, currentPlayer} = props
  const style = {
    width: size,
    height: size,
    margin: size * 0.1
  }
  let classes = ''
  switch(player){
    case DARK:
      classes = className('player-main', 'black')
      break;
    case LIGHT:
      classes = className('player-main', 'white')
      break;
    default:
      classes = className('player-main', 'gray')  
  }
  return (
    <div className={currentPlayer === true && 'player-current'}> 
      <div style={style} className={classes}>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Player
