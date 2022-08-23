document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildEvents(e.target.newtaskdescription.value)
    form.reset()
  })
}); 

function buildEvents (todo) {
  let p = document.createElement('p')
  p.textContent = `${todo}  `
  let btn = document.createElement('button')
  btn.textContent= 'x'
  btn.addEventListener('click', handleDelete)
  document.querySelector('ul').appendChild(p)
  p.appendChild(btn)
}

function handleDelete(e) {
  e.target.parentNode.remove()
}