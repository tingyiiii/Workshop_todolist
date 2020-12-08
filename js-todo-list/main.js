// TO DO
document.addEventListener('DOMContentLoaded', function(){
  let list_item = document.querySelectorAll('li')
  let deleteBtn = document.querySelectorAll('.close')
  let list = document.querySelector('ul')

  document.querySelector('#addBtn').addEventListener('click', function(){
    list.insertAdjacentElement('beforeend', addListItem())
  })
  
  for (let i = 0; i < list_item.length; i++){
    list_item[i].addEventListener('click', function(){
      list_item[i].classList.toggle('checked')
    })
  }

  for (let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', function(){
      list_item[i].remove()
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
