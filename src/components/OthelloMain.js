import React from 'react'
import { LIGHT_PINK } from './color'
import OthelloBoard from './OthelloBoard'

const style = {
    main: {
        backgroundColor: LIGHT_PINK,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default () => (
  <div style={style.main}>
    <OthelloBoard />
  </div>
)
