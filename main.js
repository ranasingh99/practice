function saveToLocalStorage(e){
  e.preventDefault();
  const name = e.target.username.value;
  const emailId = e.target.useremail.value;
  const phonenumber = e.target.usercontact.value;
  const calltime = e.target.datetime.value;
  const myObj={
    name,
    emailId,
    phonenumber,
    calltime
  }
  axios.post('https://crudcrud.com/api/ce7940cb620a49ef8603db37ae5c17d3/appointmentData',myObj)
  .then((res)=>{
    showUsersOnScreen(res.data)
  })
  .catch((error)=>{
    document.body.innerHTML = document.body.innerHTML + "<h4>somtheing went wrong</h4>";
    console.log(error)
  })
  //let myObj_serialised = JSON.stringify(myObj);
  //localStorage.setItem(myObj.emailId,myObj_serialised);
  //showUsersOnScreen(myObj);

}
window.addEventListener('DOMContentLoaded',()=>{
  axios.get('https://crudcrud.com/api/ce7940cb620a49ef8603db37ae5c17d3/appointmentData')
.then((res)=>{
  console.log(res)
  for(var i =0;i<res.data.length;i++){
    showUsersOnScreen(res.data[i]);
  }
})
.catch((error)=>{
  console.group(error)
})

})

function showUsersOnScreen(obj){
  let parentElement= document.getElementById('listOfItems');
  let childElement = document.createElement('li');
  childElement.textContent = obj.name+" "+obj.emailId;
  // add delete button
 let deleteButton = document.createElement('input');
 deleteButton.type = 'button';
 deleteButton.value = 'Delete';
 deleteButton.className = 'btn2';
 deleteButton.onclick = ()=>{
  //localStorage.removeItem(obj.emailId);
  parentElement.removeChild(childElement);
 }

 // add edit button 
 let editButton = document.createElement('input');
 editButton.type = 'button';
 editButton.value = 'Edit';
 editButton.className = 'btn3';
 editButton.onclick = ()=>{
   // localStorage.removeItem(obj.emailId);
    parentElement.removeChild(childElement);
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('contactNo').value = ''
    document.getElementById('timeofcall').value = ''
 }
 childElement.appendChild(deleteButton);
 childElement.appendChild(editButton);
  parentElement.appendChild(childElement);
}
