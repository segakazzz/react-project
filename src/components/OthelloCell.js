import React from 'react'
import { connect } from 'react-redux'
import { DARK_GREEN } from './styleType'
import OthelloDisc from './OthelloDisc'
import { putPiece } from '../actions/actionCreators'
import './css/main.css'

const style = {
  cell: {
    backgroundColor: DARK_GREEN,
    border: '1px black solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const OthelloCell = props => {
  const styleCell = Object.assign({...style.cell}, {width: props.cellSize, height: props.cellSize})
  return (
    <div
      className={'othello-cell'}
      style={styleCell}
      onClick={props.putPiece.bind(null, props.row, props.col)}
    >
      <OthelloDisc {...props} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const { positions } = state.othelloGame
  const { cellSize } = state.othelloStyle
  const { col, row } = ownProps
  const match = positions.find((obj, idx) => {
    return obj.row === row && obj.col === col
  })
  const color = match ? match.color : null
  const isFlipped = match ? match.isFlipped : null
  const isPlaced = match ? match.isPlaced : null
  return { color: color, cellSize: cellSize, isFlipped: isFlipped, isPlaced: isPlaced }
}

const mapDispatchToProps = dispatch => {
  return {
    putPiece: (row, col) => dispatch(putPiece(row, col))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OthelloCell)
