import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from 'react-bootstrap'
import '../scss/navbar.scss'
import { connect } from 'react-redux'
import Player from './Player'

const OthelloInfo = props => {
  return (
    <Navbar className={'navbar'}>
      <Navbar.Brand
        className='navbar-title'
        href='#home'
      >
        Othello Game
      </Navbar.Brand>
      <Navbar.Toggle />
      {!props.isCompleted && (
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='navbar-text'>
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
