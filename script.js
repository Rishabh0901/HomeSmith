let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//    navbar.classList.toggle('active');
// }

window.onscroll = () =>{
   navbar.classList.remove('active');
}

let faBars = document.querySelector('#menu-btn');
faBars.addEventListener('click',() => {
  faBars.classList.toggle('.active');
  navbar.classList.toggle('show'); 
  console.log('BUDHUUUU');
  console.log(navbar);
  console.log(faBars);
})

// const navbar = document.querySelector('.header .navbar');

// faBars.addEventListener('click', () => {
//    // Toggle active class on click
//     // Add/remove 'show' class for the navbar (optional)
// });
// console.log('clicked fabars');



let p=document.querySelector('.profile')
let ris = document.querySelector('.fa-times');
let con=document.querySelector('.model-container');
let mod=document.querySelector('.model');
let btn = document.querySelectorAll('.model button');
// p.addEventListener('click', function() {
//   console.log("profile");
//   con.style.transform = 'scale(1)';
  // con.classList.toggle('x');
  // mod.classList.toggle('y');
  // btn.forEach(btnx =>{
  //   btnx.classList.toggle('z');
  // })
// })
p.addEventListener('click', function() {
  console.log("profile");
  con.style.transform = 'scale(1)';
  mod.style.transform = 'scale(1)';
  btn.forEach(btnx =>{
    btnx.style.transform = 'scale(1)';
  })
})

ris.addEventListener('click', function() {
  console.log("profile");
  con.style.transform = 'scale(0)';
  mod.style.transform = 'scale(0)';
  btn.forEach(btnx =>{
    btnx.style.transform = 'scale(0)';
  })
})


var swiper = new Swiper(".home-slider", {
   loop:true,
   autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
   scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });



  // let home = document.querySelector('.home');
  let logo = document.querySelector('.logo');
  logo.addEventListener('click',function(){
    document.querySelector('.home');
  })


  /*Button for swiper image */
  let s1 = document.querySelector('.s1');
  s1.addEventListener('click',function(){
    console.log('s1 image clicked');
  })

  let s2 = document.querySelector('.s2');
  s2.addEventListener('click',function(){
    console.log('s2 image clicked');
    document.querySelector('.home');
  })

  let s3 = document.querySelector('.s3');
  s3.addEventListener('click',function(){
    console.log('s3 image clicked');
    document.querySelector('.home');
  })

  let s4 = document.querySelector('.s4');
  s4.addEventListener('click',function(){
    console.log('s4 image clicked');
    document.querySelector('.home');
  })



  /*Button for swiper image */
  let btn1 = document.querySelector('.btn1');
  btn1.addEventListener('click',function(){
    console.log('btn1 image clicked');
  })

  let btn2 = document.querySelector('.btn2');
  btn2.addEventListener('click',function(){
    console.log('btn2 image clicked');
    document.querySelector('.home');
  })

  let btn3 = document.querySelector('.btn3');
  btn3.addEventListener('click',function(){
    console.log('btn3 image clicked');
    document.querySelector('.home');
  })

  let btn4 = document.querySelector('.btn4');
  btn4.addEventListener('click',function(){
    console.log('btn4 image clicked');
    document.querySelector('.home');
  })

  // sign-out

  let logout = document.querySelector('#sign-out')

logout.addEventListener('click', () =>{
  firebase.auth().signOut().then(() => {
    window.location.assign('./signin.html');
  })
})


//copy paste in each page having signout

// let logout = document.querySelector('#sign-out')

// logout.addEventListener('click', () =>{
//   firebase.auth().signOut().then(() => {
//     window.location.assign('./signin.');
//   })
// })
let searchbar = document.querySelector("#search-bar")
  let searchbtn = document.querySelector("#search-button")
  
  

  searchbtn.addEventListener("click", ()=>{
    console.log("click")
    if(searchbar.value === "Mopping")
    {
      console.log("click")
      window.location.href="./ser1.html"
    }
    else if(searchbar.value === "mopping")
    {
      window.location.href="./ser1.html"
    }
    else if(searchbar.value === "brooming")
    {
      window.location.href="./ser1.html"
    }
    else if(searchbar.value === "Mopping and Brooming")
    {
      window.location.href="./ser1.html"
    }
    else if(searchbar.value === "mopping and brooming")
    {
      window.location.href="./ser1.html"
    }
    else if(searchbar.value === "Mopping and brooming")
    {
      window.location.href="./ser1.html"
    }
    else if(searchbar.value === "Laundary")
    {
      window.location.href="./ser2.html"
    }
    else if(searchbar.value === "laundary")
    {
      window.location.href="./ser2.html"
    }
    else if(searchbar.value === "Dish Washing")
    {
      window.location.href="./ser3.html"
    }
    else if(searchbar.value === "Dish")
    {
      window.location.href="./ser3.html"
    }
    else if(searchbar.value === "dish washing")
    {
      window.location.href="./ser3.html"
    }
    else if(searchbar.value === "Dish cleaning")
    {
      window.location.href="./ser3.html"
    }
    else if(searchbar.value === "utensil washing")
    {
      window.location.href="./ser3.html"
    }
    else if(searchbar.value === "cooking")
    {
      window.location.href="./ser4.html"
    }
    else if(searchbar.value === "Cooking")
    {
      window.location.href="./ser4.html"
    } 
    
  })
