// TO DO
document.addEventListener('DOMContentLoaded', function(){
  let list = document.querySelector('ul')
  checked_deleted()
  document.querySelectorAll('li').forEach(function(li){
    drag(li)
  })
  

  document.querySelector('#addBtn').addEventListener('click', function(){
    let input = document.querySelector('#input').value
    if (input != ''){
      let li = document.createElement('li')
      let span = document.createElement('span')
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
      drag(li)
      
      list.insertAdjacentElement('beforeend', li)
      document.querySelector('#input').value = ""
    }

  })
})

function checked_deleted(){
  let list = document.querySelector('ul')
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

function drag(li){
  li.setAttribute('draggable', true)
  li.addEventListener('drag', function (e) {
    // console.log(e);
    let selectItem = e.target,
      x = e.clientX,
      y = e.clientY
    let swapItem = document.elementFromPoint(x, y)
    // console.log(x, y);
    if (selectItem !== swapItem && document.querySelector('ul') === swapItem.parentNode) {
      if (selectItem.nextSibling === swapItem) {
        // console.log(selectItem.nextSibling);
        // console.log('true');
        selectItem.insertAdjacentElement('beforebegin', swapItem)
      } else {
        // console.log('false');
        // console.log(selectItem.nextSibling);
        selectItem.insertAdjacentElement('afterend', swapItem)
      }
    }
  })
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
  // })
