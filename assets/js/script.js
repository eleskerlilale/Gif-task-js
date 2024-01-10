const input = document.querySelector("input")
const main = document.querySelector(".main")
const button = document.querySelector(".button")


function item(data) {
    main.innerHTML=`<img src='https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif'>`
    axios.get("https://api.giphy.com/v1/gifs/search?api_key=ariNJvUaZLmHevHidEufEjvtukUmGuMP&limit=1000&q="+data)
        .then(res => res.data)
        .then(data =>data.data)
        .then(dt => {
                main.innerHTML=``
                dt.forEach(element => {
                    main.innerHTML+=`
                   <div class="block">
                   <div class="image">
                   <div class="banner">
                       <img src=${element.images.fixed_width.webp} alt="">
                   </div>
    
               </div>
               <div class="text">
                   <h3 class="name">
                       ${element.user.username}
                   </h3>
                   <a href="">LINK</a>
                   <p class="description">
                       sdgbfsdufgbvsadgbf
                   </p>
               </div></div>`
                })
            })
       
}

button.addEventListener('click',(e)=>{
    item(input.value)
})
