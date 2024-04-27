const box=document.querySelectorAll('.box')

window.addEventListener('scroll',checkbox);

checkbox()

function checkbox(){
    const botton=window.innerHeight/5*4;

    box.forEach(box=>{
        const boxtop=box.getBoundingClientRect().top
        if (boxtop<botton) {
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}