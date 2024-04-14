const opens=document.getElementById('open')
const closes=document.getElementById('close')
const conters=document.querySelector('.conter')

opens.addEventListener('click',()=>conters.classList.add('show-nav'))
closes.addEventListener('click',()=>conters.classList.remove('show-nav'))
