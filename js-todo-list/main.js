// TO DO
document.addEventListener('DOMContentLoaded', function(){
  let list = document.querySelector('ul')
  checked_deleted()

  document.querySelector('#addBtn').addEventListener('click', function(){
    let li = document.createElement('li')
    let span = document.createElement('span')
    let thing = document.querySelector('#input').value
    span.classList.add('close')
    span.innerHTML = 'x'
    li.innerHTML = thing
    li.appendChild(span)
    list.insertAdjacentElement('beforeend', li)

    checked_deleted()
  })
})

function checked_deleted(){
  const list_item = document.querySelectorAll('li')
  const deleteBtn = document.querySelectorAll('.close')

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
}


  // MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  // // define a new observer
  // var obs = new MutationObserver(function(mutations, observer) {
  //   // look through all mutations that just occured
  //   for(var i=0; i<mutations.length; ++i) {
  //       // look through all added nodes of this mutation
  //       for(var j=0; j<mutations[i].addedNodes.length; ++j) {
  //               console.log(mutations[i].addedNodes)
  //               let list_item = document.querySelector('li:last-child')
  //               let deleteBtn = document.querySelector('li:last-child .close')
  //               list_item.addEventListener('click', function(){
  //                 list_item.classList.toggle('checked')
  //               })
              
  //               deleteBtn.addEventListener('click', function(){
  //                 list_item.remove()
  //               })
  //       }
  //   }
  // });
  // // have the observer observe foo for changes in children
  // obs.observe(list, {
  //   childList: true
  // });
