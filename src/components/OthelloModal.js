import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeModal, playAgain } from '../actions/actionCreators'
import { DARK_WON, LIGHT_WON } from '../reducers/statusTypes'
import Player from './Player'
import { DARK, LIGHT } from '../reducers/player'

const styles = {
  score: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vs:{
    fontSize: '2rem',
    margin: '5px'
  },
  message: {
    textAlign: 'center'
  }
}
const OthelloModal = props => {
  console.log(props)
  const resultMessage = status => {
    switch (status) {
      case DARK_WON:
        return '!!DARK WON!!'
      case LIGHT_WON:
        return '!!LIGHT WON!!'
      default:
        return 'DRAW...'
    }
  }
  return (
    <Modal show={props.showModal} centered size='lg' onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Game Set!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={styles.message}>{resultMessage(props.status)}</p>
        <div style={styles.score}>
          <Player size={60} player={LIGHT} text={props.lightCount}/>
          <div style={styles.vs}> VS </div>
          <Player size={60} player={DARK} text={props.darkCount}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-secondary' onClick={props.playAgain}>
          Play Again
        </Button>
        <Button variant='outline-primary' onClick={props.closeModal}>
          Save Result
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    playAgain: () => dispatch(playAgain())
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...state.othelloGame }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OthelloModal)
