const state = { laser : false, paragraph : false }

const paragraphListener = (event) => {
  if (event.type == 'mouseenter')
    event.target.style.color = null
  if (event.type == 'mouseleave')
    event.target.style.color = "#888"
}

const paragraphFocusOn = () => {
  const items = document.querySelectorAll('li,p')

  items.forEach((item) => {
    item.style.color = '#888'
    item.addEventListener('mouseenter', paragraphListener)
    item.addEventListener('mouseleave', paragraphListener)
  })

  state.paragraph = true
}

const paragraphFocusOff = () => {
  const items = document.querySelectorAll('li,p')

  items.forEach((item) => {
    item.style.color = null
    item.removeEventListener('mouseenter', paragraphListener)
    item.removeEventListener('mouseleave', paragraphListener)
  })

  state.paragraph = false
}

const laserOn = (event) => {
  document.body.classList.add('laser')

  state.laser = true
}

const laserOff = () => {
  document.body.classList.remove('laser')

  state.laser = false
}

const laserToggle = () => !state.laser ? laserOn() : laserOff()
const paragraphFocusToggle = () => !state.paragraph ? paragraphFocusOn() : paragraphFocusOff()