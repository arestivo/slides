const hljs = remark.highlighter.engine;

const query = window.location.search
const params = new URLSearchParams(query)
const slides = params.get('s')
const darkThemeStorageKey = 'slides-dark-theme'

if (slides) {
  const markdown = fetch(`markdown/${slides.toLowerCase()}.md`).then(r => {if (!r.ok) window.location = 'https:www.fe.up.pt/~arestivo/'})

  let currentTheme = 'foundation'
  const themes = ['default', 'monokai', 'rainbow', 'foundation', 'mono-blue', 'googlecode']

  window.slideshow = remark.create({
    highlightStyle: currentTheme,
    highlightLines: false,
    highlightSpans: false,
    sourceUrl: `markdown/${slides.toLowerCase()}.md`
  })

  document.title = `André Restivo :: ${slides}`

  function setDarkTheme(enabled) {
    document.body.classList.toggle('dark-theme', enabled)
  }

  function toggleDarkTheme() {
    const enabled = !document.body.classList.contains('dark-theme')
    setDarkTheme(enabled)
    try {
      window.localStorage.setItem(darkThemeStorageKey, enabled ? '1' : '0')
    } catch (e) {
      // Ignore storage errors; visual toggle still works.
    }
  }

  function initialize_search() {
    if (document.querySelector('.remark-slides-area') != null) {
      RemarkSearch.create();
      document.addEventListener('keyup', (e) => { if (e.altKey && e.key == 'l') laserToggle() })
      document.addEventListener('keyup', (e) => { if (e.altKey && e.key == 'x') paragraphFocusToggle() })
      document.addEventListener('keyup', (e) => { if (e.altKey && e.key == 'c') toggleColor() })
      document.addEventListener('keyup', (e) => { if (e.metaKey && e.key.toLowerCase() == 'd') toggleDarkTheme() })
    } else setTimeout(initialize_search, 100)
  }

  function toggleColor() {
    const index = themes.indexOf(currentTheme) + 1
    const nextTheme = themes[index >= themes.length ? 0 : index]

    const blocks = document.querySelectorAll(`.hljs-${currentTheme}`)
    console.log(`.hljs-${currentTheme}`)
    console.log(blocks)
    for (const block of blocks){
      block.classList.remove(`hljs-${currentTheme}`)
      block.classList.add(`hljs-${nextTheme}`)
    }

    currentTheme = nextTheme
  }

  function initialize_color() {
    if (document.querySelector('.remark-slides-area') != null) {
      const colorLinks = document.querySelectorAll('a.color')
      for (const link of colorLinks) link.addEventListener('click', (e) => {
        e.preventDefault()
        toggleColor()
      })
    } else setTimeout(initialize_color, 100)
  }


  try {
    setDarkTheme(window.localStorage.getItem(darkThemeStorageKey) === '1')
  } catch (e) {
    setDarkTheme(false)
  }

  setTimeout(initialize_search, 100)
  setTimeout(initialize_color, 100)
}
