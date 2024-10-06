document.addEventListener('DOMContentLoaded', ()=>{
  let input = document.querySelector('form')
  input.addEventListener('submit', (e)=>{
    e.preventDefault()
    let td =(e.target.newTaskdescription.value);
    let dt =(e.target.dateDue.value)
    let prt = (e.target.priorite.value)
    let user =(e.target.userid.value)
    getToDo(td,dt,user,prt)
    input.reset()

  })
  
  function getToDo(todo, date, username, priorities){
  let listitem = document.createElement('li')
  listitem.textContent = `${todo}  Due on: ${date}  ${priorities} user: ${username}`
  listitem.className = 'list-items'
  document.querySelector('#tasks').appendChild(listitem)

  const editButton = document.createElement('button')
  editButton.addEventListener('click', editEvent)
  editButton.textContent = 'EDIT'
  listitem.appendChild(editButton)

  
  
  const delButton = document.createElement('button')
  delButton.addEventListener('click', handleDelete)
  delButton.textContent = 'DELETE'
  listitem.appendChild(delButton)

  const sortbtn = document.createElement('button')
  sortbtn.textContent = 'Sort'
  listitem.appendChild(sortbtn)
 

  if (priorities =='high') {
    listitem.style.color = 'red'
  }else if (priorities == 'medium') {
    listitem.style.color = 'yellow'
  }else if (priorities === 'low') {
    listitem.style.color = 'green'
  }

  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

  function editEvent(e) {
    
  }

 
  

})






