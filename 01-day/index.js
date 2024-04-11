const photos=document.querySelectorAll('.photo')

/* 为phtot添加或删除类名active */
photos.forEach(photo => {
    photo.addEventListener('click',()=>{
        removeactiveclass()
        photo.classList.add("active")
    })
})
function removeactiveclass(){
    photos.forEach(photo=>{
        photo.classList.remove('active')
    })
}