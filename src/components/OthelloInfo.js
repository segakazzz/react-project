import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Button } from 'react-bootstrap'
import '../scss/navbar.scss'
import { connect } from 'react-redux'
import Player from './Player'
import { DARK, LIGHT } from '../constants'

const NavBarMain = props => {
  return (
    <Navbar className={'navbar'}>
      <Navbar.Brand className='navbar-title' href='#home'>
        Othello Game
      </Navbar.Brand>
      <Navbar.Toggle />
      {!props.isCompleted && (
        <Navbar.Collapse className='justify-content-end'>
          <Button variant='secondary' className={'button-login'}>Login</Button>
        </Navbar.Collapse>
      )}
    </Navbar>
  )
}
const NavBarSub = props => {
  console.log(props)
  return (
    <Navbar className={'navbar-sub'}>
      <Navbar.Brand className={'navbar-scoreboard'}>
      <div className={'score'}>
          <Player size={50} player={LIGHT} text={props.lightCount} currentPlayer={props.player === LIGHT}/>
          <div className={'vs'}> VS </div>
          <Player size={50} player={DARK} text={props.darkCount} currentPlayer={props.player === DARK}/>
        </div>
      </Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
  <Navbar.Text className='navbar-text'>{props.message}</Navbar.Text>
        </Navbar.Collapse>
    </Navbar>
  )
}
const OthelloInfo = props => {
  return (
    <div>
      <NavBarMain {...props} />
      <NavBarSub {...props} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.othelloGame }
}

//   const mapDispatchToProps = dispatch => {
//     return {
//       putPiece: (row, col) => dispatch(putPiece(row, col))
//     }
//   }

export default connect(mapStateToProps, null)(OthelloInfo)
