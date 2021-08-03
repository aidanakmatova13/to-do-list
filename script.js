const text = document.querySelector('.text')
const addBtn= document.querySelector('.add-btn')
const clearBtn = document.querySelector('.clear-btn')
const list = document.querySelector('.list')


addBtn.addEventListener("click", () =>{ //два параметра (что обрабатываем)(функция)
    if (text.value.trim()){
        list.innerHTML += `<li>
                               <img src="./images/tick.png" width="30" class="done" alt="">
                               ${text.value}
                               
                               <img src="./images/close.png" class="del-btn" width="25px" alt="">
                          </li>`
        text.value = ""
    }
})
list.addEventListener("click", (event)=>{ //
    if (event.target.classList[0] === 'del-btn'){ //classList-возвращает массив с классами
        event.target.parentNode.remove()
    }
    if (event.target.classList[0] === 'done'){
        event.target.parentNode.classList.toggle('line-through')
    }
})


document.querySelector('.text').addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            list.innerHTML += `<li>
                               <img src="./images/tick.png" width="30" class="done" alt="">
                               ${text.value}
                               
                               <img src="./images/close.png" class="del-btn" width="25px" alt="">
                          </li>`
            text.value = ""
        }
});


clearBtn.addEventListener("click", () =>{
    list.innerHTML = ""
})

