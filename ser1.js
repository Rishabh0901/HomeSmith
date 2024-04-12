
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// for review
let r=document.querySelector('#review')
let ris = document.querySelector('.y');
let con=document.querySelector('.model-container');
let mod=document.querySelector('.model');
let btn = document.querySelector('.hello');

r.addEventListener('click', function() {
    console.log("#review");
    con.style.transform = 'scale(1)';
    mod.style.transform = 'scale(1)';
    
      btn.style.transform = 'scale(1)';
    })
btn.addEventListener('click', function() {
    console.log("profile");
    con.style.transform = 'scale(0)';
    mod.style.transform = 'scale(0)';
      btn.style.transform = 'scale(0)';
    })
  
  
ris.addEventListener('click', function() {
    console.log("profile");
    con.style.transform = 'scale(0)';
    mod.style.transform = 'scale(0)';
      btn.style.transform = 'scale(0)';
    })
  

// let nosub=document.querySelector(".hello")
//   nosub.addEventListener("submit",(event) =>{
//       event.preventDefault()
// })

let inp = document.querySelector('.inp');
let ul = document.querySelector('ul');

btn.addEventListener('click', function()
{
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    inp.value = "";
});

let addtocart = document.querySelector(".add-to-cart")
console.log(addtocart.innerText)

addtocart.addEventListener("click", ()=>{
  if(addtocart.innerText == "Add to Cart")
{
  addtocart.innerText= "Remove from Cart"
}
else
{
  addtocart.innerText= "Add to Cart"
}
})

// for profile
let p=document.querySelector('.profile')
let ris2 = document.querySelector('#x');
let cont=document.querySelector('.model-container1');
let model=document.querySelector('.model1');
let bt = document.querySelectorAll('.model1 button');
p.addEventListener('click', function() {
  console.log("profile");
  cont.style.transform = 'scale(1)';
  model.style.transform = 'scale(1)';
  bt.forEach(btnx =>{
    btnx.style.transform = 'scale(1)';
  })
})

ris2.addEventListener('click', function() {
  console.log("profile");
  cont.style.transform = 'scale(0)';
  model.style.transform = 'scale(0)';
  bt.forEach(btnx =>{
    btnx.style.transform = 'scale(0)';
  })
})