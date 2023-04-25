const myForm = document.getElementById("form");

const regName = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
const regEmail =
   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const regPassword2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//P@ssw0rd
 
const callFunctions = function(e){
    
  e.preventDefault();
      
  validateForm();  
}

myForm.addEventListener("submit",  callFunctions);

const validateForm = function () {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const email = document.getElementById("email").value;

  if (name == "" || name == undefined || !(regName.test(name))) {
    Swal.fire({
      icon: 'error',
      title: 'Please enter a valid name',
      text: 'name cannot be empty!',
      footer: 'Do not use numbers and/or characters'
    })
  } else if (email == "" || email == undefined || !(regEmail.test(email))) {
    Swal.fire({
      icon: 'error',
      title: 'Please enter a valid email',
      text: 'Email cannot be empty!',
      footer: 'Do not use numbers and/or characters'
    })
  }else if (password == "" || password == undefined || !(regPassword.test(password))) {
    Swal.fire({
            icon: 'error',
            title: 'Invalid password',
            text: 'Must have a minimum of 8 characters',
            footer: 'At least 1 lowercase letter, 1 uppercase letter, a special character, a number'
          })
  }else if (password2 == "" || !(password2 == password) || password2 == undefined || !(regPassword.test(password2))) {
    Swal.fire({
            icon: 'error',
            title: 'Password does not match',
            text: 'The 2 passwords must be the same',
            footer: ''
          })
  } else {
  let timerInterval
   Swal.fire({
   title: 'Sending Form!',
   html: 'It can take <b></b> seconds.',
   timer: 2000,
   timerProgressBar: true,
   didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
   willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})

let obj = {
  name: name,
  email: email,
  password: password,
  password2: password2
}
console.log(obj);

  }
};
