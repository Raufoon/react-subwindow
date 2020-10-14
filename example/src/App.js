import React from 'react'

import { createSubwindow } from 'react-subwindow'
import 'react-subwindow/dist/index.css'

const App = () => {
  return (
    <div>
      <h1>Usage of the functions</h1>
      <button
        onClick={
          createSubwindow(
            <div>
              <h1>This is level 1 modal</h1>
              <button
                onClick={
                  createSubwindow(
                    <div>
                      <h1>This is level 2 modal</h1>
                    </div>
                  )
                }
              >Open Modal</button>
            </div>
          )
        }
      >Open Modal</button>
    </div>
  )
}

export default App
