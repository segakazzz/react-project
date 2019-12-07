import React from 'react'
import { LIGHT_PINK } from './color'
import OthelloBoard from './OthelloBoard'
import OthelloInfo from './OthelloInfo'

const style = {
    main: {
        backgroundColor: LIGHT_PINK,
        minHeight: '100vh',
        position: 'relative'
    }
}

export default () => (
  <div style={style.main}>
    <OthelloInfo />
    <OthelloBoard />
  </div>
)
