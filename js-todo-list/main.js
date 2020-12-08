// TO DO
document.addEventListener('DOMContentLoaded', function(){
  let list_item = document.querySelectorAll('li')

  document.querySelector('#addBtn').addEventListener('click', function(){
    let list = document.querySelector('ul')
    list.insertAdjacentElement('beforeend', addListItem())
  })
  
  for (let i = 0; i < list_item.length; i++){
    list_item[i].addEventListener('click', function(){
      list_item[i].classList.toggle('checked')
    })
  }
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
