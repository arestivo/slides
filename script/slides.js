const hljs = remark.highlighter.engine;

const query = window.location.search
const params = new URLSearchParams(query)
const slides = params.get('s')

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

  function initialize_search() {
    if (document.querySelector('.remark-slides-area') != null) {
      RemarkSearch.create();
      document.addEventListener('keyup', (e) => { if (e.key == 'l') laserToggle() })
      document.addEventListener('keyup', (e) => { if (e.key == 'x') paragraphFocusToggle() })
    } else setTimeout(initialize_search, 100)
  }

  function initialize_color() {
    if (document.querySelector('.remark-slides-area') != null) {
      const colorLinks = document.querySelectorAll('a.color')
      for (const link of colorLinks) link.addEventListener('click', (e) => {
        e.preventDefault()

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
      })
    } else setTimeout(initialize_color, 100)
  }


  setTimeout(initialize_search, 100)
  setTimeout(initialize_color, 100)
}