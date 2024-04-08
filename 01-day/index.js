const photos=document.querySelectorAll('.photo')

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