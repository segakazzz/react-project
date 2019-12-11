import React from 'react'
import { DARK, LIGHT } from '../reducers/player'
const styles = {
  main: {
    border: '1px black solid',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem'
  }
}
const Player = props => {
  const { size, player, text } = props
  const backgroundColor =
    player === DARK ? 'black' : player === LIGHT ? 'white' : 'gray'
  const color = player === LIGHT ? 'black' : player === DARK ? 'white' : 'gray'
  const style = {
    ...styles.main,
    width: size,
    height: size,
    backgroundColor: backgroundColor,
    color: color,
    margin: size * 0.1
  }
  return <div style={style}><span>{text}</span></div>
}

export default Player
