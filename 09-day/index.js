const sounds=['ban','guang','qing','shi','shui','sui']

sounds.forEach(sound=>{
    const btn=document.createElement('button')
    btn.classList.add('btn')
    btn.innerText=sound
    btn.addEventListener('click',()=>{
        stopsond()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})
function stopsond(){
    sounds.forEach(sound=>{
        const song=document.getElementById(sound)
        song.pause()
        song.currenTime=0
    })
}