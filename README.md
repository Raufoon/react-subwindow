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
      <br/>
      <button
        onClick={
          () => {
            onConfirmationPopup("Are you sure", function confirm() {
              window.alert("This will show up if you click on 'Confirm'")
            })
          }
        }
      >
        Do something after confirmation
      </button>
    </div>
  )
}

export default App

```

### API
```js
import { createSubwindow, onConfirmationPopup, getZIndex, releaseZIndex } from 'react-subwindow'
```

#### `createSubwindow(reactElement)`

__Example__

```js
createSubwindow(
  <div>
    <h1>Saying hello from modal</h1>
  </div>
)
```

#### `onConfirmationPopup(title, onConfirm)`

__Example__

```js
onConfirmationPopup(
  "Are you sure", 
  function confirm() {
    window.alert("This will show up if you click on 'Confirm'")
  }
)
```

#### `getZIndex()`

__Returns__ `number` lowest available z index

Use this method to book a z-index value

#### `releaseZIndex()`

Release the last z index returned by getZIndex()


## License

MIT © [Raufoon](https://github.com/Raufoon)
