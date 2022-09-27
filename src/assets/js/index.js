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



// Giscus commenting system
// let s = document.createElement('script')
// s.setAttribute('src', 'https://giscus.app/client.js')
// s.setAttribute('data-repo','jeffchiou/website')
// s.setAttribute('data-repo-id','MDEwOlJlcG9zaXRvcnkzMTUxODEwNTY=')
// s.setAttribute('data-category','Announcements')
// s.setAttribute('data-category-id','DIC_kwDOEslIAM4CRqk9')
// s.setAttribute('data-mapping','pathname')
// s.setAttribute('data-strict','0')
// s.setAttribute('data-reactions-enabled','1')
// s.setAttribute('data-emit-metadata','0')
// s.setAttribute('data-input-position','top')
// s.setAttribute('data-theme','light')
// s.setAttribute('data-lang','en')
// s.setAttribute('crossorigin','anonymous')
// s.setAttribute('async','')
// let s2 = s.cloneNode(true)


let aux = document.querySelector("#auxiliary-content")
let auxDiv = document.querySelector("#auxiliary-controls")
if (aux) {
  auxCopy = insertClone(auxDiv,aux,"auxiliary","aux-unique")
} else {
  auxCopy = insertClone(auxDiv,main,"auxiliary","aux-copied")
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

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

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

function waitForStyleAttribute(target) {
  return new Promise(resolve => {
    let timer
    const observer = new MutationObserver(mutations => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        mutations.forEach( (mutation) => {
          if (mutation.type === 'attributes') {
            observer.disconnect()
            resolve(target)
          }
        })
      }, 1000)
    })
    observer.observe(target, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeList: ['style']
    })
  })
}


waitForEl(document.body, '.giscus-frame').then((frame) => {
  let s = document.createElement('div')
  s.setAttribute('class', 'giscus')
  let s2 = s.cloneNode(false)
  let f = frame.cloneNode(true)
  let f2 = f.cloneNode(true)
  s.appendChild(f)
  s2.appendChild(f2)
  mainCopy.appendChild(s)
  auxCopy.appendChild(s2)
  waitForStyleAttribute(frame).then((frame2) => {
    console.log(frame2.getAttribute('style'))
    f.setAttribute('style', frame2.getAttribute('style'))
    f2.setAttribute('style', frame2.getAttribute('style'))
  })
})



// waitForEl(document.body, '.giscus-frame[style*="height"]').then((elm) => {
//   console.log("found")
//   waitForStyleAttribute(elm).then((elm2) => {
//     console.log("appending")
//     let s = document.createElement('div')
//     s.setAttribute('class', 'giscus')
//     let s2 = s.cloneNode(false)
//     let f = elm.cloneNode(true)
//     // f.setAttribute('style', elm.getAttribute('style'))
//     let f2 = f.cloneNode(true)
//     s.appendChild(f)
//     s2.appendChild(f2)
//     console.log("appending")
    
//     mainCopy.appendChild(s)
//     auxCopy.appendChild(s2)
//   })
// })





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

