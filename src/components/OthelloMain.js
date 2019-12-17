import React from 'react'
import OthelloBoard from './OthelloBoard'
import OthelloInfo from './OthelloInfo'
import { gameAreaResize } from '../ducks/othelloStyle'
import { connect } from 'react-redux'
import OthelloModal from './OthelloModal'
import '../scss/main.scss'
import className from 'classnames'

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
      <div className={className('othello-main', 'show')}>
        <OthelloInfo  {...this.props}/>
        <OthelloBoard {...this.props} />
        {isCompleted && <OthelloModal {...this.props}/>}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    gameAreaResize: (width, height) => dispatch(gameAreaResize(width, height))
  }
}

// const mapStateToProps = (state, ownProps) => {
//   const { isCompleted } = state.othelloGame
//   return { isCompleted: isCompleted }
// }

export default connect(
  null,
  mapDispatchToProps
)(OthelloMain)
