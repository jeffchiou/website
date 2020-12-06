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


let main = document.querySelector("main")
let copyDiv = document.querySelector("#main-copy-controls")
let mainCopy = insertClone(copyDiv,main,"main-copy")
mainCopy.style.width = main.style.width

// Utterances commenting system
let s = document.createElement('script')
s.setAttribute('src', 'https://utteranc.es/client.js')
s.setAttribute('repo','jeffchiou/website')
s.setAttribute('label','💬')
s.setAttribute('issue-term','pathname')
s.setAttribute('theme','boxy-light')
s.setAttribute('crossorigin','anonymous')
s.setAttribute('defer','')
let s2 = s.cloneNode(true)


let aux = document.querySelector("#auxiliary-content")
let auxDiv = document.querySelector("#auxiliary-controls")
if (aux) {
  auxCopy = insertClone(auxDiv,aux,"auxiliary","aux-unique")
} else {
  auxCopy = insertClone(auxDiv,main,"auxiliary","aux-copied")
}

mainCopy.appendChild(s)
auxCopy.appendChild(s2)

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// Try to avoid hammering the github search api if changing pages quickly
// sleep(500).then( () => mainCopy.appendChild(s) )
// sleep(1000).then( () => auxCopy.appendChild(s2) )
// async function checkComments(mainCopy, auxCopy) {
//   let utterances;
//   for (let i=0; i<30; i++) {
//     await sleep(1000);
//     utterances = document.querySelector('.utterances')
//     if (utterances) {
//       await sleep(1000)
//       break;
//     }
//   }
//   console.log(utterances)
//   mainCopy.append(utterances)
//   auxCopy.append(utterances)
// }
// checkComments(mainCopy, auxCopy)

