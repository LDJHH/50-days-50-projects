/* 获取类名 */
const search=document.querySelector('.search')
const input=document.querySelector('.input')
const but=document.querySelector('.but')

/* 创建一个点击事件 */
/* 为but增加或删减类名 */
/* 同时也为了在点击时给input一个焦点 */
but.addEventListener('click',()=>{
     search.classList.toggle('active')
     input.focus()
})