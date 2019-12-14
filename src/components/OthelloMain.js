import React from 'react'
import { LIGHT_PINK } from './styleType'
import OthelloBoard from './OthelloBoard'
import OthelloInfo from './OthelloInfo'
import { gameAreaResize } from '../actions/actionCreators'
import { connect } from 'react-redux'
import OthelloModal from './OthelloModal'
import './css/main.css'
import className from 'classnames'

const style = {
  main: {
    backgroundColor: LIGHT_PINK
  }
}

class OthelloMain extends React.Component {
  componentDidMount () {
    window.addEventListener('resize', () => {
      // console.log('resizing...', window.innerWidth, window.innerHeight)
      this.props.gameAreaResize(window.innerWidth, window.innerHeight)
      // console.log(window.innerWidth, window.innerHeight)
    })
  }

  render () {
    const { isCompleted } = this.props
    return (
      <div style={style.main} className={className('othello-main', 'show')}>
        <OthelloInfo />
        <OthelloBoard />
        {isCompleted && <OthelloModal />}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gameAreaResize: (width, height) => dispatch(gameAreaResize(width, height))
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isCompleted } = state.othelloGame
  return { isCompleted: isCompleted }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OthelloMain)
