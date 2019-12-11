import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { closeModal } from '../actions/actionCreators'
import { DARK_WON, LIGHT_WON } from '../reducers/statusTypes'

const OthelloModal = (props) => {
  
  return (
    <Modal show={props.showModal} centered size='sm' onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.closeModal}>Close</Button>
        <Button variant='primary' onClick={props.closeModal}>Save Changes</Button>
      </Modal.Footer>
    </Modal>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

const mapStateToProps = (state, ownProps) => {
  const { showModal, status } = state.othelloGame
  return { showModal: showModal, status: status }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OthelloModal)
