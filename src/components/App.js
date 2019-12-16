import React from 'react'
import OthelloMain from './OthelloMain'
import CoverPage from './CoverPage'
import { connect } from 'react-redux'
// import { BrowserRouter as Router } from 'react-router-dom';
// import Test from './Test'

const App = props => {
  return (
    <div>
      {/* <Test/> */}
      <CoverPage status={props.status}/>
      <OthelloMain />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { status } = state.othelloGame
  return { status: status }
}

export default connect(mapStateToProps, null)(App)
