// [{ "id": "9v", "url": "https://cdn2.thecatapi.com/images/9v.jpg", "width": 500, "height": 375 },
// { "id": "ba", "url": "https://cdn2.thecatapi.com/images/ba.jpg", "width": 375, "height": 500 }, 
// { "id": "bh", "url": "https://cdn2.thecatapi.com/images/bh.jpg", "width": 339, "height": 500 },
// { "id": "bo", "url": "https://cdn2.thecatapi.com/images/bo.jpg", "width": 452, "height": 480 },
// { "id": "152", "url": "https://cdn2.thecatapi.com/images/152.jpg", "width": 700, "height": 490 },
// { "id": "15e", "url": "https://cdn2.thecatapi.com/images/15e.jpg", "width": 500, "height": 375 }, 
// { "id": "15f", "url": "https://cdn2.thecatapi.com/images/15f.jpg", "width": 500, "height": 333 },
// { "id": "15o", "url": "https://cdn2.thecatapi.com/images/15o.jpg", "width": 500, "height": 400 },
// { "id": "15v", "url": "https://cdn2.thecatapi.com/images/15v.jpg", "width": 400, "height": 383 },
// { "id": "16h", "url": "https://cdn2.thecatapi.com/images/16h.jpg", "width": 500, "height": 375 }]

let blok=document.querySelector(".blok") // box
let btn=document.querySelector(".btn")   // newBtn


let xhr=new XMLHttpRequest()
let category='https://api.thecatapi.com/v1/categories'
xhr.open("GET",category)
xhr.onload=(categoryFunction)=>{
    let allCategory=JSON.parse(categoryFunction.currentTarget.response)

    allCategory.forEach(element => {
    let but=document.createElement("button")
    but.innerHTML=`<button>${element.name}</button>`
    btn.append(but) 

    but.addEventListener("click",()=>{
    let new_xhr=new XMLHttpRequest()
    let a=element.id;
    blok.innerHTML=""
    let photo=`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${a}`
    new_xhr.open("GET",photo)
    new_xhr.onload=(photoFunction)=>{
        let allImages=JSON.parse(photoFunction.currentTarget.response)
        a=element.id
        allImages.forEach((item)=>{
            let newDiv=document.createElement("div")
            newDiv.innerHTML=`<img src="${item.url}" alt="" >`
            blok.append(newDiv)  
        })  
    }
    new_xhr.send()      
    })
   });
}
xhr.send()
