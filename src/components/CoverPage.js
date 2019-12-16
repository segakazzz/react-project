import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { startGame } from '../ducks/othelloGame'
import '../scss/cover.scss'
import { NOT_STARTED } from '../constants'
import classNames from 'classnames'

const CoverPage = props => {
  const classes = props.status === NOT_STARTED ? classNames('cover-main', 'show') : classNames('cover-main', 'hidden')
  return (
    <div className={classes}>
      <div className={'cover-title'}>
        Othello Game
      </div>
      <Button
        variant='outline-secondary'
        className={'cover-button'}
        size='lg'
        onClick={props.startGame}
      >
        Click HERE to start Game!
      </Button>
      <div className={'cover-information'}>
        Created by <a href="https://segakazzz-portfolio.herokuapp.com/" 
        target="_blank" rel="noopener noreferrer">Kazue Sega Sasatani</a>
      </div>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CoverPage)
