
// import { Coord } from "coordiscroll.js"

let notices = document.querySelectorAll('.copyright-notice')
for (notice of notices) {
  notice.innerHTML = "2019-" + new Date().getFullYear()
}

augEls('h1',"t-clip-x b-clip-x l-clip-y r-clip-y border")
augEls('h2',"tl-clip br-clip bl-clip-x border")
augEls('h3',"l-clip-y border inlay")
augEls('.nava', 'bl-clip tr-clip border', 'nava', false)
function wrap(elToWrap, wrapper) {
  elToWrap.parentNode.insertBefore(wrapper, elToWrap)
  wrapper.appendChild(elToWrap)
}

function augEls(query, augs, name=null, extraWrap=true) {
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


const insertClone = (target, elToClone, id=null, _class=null) => {
  let newEl = elToClone.cloneNode(true)
  id ? newEl.id=id : newEl.removeAttribute('id')
  newEl.classList.remove("hidden")
  if (_class) newEl.classList.add(_class)
  let parent = target.parentNode
  parent.insertBefore(newEl, target) 
  return newEl
}

// let [accs, chs] = Coord.fullyConnect(".my_element_class")

let main = document.querySelector("main")
let copyDiv = document.querySelector("#main-copy-controls")
let mainCopy = insertClone(copyDiv,main,"main-copy")
mainCopy.style.width = main.style.width

let aux = document.querySelector("#auxiliary-content")
let auxDiv = document.querySelector("#auxiliary-controls")
aux ? insertClone(auxDiv,aux,"auxiliary","aux-unique") : insertClone(auxDiv,main,"auxiliary","aux-copied")


