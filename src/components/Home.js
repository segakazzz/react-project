import React from 'react'
import OthelloMain from './OthelloMain'
import CoverPage from './CoverPage'
import { connect } from 'react-redux'

const Home = props => (
    <div>
      <CoverPage status={props.status} />
      <OthelloMain {...props}/>
    </div>
  )
  
  const mapStateToProps = (state, ownProps) => {
    return { ...state.othelloGame }
  }
  
  export default connect(mapStateToProps, null)(Home)