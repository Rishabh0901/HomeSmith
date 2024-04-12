const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
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
        message.innerHTML = "Please enter the Email"
        message.style.color='red';
    }   
    else if(!email.value.match(regex))
    {
        message.innerHTML = "Please enter a valid Email"
        message.style.color='red';
    }
    else if(password.value === "")
    {
        message.innerHTML = "Please enter the password"
        message.style.color='red';
    }   
    else if(password.value.length < 6)
    {
        message.innerHTML = "length of password must contain 6 digit"
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
        FirstName: firstName.value,
        LastName: lastName.value,
        email: email.value,
        username: username.value,
        password: password.value,
        repassword: repassword.value,
        uid: userCredential.user.uid,
        Signupdate: `${d}`
    }
    firebase.firestore().collection("users").doc(userCredential.user.uid).set(userData)
    .then((res) =>{
        message.innerHTML = "Account was successfully created";
        message.style.color='green';

        //send email verification code on email

        const user = firebase.auth().currentUser;
        user.sendEmailVerification()
        .then((res) => {
            setTimeout(() =>{
            window.location.assign("./emailVerificationUser.html")
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
