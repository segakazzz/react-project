import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeModal, playAgain } from '../ducks/othelloGame'
import Player from './Player'
import { DARK, LIGHT } from '../constants'
import { DARK_WON, LIGHT_WON } from '../constants'
import '../scss/modal.scss'

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
        <p className={'message'}>{resultMessage(props.status)}</p>
        <div className={'score'}>
          <Player size={60} player={LIGHT} text={props.lightCount}/>
          <div className={'vs'}> VS </div>
          <Player size={60} player={DARK} text={props.darkCount}/>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-secondary' onClick={props.playAgain}>
          Play Again
        </Button>
        {/* <Button variant='outline-primary' onClick={props.closeModal}>
          Save Result
        </Button> */}
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
