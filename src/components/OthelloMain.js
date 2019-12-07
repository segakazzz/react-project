import React from 'react'
import { LIGHT_PINK } from './color'
import OthelloBoard from './OthelloBoard'
import OthelloInfo from './OthelloInfo'
import { screenResize } from '../actions/actionCreators'
import { connect } from 'react-redux'

const style = {
  main: {
    backgroundColor: LIGHT_PINK,
    minHeight: '100vh',
    position: 'relative'
  }
}

class OthelloMain extends React.Component {
  constructor (props) {
    super(props)
    // console.log(props)
  }

  componentDidMount () {
    window.addEventListener('resize', () => {
      // console.log('resizing...')
      this.props.screenResize(window.innerWidth, window.innerHeight)
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
    screenResize: (width, height) => dispatch(screenResize(width, height))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(OthelloMain)
