import React from 'react'
import { connect } from 'react-redux'
import { DARK_GREEN } from './color'
import OthelloDisc from './OthelloDisc'

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
  <div style={style.cell} onClick={props.putPiece}>
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
    putPiece: () => dispatch({ type: 'PUT_A_PIECE' })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OthelloCell)
