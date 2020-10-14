# react-subwindow

> A react way to create modals and some useful utility functions

[![NPM](https://img.shields.io/npm/v/react-subwindow.svg)](https://www.npmjs.com/package/react-subwindow) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-subwindow
```

## Usage

```jsx
import React from 'react'

import { createSubwindow } from 'react-subwindow'
import 'react-subwindow/dist/index.css'

const App = () => {
  const subwindow2 = (
    <div>
      <h1>This is level 2 modal</h1>
    </div>
  )

  const subwindow1 = (
    <div>
      <h1>This is level 1 modal</h1>
      <button
        onClick={createSubwindow(subwindow2)}>Open Modal</button>
    </div>
  )

  return (
    <div>
      <h1>Usage of the functions</h1>
      <button
        onClick={createSubwindow(subwindow1)}>Open Modal</button>
    </div>
  )
}

export default App

```

## License

MIT © [Raufoon](https://github.com/Raufoon)
