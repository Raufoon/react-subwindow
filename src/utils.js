import styles from './styles.module.css'

export function blinkDomElement(id) {
  const elementToBlink = document.getElementById(id)
  if (!elementToBlink) return

  elementToBlink.classList.add(styles.blink)

  setTimeout(function () {
    elementToBlink.classList.remove(styles.blink)
  }, 700)
}

const usedZIndices = [1000]

export function getAvailableZIndex() {
  const last = usedZIndices[usedZIndices.length - 1]
  usedZIndices.push(last + 1)
  return last + 1
}

export function releaseZIndex(value) {
  const idx = usedZIndices.indexOf(value)
  if (idx > -1) {
    usedZIndices.splice(idx, 1)
  }
}

export function releaseLastZIndex() {
  usedZIndices.pop()
}
