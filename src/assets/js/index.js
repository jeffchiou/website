let notices = document.querySelectorAll('.copyright-notice')
for (notice of notices) {
  notice.innerHTML = "2019-" + new Date().getFullYear()
}

augEls('h1', "t-clip-x b-clip-x l-clip-y r-clip-y border")
augEls('h2', "tl-clip br-clip bl-clip-x border")
augEls('h3', "l-clip-y border inlay")
augEls('.nava', 'bl-clip tr-clip border', 'nava', false)
function wrap(elToWrap, wrapper) {
  elToWrap.parentNode.insertBefore(wrapper, elToWrap)
  wrapper.appendChild(elToWrap)
}

function augEls(query, augs, name = null, extraWrap = true) {
  let els = document.querySelectorAll(query)
  for (const el of els) {
    name = name ? name : query
    if (extraWrap) {
      let d = document.createElement('div')
      d.classList.add(`auged-${name}-wrapper`)
      wrap(el, d)
    }
    el.classList.add(`auged-${name}`)
    el.setAttribute("data-augmented-ui", augs)
  }
  return els
}


const insertClone = (target, elToClone, id = null, _class = null) => {
  let newEl = elToClone.cloneNode(true)
  id ? newEl.id = id : newEl.removeAttribute('id')
  newEl.classList.remove("hidden")
  if (_class) newEl.classList.add(_class)
  let parent = target.parentNode
  parent.insertBefore(newEl, target)
  return newEl
}

let main = document.querySelector("main")
let copyDiv = document.querySelector("#main-copy-controls")
let mainCopy = insertClone(copyDiv, main, "main-copy")
mainCopy.style.width = main.style.width

let aux = document.querySelector("#auxiliary-content")
let auxDiv = document.querySelector("#auxiliary-controls")
if (aux) {
  auxCopy = insertClone(auxDiv, aux, "auxiliary", "aux-unique")
} else {
  auxCopy = insertClone(auxDiv, main, "auxiliary", "aux-copied")
}

// Prevent duplication of comments if they loaded quickly
let commentCheck1 = mainCopy.querySelector('.giscus')
if (commentCheck1) {
  commentCheck1.remove()
}
let commentCheck2 = auxCopy.querySelector('.giscus')
if (commentCheck2) {
  commentCheck2.remove()
}

// Use giscus' event listener method to resize the iframe
function waitForEl(target, selector) {
  return new Promise(resolve => {
    const observer = new MutationObserver(mutations => {
      if (target.querySelector(selector)) {
        observer.disconnect()
        resolve(target.querySelector(selector))
      }
    })
    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true
    })
  })
}

let f
let f2
waitForEl(document.body, '.giscus-frame').then((frame) => {
  let s = document.createElement('div')
  s.setAttribute('class', 'giscus')
  let s2 = s.cloneNode(false)
  f = frame.cloneNode(true)
  f2 = f.cloneNode(true)
  s.appendChild(f)
  s2.appendChild(f2)
  mainCopy.appendChild(s)
  auxCopy.appendChild(s2)
})

window.addEventListener('message', (event) => {
  if (event.origin !== "https://giscus.app") return
  const { data } = event
  if (!(typeof data === 'object' && data.giscus)) return
  if (data.giscus.resizeHeight) {
    f.style.height = `${data.giscus.resizeHeight}px`
    f2.style.height = `${data.giscus.resizeHeight}px`
  }
})
