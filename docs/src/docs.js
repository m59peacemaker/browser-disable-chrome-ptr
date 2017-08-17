import bowser from 'bowser'
import disableChromePtr from '../../'
const disablePtr = () => (bowser.mobile && bowser.chrome) ? disableChromePtr() : () => {}

const p = document.createElement('p')
p.textContent = `If you're on mobile Chrome, touch the screen and move your finger downward per the traditional pull-to-refresh motion. Nothing should happen while Chrome's native pull to refresh is disabled.`

const checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.checked = true

const label = document.createElement('label')
label.textContent = 'Chrome pull-to-refresh disabled'

let enablePtr
const toggle = (on) => {
  if (on) {
    enablePtr()
    enablePtr = undefined
  } else {
    enablePtr = disablePtr()
  }
}

toggle(false)
checkbox.addEventListener('change', e => toggle(!e.target.checked))

document.body.appendChild(p)
document.body.appendChild(checkbox)
document.body.appendChild(label)
