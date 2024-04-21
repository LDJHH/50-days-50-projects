/* 获取id */
const opens=document.getElementById('open')
const closes=document.getElementById('close')
const conters=document.querySelector('.conter')

/* 创建点击事件 */
/* 主要是在点击的时候添加类名 */
opens.addEventListener('click',()=>conters.classList.add('show-nav'))
closes.addEventListener('click',()=>conters.classList.remove('show-nav'))
