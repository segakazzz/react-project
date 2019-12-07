import React from 'react'
import { connect } from 'react-redux'
import { DARK_GREEN } from './color'
import OthelloDisc from './OthelloDisc'
import { putPiece } from '../actions/actionCreators'
import './css/main.css'

const style = {
  cell: {
    backgroundColor: DARK_GREEN,
    width: '100%',
    border: '1px black solid',
    height: '80px', // temporary fix
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const OthelloCell = props => (
  <div className={'othello-cell'} style={style.cell} onClick={props.putPiece.bind(null, props.row, props.col)}>
    <OthelloDisc {...props} />
  </div>
)

const mapStateToProps = (state, ownProps) => {
  const { positions } = state.othelloGame
  const { col, row } = ownProps
  const match = positions.find((obj, idx) => {
    return obj.row === row && obj.col === col
  })
  const color = match ? match.color : null
  return { color: color }
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
