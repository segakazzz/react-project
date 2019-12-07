import React from 'react'
import { LIGHT_PINK } from './styleType'
import OthelloBoard from './OthelloBoard'
import OthelloInfo from './OthelloInfo'
import { gameAreaResize } from '../actions/actionCreators'
import { connect } from 'react-redux'


const style = {
  main: {
    backgroundColor: LIGHT_PINK,
    minHeight: '100vh',
    position: 'relative'
  }
}

class OthelloMain extends React.Component {

  componentDidMount () {
    window.addEventListener('resize', () => {
      // console.log('resizing...', window.innerWidth, window.innerHeight)
      this.props.gameAreaResize(
        window.innerWidth,
        window.innerHeight
      )
      // console.log(window.innerWidth, window.innerHeight)
    })
  }

  render () {
    return (
      <div style={style.main}>
        <OthelloInfo />
        <OthelloBoard />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gameAreaResize: (width, height) => dispatch(gameAreaResize(width, height))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(OthelloMain)
