const name = document.querySelector('#name');
const email = document.querySelector('#email');
const username = document.querySelector('#username')
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword');
const message = document.querySelector('#message')
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    

let btn = document.querySelector('.btn');

btn.addEventListener('click', (event)=>{
    event.preventDefault();
})

btn.addEventListener('click', () => {
    
    if(email.value === "")
    {
        message.innerHTML = "Please enter the email"
        message.style.color='red';
    }   
    else if(!email.value.match(regex))
    {
        message.innerHTML = "Please enter a valid email"
        message.style.color='red';
    }
    else if(password.value === "")
    {
        message.innerHTML = "Please enter the password"
        message.style.color='red';
    }   
    else if(password.value.length < 6)
    {
        message.innerHTML = "Length of password must contain 6 characters"
        message.style.color='red';
    }
    else if(repassword.value === "")
    {
        message.innerHTML = "Please re-enter the password"
        message.style.color='red';
    }   
    else if(password.value !== repassword.value)
    {
        message.innerHTML = "password does not match"
        message.style.color='red';
    }   
    else{
        firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    
    var d = new Date().toLocaleDateString();
    const userData ={
        FullName: name.value,
        email: email.value,
        username: username.value,
        password: password.value,
        repassword: repassword.value,
        uid: userCredential.user.uid,
        Signupdate: `${d}`
    }
    firebase.firestore().collection("users").doc(userCredential.user.uid).set(userData)
    .then(() =>{
        message.innerHTML = "Account was successfully created";
        message.style.color='green';

        //send email verification code on email

        const user = firebase.auth().currentUser;
        user.sendEmailVerification()
        .then((res) => {
            setTimeout(() =>{
            window.location.assign("./emailVerificationSer.html")
        },2000)
    })
    })
  })
  .catch((error) => {
    message.innerHTML= error.message;
    message.style.color = 'red';
  });
}
});