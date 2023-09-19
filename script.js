const dino = document.querySelector('.dino')
const runSpace = document.querySelector('.run_space')
const cactus1 = document.querySelector('.cactus1')
const cactus2 = document.querySelector('.cactus2')
const cactus3 = document.querySelector('.cactus3')
const cactus4 = document.querySelector('.cactus4')
const dinoDead = document.querySelector('.dino_dead')
const cloud = document.querySelector('.cloud')
const refresh = document.querySelector('.refresh')
const gameOver = document.querySelector('.gameOver')
const title = document.querySelector('.text')
const timerr = document.querySelector('.timer_p')

// ************Jump*****************
document.addEventListener("keypress", (e) => {
    if(e.key == "w" ){
        jump()
    }
})
function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump')
    }
    setTimeout( function(){
        dino.classList.remove('jump')
    },400)
}
// ***************Animation / Functional ***************
let interval = 0;
let interval2 = 0;
let interval3 = 0;

document.addEventListener("keypress", (e) => {
    if(e.key == ' '){
        function cactusRide(){
            title.style.display = 'none'
            function cactus1Ride(){
                if(cactus1.classList != 'cactus1Anim'){
                    cactus1.classList.add('cactus1Anim')
                }
                setTimeout( function(){
                    cactus1.classList.remove('cactus1Anim')
                },2000)
        
            }
            function cactus2Ride(){
                if(cactus2.classList != 'cactus2Anim'){
                    cactus2.classList.add('cactus2Anim')
                }
                setTimeout( function(){
                    cactus2.classList.remove('cactus2Anim')
                },2000)
        
            }
        
            function cactus3Ride(){
                if(cactus3.classList != 'cactus3Anim'){
                    cactus3.classList.add('cactus3Anim')
                }
                setTimeout( function(){
                    cactus3.classList.remove('cactus3Anim')
                },2000)
        
            }
        
            function cactus4Ride(){
                if(cactus4.classList != 'cactus4Anim'){
                    cactus4.classList.add('cactus4Anim')
                }
                setTimeout( function(){
                    cactus4.classList.remove('cactus4Anim')
                },2000)
        
            }
            function randome(){
                let randome = Math.round(Math.random()*3)
                if(randome == 0){
                    cactus1Ride()
                }else if(randome == 1){
                    cactus2Ride()
                }else if(randome == 2){
                    cactus3Ride()
                }else if(randome == 3){
                    cactus4Ride()
                }
            }
            interval = setInterval(randome , 2000)
        
        
            function clouds(){
                let random = Math.round(Math.random()*200)
                cloud.classList.add('cloudAnim')
                cloud.style.top = random + 'px'
            }
            interval2 = setInterval(clouds, 5000)
        }
        cactusRide()
    }
    let sec = 0;
    function timero(){
        sec++
        // console.log(sec)
        timerr.innerHTML = sec
    }
    interval3 = setInterval(timero,100)
})

// *******************HitBox / Game Over*******************

setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft1 = parseInt(window.getComputedStyle(cactus1).getPropertyValue('left'))
    let cactusLeft2 = parseInt(window.getComputedStyle(cactus2).getPropertyValue('left'))
    let cactusLeft3 = parseInt(window.getComputedStyle(cactus3).getPropertyValue('left'))
    let cactusLeft4 = parseInt(window.getComputedStyle(cactus4).getPropertyValue('left'))
    if(cactusLeft1 < 80 && cactusLeft1 > 0 && dinoTop >= 219 || cactusLeft2 < 80 && cactusLeft2 > 0 && dinoTop >= 219 || cactusLeft3 < 74 && cactusLeft3 > 0 && dinoTop >= 219 || cactusLeft4 < 40 && cactusLeft4 > 0 && dinoTop >= 219){
        dinoDead.style.cssText = 'display: block;'
        dino.style.cssText = 'display: none;'
        clearInterval(interval3)
        clearInterval(interval2)
        clearInterval(interval)
        gameOver.style.display = 'block'
    }
}, 20);
refresh.onclick = () =>{
    location.reload()
}