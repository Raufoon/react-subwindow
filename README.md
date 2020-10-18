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
  return (
    <div>
      <button
        onClick={() => createSubwindow(
          <div>
            <h1>Saying hello from modal</h1>
          </div>
        )}
      >Open Modal</button>
    </div>
  )
}

export default App

```

## License

MIT © [Raufoon](https://github.com/Raufoon)
