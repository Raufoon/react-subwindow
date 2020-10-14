import React, { useState, useMemo } from 'react'
import ReactDOM from 'react-dom'
import { blinkDomElement, getAvailableZIndex, releaseLastZIndex } from './utils'
import { ReactComponent as CloseIcon } from './assets/icons/close.svg'
import styles from './index.module.css'

export function closeModal(event) {
  if (event) event.persist()
  const lastModalElement = document.getElementById('modal-root').lastChild
  ReactDOM.unmountComponentAtNode(lastModalElement)
  lastModalElement.remove()
  releaseLastZIndex()
}

export function createModal(content, settings = {}) {
  const modalRoot = document.getElementById('modal-root')
  const modalZIndex = getAvailableZIndex()
  const modalElement = document.createElement('div')
  modalRoot.appendChild(modalElement)

  ReactDOM.render(
    <div
      className={styles.Modal}
      style={{ zIndex: modalZIndex }}
      onClick={() => blinkDomElement(`modal_content_${modalZIndex}`)}
    >
      {/* The visible part of the Modal. Around it has a semi transparent effect on the whole window */}
      <div
        className={styles.content}
        id={`modal_content_${modalZIndex}`}
        onClick={(e) => e.stopPropagation()}
      >
        {!settings.hideClose && (
          <button
            className={styles.closeBtn}
            onClick={closeModal}
            style={{ zIndex: modalZIndex }}
          >
            <CloseIcon height={`"15px"`} width={`"15px"`} fill={`"#dd546e"`} />
          </button>
        )}

        <div
          className={styles.children}
          style={{ overflow: settings.noScroll && `hidden` }}
        >
          {content}
        </div>
      </div>
    </div>,
    modalElement
  )
}

function ConfirmationModal(props) {
  const { text, confirm, loader } = props
  const [pending, setPending] = useState(false)

  const onConfirm = useMemo(
    () => async (event) => {
      setPending(true)
      await confirm()
      closeModal(event)
    },
    []
  )

  if (pending) {
    return (
      <div className={styles.ConfirmationModal}>{loader || `Loading...`}</div>
    )
  }
  return (
    <div className={styles.ConfirmationModal}>
      <label>{text || `Are you sure?`}</label>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: `10px` }}>
        <button onClick={closeModal}>No</button>
        <button className={styles.confirmBtn} onClick={onConfirm}>
          Yes
        </button>
      </div>
    </div>
  )
}

export function onConfirmationPopup(text, confirm, settings = {}) {
  createModal(
    <ConfirmationModal
      text={text}
      confirm={confirm}
      loaderText={settings.loaderText}
    />,
    {
      hideClose: true
    }
  )
}

export function getZIndex() {
  return getAvailableZIndex()
}
