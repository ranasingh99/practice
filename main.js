function saveToLocalStorage(e){
  e.preventDefault();
  const name = e.target.username.value;
  const emailId = e.target.useremail.value;
  const phonenumber = e.target.usercontact.value;
  const calltime = e.target.datetime.value;
  const myObj={
    username:name,
    emailId:emailId,
    phonenumber:phonenumber,
    calltime:calltime
  }
  let myObj_serialised = JSON.stringify(myObj);
  localStorage.setItem(myObj.emailId,myObj_serialised);
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
 childElement.appendChild(deleteButton);
  parentElement.appendChild(childElement);
}
