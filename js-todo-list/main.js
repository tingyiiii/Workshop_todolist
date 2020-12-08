// TO DO
document.addEventListener('DOMContentLoaded', function(){
  let list = document.querySelector('ul')

  checked_deleted()

  document.querySelector('#addBtn').addEventListener('click', function(){
    if (input != ''){
      let li = document.createElement('li')
      let span = document.createElement('span')
      let input = document.querySelector('#input').value
      span.classList.add('close')
      span.innerHTML = 'x'
      li.innerHTML = input
      li.appendChild(span)
      li.addEventListener('click', function(){
        li.classList.toggle('checked')
      })
      span.addEventListener('click', function(){
        li.remove()
      })
      // set li draggable="true"
      let att = document.createAttribute("draggable")
      att.value = "true"    
      li.setAttributeNode(att);
  
      list.insertAdjacentElement('beforeend', li)
      document.querySelector('#input').value = ""
    }

  })
})

function checked_deleted(){
  const list_item = document.querySelectorAll('li')
  const deleteBtn = document.querySelectorAll('.close')
  let list = document.querySelector('ul')

  for (let i = 0; i < list_item.length; i++){
    list_item[i].addEventListener('click', function(){
      list_item[i].classList.toggle('checked')
    })
    let att = document.createAttribute("draggable")
    att.value = "true"
    list_item[i].setAttributeNode(att);

    list_item[i].addEventListener('drag', function(){
      list_item[i].remove()
    })
    
    list_item[i].addEventListener('dragend', function(){
      list.append(list_item[i])
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
