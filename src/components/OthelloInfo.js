import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import './css/main.css'
import { LIGHT_GREEN, DARK_PINK, NAVBAR_HEIGHT_PX } from './styleType'
import { connect } from 'react-redux'
import { DARK } from '../reducers/player'
import { NOT_STARTED, PLAYING } from '../reducers/statusTypes'

const style = {
  navbar: {
    position: 'absolute',
    top: 0,
    width: '100vw',
    backgroundColor: DARK_PINK,
    height: NAVBAR_HEIGHT_PX
  },
  navbarTitle: {
    color: LIGHT_GREEN
  },
  navbarText: {
    color: LIGHT_GREEN
  },
  playerSign: {
    marginLeft: '10px',
    borderRadius: '50%',
    // backgroundColor: 'white',
    width: '20px',
    height: '20px'
  }
}

const OthelloInfo = props => {
  const playerColor = props.player === DARK ? 'black' : 'white'
  const playerSign = Object.assign(
    { ...style.playerSign },
    { backgroundColor: playerColor }
  )
  const isCompleted = props.status !== NOT_STARTED && props.status !== PLAYING
  return (
    <Navbar style={style.navbar}>
      <Navbar.Brand
        className='navbar-title'
        href='#home'
        style={style.navbarTitle}
      >
        Classic Othello
      </Navbar.Brand>
      <Navbar.Toggle />
      {!isCompleted && (
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='navbar-text' style={style.navbarText}>
            Current Player
          </Navbar.Text>
          <div style={playerSign} />
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { player, status } = state.othelloGame
  return { player: player, status: status }
}

//   const mapDispatchToProps = dispatch => {
//     return {
//       putPiece: (row, col) => dispatch(putPiece(row, col))
//     }
//   }

export default connect(
  mapStateToProps,
  null
)(OthelloInfo)
