const jingdus=document.getElementById('jingdua')
const perv=document.getElementById('perv')
const next=document.getElementById('next')
const math=document.querySelectorAll('.math')

let sum=1;

/* 创建一个点击事件 */
next.addEventListener('click',()=>{
    sum++
    if(sum>math.length){
        sum=math.length
    }
    date()
})

/* 创建一个点击事件 */
perv.addEventListener('click',()=>{
    sum--
    if(sum<1){
        sum=1
    }
    date()
})

/* 创建一个函数 */
/* 主要作用是对math添加或删除类名active */
function date(){
    math.forEach((math,idx)=>{
        if (idx<sum) {
            math.classList.add('active')
        }else{
            math.classList.remove('active')
        }
    })

    /* 这部分主要是为了实现类似进度条的效果 */
    const active=document.querySelectorAll('.active')    
    jingdus.style.width=(active.length-1)/(math.length-1)*100+'%'

    /* 这里是为了实现按钮在第一个与最后一个时不可点击的效果 */
    if(sum===1){
        perv.disabled=true
    }else if (sum===math.length){
        next.disabled=true
    }else{
        perv.disabled=false
        next.disabled=false
    }
}