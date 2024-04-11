const jingdus=document.getElementById('jingdua')
const perv=document.getElementById('perv')
const next=document.getElementById('next')
const math=document.querySelectorAll('.math')

let sum=1;

next.addEventListener('click',()=>{
    sum++
    if(sum>math.length){
        sum=math.length
    }
    date()
})

perv.addEventListener('click',()=>{
    sum--
    if(sum<1){
        sum=1
    }
    date()
})

function date(){
    math.forEach((math,idx)=>{
        if (idx<sum) {
            math.classList.add('active')
        }else{
            math.classList.remove('active')
        }
    })

    const active=document.querySelectorAll('.active')    
    jingdua.style.width=(active.length-1)/(math.length-1)*100+'%'
    if(sum===1){
        perv.disabled=true
    }else if (sum===math.length){
        next.disabled=true
    }else{
        perv.disabled=false
        next.disabled=false
    }
}