// TO DO
document.addEventListener('DOMContentLoaded', function(){
  document.querySelector('#addBtn').addEventListener('click', function(){
    let list = document.querySelector('ul')
    list.insertAdjacentElement('beforeend', addListItem())
  })
})

function addListItem(){
  let li = document.createElement('li')
  let span = document.createElement('span')
  let thing = document.querySelector('#input').value
  span.classList.add('close')
  span.innerHTML = 'x'
  li.innerHTML = thing
  li.appendChild(span)
  return li
}
