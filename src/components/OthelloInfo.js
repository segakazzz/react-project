import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import '../scss/main.scss'
import { LIGHT_GREEN, DARK_PINK, NAVBAR_HEIGHT_PX } from '../constants'
import { connect } from 'react-redux'
import Player from './Player'

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
  }
}

const OthelloInfo = props => {
  return (
    <Navbar style={style.navbar}>
      <Navbar.Brand
        className='navbar-title'
        href='#home'
        style={style.navbarTitle}
      >
        Othello Game
      </Navbar.Brand>
      <Navbar.Toggle />
      {!props.isCompleted && (
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='navbar-text' style={style.navbarText}>
            Player
          </Navbar.Text>
          <Player size={30} player={props.player}/>
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { player, status, isCompleted } = state.othelloGame
  return { player: player, status: status, isCompleted : isCompleted }
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
