import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import './css/main.css'
import { LIGHT_GREEN, DARK_PINK } from './color'
import { connect } from 'react-redux'
import { DARK } from '../reducers/player'

const style = {
  navbar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: DARK_PINK
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
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text className='navbar-text' style={style.navbarText}>
          Current Player
        </Navbar.Text>
        <div style={playerSign} />
      </Navbar.Collapse>
    </Navbar>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { player } = state.othelloGame
  return { player: player }
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
