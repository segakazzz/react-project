import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { startGame } from '../actions/actionCreators'
import './css/main.css'
import { NORMAL_GREEN, LIGHT_PINK } from './styleType'

const styles = {
  main: {
    backgroundColor: NORMAL_GREEN,
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    color: LIGHT_PINK
  }
}

const CoverPage = props => {
  return (
    <div style={styles.main}>
      <div style={styles.title} className={'cover-title'}>
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
