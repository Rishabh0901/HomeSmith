let p=document.querySelector('.profile')
let ris2 = document.querySelector('.x');
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