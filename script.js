let colors = document.querySelectorAll('.colors')
let ready = document.querySelector('.choosed-colours')

ready.style.opacity = "0.3"

ready.disabled = true



let btn1 = document.querySelector('.btn1')
btn1.style.opacity = "0.3"
let btn2 = document.querySelector('.btn2')
btn2.style.opacity = "0.3"
let card = document.querySelector('.card')
let pagenation = document.querySelector('.pagenation')


let whatColors = []

colors = Array.from(colors)
colors.forEach(el => {
    // console.log(el.firstChild.nextSibling.innerHTML)
    // console.log(typeof el.firstChild.nextSibling.innerHTML)
    el.sign = false
    // let hove;
    // el.addEventListener('mousemove', () => {
    //     hove = setTimeout(() => { el.style.color = el.firstChild.nextSibling.innerHTML}, 0)
    //     el.addEventListener('mouseout', () => {
    //         el.style.color = 'black'
    //     })
    //     el.addEventListener('mouseout', () => {
    //         el.style.color = 'black'
    //     })
    // })
    el.addEventListener('mouseenter', e => {
        if(e.shiftKey){
            btn1.style.opacity = "0.3"
            btn2.style.opacity = "0.3"
            card.firstChild.innerHTML = 'выберите цвета'
            card.firstChild.style.color = '#4169e1'

            if(!el.sign){
                el.style.backgroundColor = el.firstChild.nextSibling.innerHTML
                if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
                 el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' || 
                 el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                    el.style.color = 'white'
                }
                whatColors.push([el.firstChild.nextSibling.innerHTML, el.lastChild.previousSibling.innerHTML])
                el.sign = true
    
                ready.style.opacity = "1"
                ready.disabled = false
            } else {
                el.style.backgroundColor = 'gainsboro'
                if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
                 el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' ||
                  el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                    el.style.color = 'black'
                }
                // whatColors.forEach(e => console.log(e))
                whatColors.splice(whatColors.findIndex(element => element[0] == el.firstChild.nextSibling.innerHTML), 1)
                // whatColors.forEach(e => console.log(e))
    
    
                el.sign = false
    
                if(whatColors.length == 0){
                    ready.style.opacity = "0.3"
                    ready.disabled = true
                }
            }
        }
    })


    el.addEventListener('click', () => {
    btn1.style.opacity = "0.3"
    btn2.style.opacity = "0.3"
    card.firstChild.innerHTML = 'выберите цвета'
    card.firstChild.style.color = '#4169e1'

        
    // console.log(el.firstChild.nextSibling.innerHTML)
        // clearTimeout(hove)
        if(!el.sign){
            el.style.backgroundColor = el.firstChild.nextSibling.innerHTML
            if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
             el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' || 
             el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                el.style.color = 'white'
            }
            whatColors.push([el.firstChild.nextSibling.innerHTML, el.lastChild.previousSibling.innerHTML])
            el.sign = true

            ready.style.opacity = "1"
            ready.disabled = false
        } else {
            el.style.backgroundColor = 'gainsboro'
            if(el.firstChild.nextSibling.innerHTML == 'black' || el.firstChild.nextSibling.innerHTML == 'grey' ||
             el.firstChild.nextSibling.innerHTML == 'blue' || el.firstChild.nextSibling.innerHTML == 'purple' ||
              el.firstChild.nextSibling.innerHTML == 'green' || el.firstChild.nextSibling.innerHTML == 'brown'){
                el.style.color = 'black'
            }
            // whatColors.forEach(e => console.log(e))
            whatColors.splice(whatColors.findIndex(element => element[0] == el.firstChild.nextSibling.innerHTML), 1)
            // whatColors.forEach(e => console.log(e))


            el.sign = false

            if(whatColors.length == 0){
                ready.style.opacity = "0.3"
                ready.disabled = true
            }
        }
    })
})

ready.addEventListener('click', () => {
    // console.log(whatColors)
    card.firstChild.innerHTML = whatColors[0][0]
    readyColors(whatColors)
})





// function getNumber(max = 256, min = 0){
//     return Math.floor(Math.random() * (max - min) + min)
// }
// function getColor(){
//     return `${getNumber()},${getNumber()},${getNumber()}`;
// }


// function pullArr(n){
// for(let i = 1; i <= n; i++){
//     words.push([`a${i}`, `b${i}`])
// }
// }
// pullArr(36)

