const search=document.querySelector('.search')
const input=document.querySelector('.input')
const but=document.querySelector('.but')

but.addEventListener('click',()=>{
     search.classList.toggle('active')
     input.focus()
})