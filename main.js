// function saveToLocalStorage(e){
//   e.preventDefault();
//   const name = e.target.username.value;
//   const emailId = e.target.useremail.value;
//   const phonenumber = e.target.usercontact.value;
//   const calltime = e.target.datetime.value;
//   const myObj={
//     username:name,
//     emailId:emailId,
//     phonenumber:phonenumber,
//     calltime:calltime
//   }
//   let myObj_serialised = JSON.stringify(myObj);
//   localStorage.setItem(myObj.emailId,myObj_serialised);
  // localStorage.setItem('customer name',name);
  // localStorage.setItem('customer email',emailId);
  // localStorage.setItem('customer conatct_number',phonenumber);
  // localStorage.setItem('Time of call',calltime);

//showUsersOnScreen(myObj);

//}

function showUsersOnScreen(event){
  event.preventDefault();
  let name = event.target.username.value;
  let email = event.target.useremail.value;
  console.log(name+" "+email);
  let parentElement= document.getElementById('listOfItems');
  let childElement = document.createElement('li');
  childElement.textContent = name+" "+email;
  parentElement.appendChild(childElement);
}
