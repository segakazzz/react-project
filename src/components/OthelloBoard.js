import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import OthelloCell from './OthelloCell'
import { NAVBAR_HEIGHT_PX } from '../constants'
import { connect } from 'react-redux'

const style = {
  col: {
    padding: 0
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    position: 'absolute',
    top: NAVBAR_HEIGHT_PX,
    width: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }
}

const OthelloGridRow = props => (
  <div style={style.row}>
    {[...Array(8).keys()].map((colnum, idx) => (
      <OthelloGridCol key={idx} col={colnum} {...props} />
    ))}
  </div>
)

const OthelloGridCol = props => (
  <div style={style.col}>
    <OthelloCell {...props} />
  </div>
)

const OthelloBoard = (props) => {
  // console.log({width: props.areaWidth, height: props.areaHeight})
  const styleMain = Object.assign({...style.main}, {width: props.areaWidth, height: props.areaHeight})
  return (
    <div style={styleMain}>
      <div style={style.grid}>
        {[...Array(8).keys()].map((rownum, idx) => (
          <OthelloGridRow key={idx} row={rownum} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { player } = state.othelloGame
  const { gameAreaWidth, gameAreaHeight } = state.othelloStyle
  // console.log({ gameAreaWidth, gameAreaHeight })
  return { player: player, areaWidth: gameAreaWidth, areaHeight: gameAreaHeight }
}

export default connect(
  mapStateToProps,
  null
)(OthelloBoard)