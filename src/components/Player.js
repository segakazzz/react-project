import React from 'react'
import { DARK, LIGHT } from '../constants'
import '../scss/player.scss'

const Player = props => {
  const { size, player, text } = props
  const backgroundColor =
    player === DARK ? 'black' : player === LIGHT ? 'white' : 'gray'
  const color = player === LIGHT ? 'black' : player === DARK ? 'white' : 'gray'
  const style = {
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    color: color,
    margin: size * 0.1
  }
  return <div style={style} className={'player-main'}><span>{text}</span></div>
}

export default Player
