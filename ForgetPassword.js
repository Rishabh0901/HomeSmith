let back = document.querySelector('#back');
let reset = document.querySelector('#forgetbtn');
let message = document.querySelector('#message');

back.addEventListener('click', ()=> {
    window.location.assign('./signin.html');
})

let email = document.querySelector('#email');

reset.addEventListener('click', ()=>{
    if(email.value === "")
    {
        message.innerHTML = "Email Address is required";
        message.computedStyleMap.color = "red";
        email.focus()
    }
    firebase.auth().sendPasswordResetEmail(email.value)
    .then(() => {
        alert('Reset link has been sent on your email!');
    })
    .catch((error) => {
        message.innerHTML = error.message;
        message.style.color = "red";
    });
})