function readyColors(words){

// исп classname!

    console.log(words.length)
    let cnt = 0
    let lang = 0
    btn2.style.opacity = "1"
    btn2.disabled = false
    if(words.length == 1){
        // console.log('hehe')
        btn1.disabled = true  
        btn2.disabled = true
        btn2.style.opacity = "0.3" 
    }
    // lang = english
    card.firstChild.innerHTML = words[cnt][0]
    card.firstChild.style.color = words[cnt][0]
    card.addEventListener('click', () => {
    // console.log(words[cnt])
    console.log(lang)
        if(lang == 0) {
            lang = 1
            card.style.transform = "rotateY(180deg)"
            card.firstChild.style.transform = "rotateY(180deg)"
            setTimeout(() => { card.firstChild.innerHTML = words[cnt][lang] }, 500)
        } else {
            lang = 0
            card.style.transform = "rotateY(0deg)"
            card.firstChild.style.transform = "rotateY(0deg)"
            setTimeout(() => { card.firstChild.innerHTML = words[cnt][lang] }, 500)
            // console.log()
        }
    })

    btn2.addEventListener('click', () => {
        cnt++
        card.firstChild.innerHTML = words[cnt][lang]
        card.firstChild.style.color = words[cnt][0]

        card.style.boxShadow = `0px 5px 25px 0 ${words[cnt][0]}`
        setTimeout(() => card.style.boxShadow = `0px 5px 15px 0 rgba(196, 196, 196, 0.5)`, 350)
        // console.log(cnt)
        // console.log(words.length)
        if(cnt == words.length-1){
            // console.log(cnt)
            btn2.disabled = true
            btn2.style.opacity = '0.3'
        }
        btn1.style.opacity = '1'
        btn1.disabled = false
    })
    btn1.addEventListener('click', () => {
        cnt--
        card.firstChild.innerHTML = words[cnt][lang]
        card.firstChild.style.color = words[cnt][0]

        card.style.boxShadow = `0px 5px 15px 0 ${words[cnt][0]}`
        setTimeout(() => card.style.boxShadow = `0px 5px 15px 0 rgba(196, 196, 196, 0.5)`, 250)

        if(cnt == 0){
            // console.log(cnt)
            btn1.disabled = true
            btn1.style.opacity = '0.3'
        }
        btn2.style.opacity = '1'
        btn2.disabled = false
    })

    // for(let i = 1; i < words.length; i++){
    //     pagenation.innerHTML += `<p class="queueP">${i}</p>`
    // }
    // console.log(pagenation.firstChild)
    // pagenation.firstChild.style.color = 'white'
    // pagenation.firstChild.style.backgroundColor = 'rgb(48, 48, 48)'

    // let lang = false
    // let counter = 0
    // btn1.disabled = true
    // let trans = 0

    // function twist(n){
    //     counter+=n
    //     if(counter == 0){
    //         btn1.disabled = true
    //         btn1.style.opacity = "0.3"
    //     } else {
    //         btn1.disabled = false
    //         btn1.style.opacity = "1"
    //     } 
    //     if(counter == words.length-1){
    //         btn2.disabled = true
    //         btn2.style.opacity = "0.3"
    //     } else {
    //         btn2.disabled = false
    //         btn2.style.opacity = "1"
    //     }
    //     card.innerHTML = `<p>${words[counter][Number(lang)]}</p>`
    //     card.style.boxShadow = `5px 0px 7px #3BF764,
    //     -5px -0px 7px #3BF764`;
    //     setTimeout(() => {
    //         card.style.boxShadow = `1px 1px 3px #416ae475, -1px -1px 3px #416ae475`;
    //     }, 500)
    //     if(lang){
    //     card.firstChild.style.transform = "rotateY(180deg)"
    //     }

    //     let res = 0
    //     let bridge = counter
    //     while(bridge >= 10){
    //         res++
    //         bridge -= 10
    //     }

    //     if(res !== trans || trans > res){
    //         trans = res
    //         changePagenation(trans)
    //     }


    // console.log(pagenation.children[counter-(res*10)])
    // // console.log(typeof Number(pagenation.children[counter].innerHTML))

    // // console.log(counter+1)
    // // console.log(res)
    // // console.log(res)
    // // console.log(typeof pagenation.children[counter].innerHTML)
    // // console.log(typeof Number(pagenation.children[counter].innerHTML))
    // // console.log(counter)
    // // console.log(Number(pagenation.children[counter].innerHTML) == counter+1 ? 'da' : 'no')

    //     if(n == -1){
    //         if(counter+1 < (res+1) * 10){
    //             pagenation.children[counter-(res*10)+1].style.color = "rgb(48, 48, 48)"
    //             pagenation.children[counter-(res*10)+1].style.backgroundColor = 'inherit'

    //         }
    //     } else {
    //         if(counter > res * 10){
    //             pagenation.children[counter-(res*10)-1].style.color = "rgb(48, 48, 48)"
    //             pagenation.children[counter-(res*10)-1].style.backgroundColor = 'inherit'

    //         }
    //     }
        
    //     pagenation.children[counter-(res*10)].style.color = "white"
    //     pagenation.children[counter-(res*10)].style.backgroundColor = 'rgb(48, 48, 48)'

    // }
    // console.log(words.length)
    // function changePagenation(n){
    //     pagenation.innerHTML = ""
    //         for(let i = 1; i <= 10; i++){
    //             console.log(n*10)
    //             if(words.length - n*10 >= 10){
    //                 pagenation.innerHTML += `
    //                 <p class="queueP">${i + 10 * n}</p>
    //                 `
    //             } else {
    //                 for(let j = 1; j <= words.length - n*10; j++){
    //                     pagenation.innerHTML += `
    //                     <p class="queueP">${j + 10 * n}</p>
    //                     `
    //                 }
    //                 break
    //             }
    //     }
    // }

    // btn1.addEventListener('click', () => {
    //     twist(-1)
    // })
    // btn2.addEventListener('click', () => {
    //     twist(1)
    // })

    // card.addEventListener('click', () => {
    //     card.style.transform += "rotateY(180deg)"
    //     setTimeout(() => {
    //     if(lang){
    //         // console.log(words[0])
    //         card.innerHTML = `<p>${words[counter][0]}</p>`
    //     } else {
    //         // console.log(words[1])
    //         card.innerHTML = `<p>${words[counter][1]}</p>`
    //         card.firstChild.style.transform += "rotateY(180deg)"
    //     }
    //     lang = !lang
    //     }, 500)

    // })
}