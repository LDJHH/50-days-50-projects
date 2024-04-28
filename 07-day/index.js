const left=document.querySelector('.left')
const right=document.querySelector('.right')
const conter=document.querySelector('.conter')

left.addEventListener('mouseenter',()=>conter.classList.add('hover-left'))
left.addEventListener('mouseleave',()=>conter.classList.remove('hover-left'))

right.addEventListener('mouseenter',()=>conter.classList.add('hover-right'))
right.addEventListener('mouseleave',()=>conter.classList.remove('hover-right'))
