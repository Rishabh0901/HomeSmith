const email = document.querySelector('#email');
const password = document.querySelector('#password');
const message = document.querySelector('#message');
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let btn = document.querySelector('.btn');

btn.addEventListener('click', (event)=>{
    event.preventDefault();
})

btn.addEventListener('click', ()=>{
    if(email.value === "")
    {
        message.innerHTML = "Email address is required"
        message.style.color = "red"
    }
    else if(!email.value.match(regex))
    {
        message.innerHTML = "please enter a valid email address"
        message.style.color='red';
    }
    else if(password.value === "")
    {
        message.innerHTML = "Password required"
        message.style.color = "red"
    }
    else
    {
        const userData ={
            email: email.value,
            password: password.value,
        }
        firebase.auth().signInWithEmailAndPassword(userData.email, userData.password)
  .then((userCredential) => {
    message.innerHTML = "Sign in successfully";;
    message.style.color = 'green';
    if(userCredential.user.emailVerified)
    {
        console.log('c');
        window.location.assign('./index.html');
    }
    else{
        console.log('d');
        window.location.assign('./emailVerificationUser.html');
    }
  })
  .catch((error) => {
    message.innerHTML = "Wrong credentials entered";
    message.style.color = 'red';
  });
    }
})


//Forgot password

const forget = document.querySelector('.forget');

forget.addEventListener('click', ()=>{
    window.location.assign('./ForgetPassword.html');
})