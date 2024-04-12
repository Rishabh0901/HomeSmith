let email = document.querySelector('#emailid')
let message = document.querySelector('#message')

firebase.auth().onAuthStateChanged((user) => {
    if (user) 
    {
        if(user.emailVerified)
        {
            window.location.assign("./index.html");
        }
        else
        {
            email.innerHTML = user.email
        }
    } 
    else 
    {
         window.location.assign("./signin.html")
    }
  });


  const resend = () =>{
    // firebase.auth().sendEmailVerification()
    // .then(() =>{
        message.innerHTML = "A verification code has been send to your email address.";
        message.style.color = 'green';
        message.style.marginBottom = '15px';
    // })
  }
  let btn1 = document.querySelector('.btn1');
  btn1.addEventListener('click', () => {
  resend();
})


const reload = () => {
    location.reload();
}
let btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', () =>{
    reload();
})