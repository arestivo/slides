const laserListener = (event) => {
  const svg = document.querySelector('svg.pointer')
  svg.style.left = `${event.clientX - 5}px`
  svg.style.top = `${event.clientY - 5}px`
}

const laserOn = () => {
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
}

const laserOff = () => {
  document.body.removeAttribute('style')
  const svg = document.querySelector('svg.pointer')
  document.body.removeChild(svg)
  document.removeEventListener('mousemove', laserListener)
}

const laserToggle = () => {
  const svg = document.querySelector('svg.pointer')

  if (svg == undefined) laserOn()
  else laserOff()
}