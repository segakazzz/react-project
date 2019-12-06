import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import OthelloCell from './OthelloCell'

const style = {
  col: {
    padding: 0
  },
  grid: {
    border: '2px black solid'
  }
}

const OthelloGridRow = props => (
  <Row>
    {[...Array(8).keys()].map((colnum, idx) => (
      <OthelloGridCol key={idx} col={colnum} {...props} />
    ))}
  </Row>
)

const OthelloGridCol = props => (
  <Col style={style.col}>
    <OthelloCell {...props} />
  </Col>
)

export default () => (
  <Container style={style.grid}>
    {[...Array(8).keys()].map((rownum, idx) => (
      <OthelloGridRow key={idx} row={rownum} />
    ))}
  </Container>
)
