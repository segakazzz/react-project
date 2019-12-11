import React from 'react'
import OthelloMain from './OthelloMain'
import CoverPage from './CoverPage'
import { connect } from 'react-redux'
import { NOT_STARTED } from '../reducers/statusTypes'

function App (props) {
  console.log(props.status)

  return props.status === NOT_STARTED ? (
    <CoverPage /> 
  ) : (
    <OthelloMain />
  )
}

const mapStateToProps = (state, ownProps) => {
  const { status } = state.othelloGame
  return { status: status }
}

export default connect(
  mapStateToProps,
  null
)(App)
