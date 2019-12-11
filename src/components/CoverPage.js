import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { startGame } from '../actions/actionCreators'

const CoverPage = (props) => <Button onClick={props.startGame}>Start!</Button>

const mapDispatchToProps = dispatch => {
  return {
    startGame: () => dispatch(startGame())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CoverPage)
