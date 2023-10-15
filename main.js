function saveToLocalStorage(e){
  e.preventDefault();
  const name = e.target.username.value;
  const emailId = e.target.useremail.value;
  const phonenumber = e.target.usercontact.value;
  const calltime = e.target.datetime.value;
  const myObj={
    username,
    emailId,
    phonenumber,
    calltime
  }
  axios.post('https://crudcrud.com/api/9346a909c2374d7b93649fa58002c0ed/appointmentdata',obj)
  let myObj_serialised = JSON.stringify(myObj);
  //localStorage.setItem(myObj.emailId,myObj_serialised);
  showUsersOnScreen(myObj);

}

function showUsersOnScreen(obj){
  let parentElement= document.getElementById('listOfItems');
  let childElement = document.createElement('li');
  childElement.textContent = obj.username+" "+obj.emailId;
  // add delete button
 let deleteButton = document.createElement('input');
 deleteButton.type = 'button';
 deleteButton.value = 'Delete';
 deleteButton.className = 'btn2';
 deleteButton.onclick = ()=>{
  localStorage.removeItem(obj.emailId);
  parentElement.removeChild(childElement);
 }

 // add edit button 
 let editButton = document.createElement('input');
 editButton.type = 'button';
 editButton.value = 'Edit';
 editButton.className = 'btn3';
 editButton.onclick = ()=>{
    localStorage.removeItem(obj.emailId);
    parentElement.removeChild(childElement);
    document.getElementById('name').value = obj.username;
    document.getElementById('email').value = obj.emailId;
    document.getElementById('contactNo').value = obj.phonenumber;
    document.getElementById('timeofcall').value = obj.calltime;
 }
 childElement.appendChild(deleteButton);
 childElement.appendChild(editButton);
  parentElement.appendChild(childElement);
}
