import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import OthelloCell from './OthelloCell'
import { connect } from 'react-redux'
import '../scss/board.scss'

const OthelloGridRow = props => (
  <div className={'othello-board-row'}>
    {[...Array(8).keys()].map((colnum, idx) => (
      <OthelloGridCol key={idx} col={colnum} {...props} />
    ))}
  </div>
)

const OthelloGridCol = props => (
  <div className={'othello-board-col'}>
    <OthelloCell {...props} />
  </div>
)

const OthelloBoard = (props) => {
  // console.log({width: props.areaWidth, height: props.areaHeight})
  const styleMain = Object.assign({}, {width: props.areaWidth, height: props.areaHeight})
  return (
    <div style={styleMain} className={'othello-board-main'}>
      <div className={'othello-board-grid'}>
        {[...Array(8).keys()].map((rownum, idx) => (
          <OthelloGridRow key={idx} row={rownum} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { gameAreaWidth, gameAreaHeight } = state.othelloStyle
  // console.log({ gameAreaWidth, gameAreaHeight })
  return { areaWidth: gameAreaWidth, areaHeight: gameAreaHeight, ...ownProps }
}

export default connect(
  mapStateToProps,
  null
)(OthelloBoard)