const bars =document.querySelector('.bars')
const nav =document.querySelector('.navbar')

bars.addEventListener('click' ,()=>{
   nav.classList.toggle('active')
})