const photos=document.querySelectorAll('.photo')

/* 为phtot添加或删除类名active */
photos.forEach(photo => {
    photo.addEventListener('click',()=>{
        removeactiveclass()
        photo.classList.add("active")
    })
})
/* 创建一个函数 */
/* 为未被点击的图片删除类名active */
function removeactiveclass(){
    photos.forEach(photo=>{
        photo.classList.remove('active')
    })
}