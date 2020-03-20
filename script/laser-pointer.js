const state = { laser : false, paragraph : false }

const laserListener = (event) => {
  const svg = document.querySelector('svg.pointer')
  svg.style.left = `${event.clientX - 5}px`
  svg.style.top = `${event.clientY - 5}px`
}

const paragraphListener = (event) => {
  if (event.type == 'mouseenter')
    event.target.style.color = null
  if (event.type == 'mouseleave')
    event.target.style.color = "#888"
}

const paragraphFocusOn = () => {
  const paragraphs = document.querySelectorAll('li')

  paragraphs.forEach((paragraph) => {
    paragraph.style.color = '#888'
    paragraph.addEventListener('mouseenter', paragraphListener)
    paragraph.addEventListener('mouseleave', paragraphListener)
  })

  state.paragraph = true
}

const paragraphFocusOff = () => {
  const paragraphs = document.querySelectorAll('li')

  paragraphs.forEach((paragraph) => {
    paragraph.style.color = null
    paragraph.removeEventListener('mouseenter', paragraphListener)
    paragraph.removeEventListener('mouseleave', paragraphListener)
  })

  state.paragraph = false
}

const laserOn = (event) => {
  document.body.setAttribute('style', 'cursor: none;')

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink')
  svg.classList.add('pointer')
  svg.setAttribute('style', 'z-index: 20; position: absolute; width: 10px; height: 10px; filter: blur(1px);')
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet')
  svg.setAttribute('viewBox', '0 0 10 10')
  
  const pointer = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
  pointer.setAttributeNS(null, 'cx', 5)
  pointer.setAttributeNS(null, 'cy', 5)
  pointer.setAttributeNS(null, 'r', 5)
  pointer.setAttributeNS(null, 'style', 'position:absolute; fill: red; stroke: red; stroke-width: 1px' )
  
  document.body.appendChild(svg)
  svg.appendChild(pointer)
  
  pointer.addEventListener('click', laserOff) 

  document.addEventListener('mousemove', laserListener)

  state.laser = true

  if (event) event.preventDefault()
}

const laserOff = () => {
  document.body.removeAttribute('style')
  const svg = document.querySelector('svg.pointer')

  if (svg) document.body.removeChild(svg)
  document.removeEventListener('mousemove', laserListener)

  state.laser = false
}

const laserToggle = () => !state.laser ? laserOn() : laserOff()
const paragraphFocusToggle = () => !state.paragraph ? paragraphFocusOn() : paragraphFocusOff()