const buton = document.querySelector('button');
const products = document.querySelector('.products');
const sag = document.querySelector('.sag');
const liste = document.querySelector('.liste');

buton.addEventListener('click' , function(e){
    location.href ="../index.html"
});
products.addEventListener('click' , function(e){
    if(e.target.classList.contains('col')){
    let li=document.createElement("li");
    li.textContent=e.target.innerHTML
    liste.appendChild(li);
    console.log(e.target.innerHTML)

    }
});
sag.addEventListener('click' , function(e){
    if(e.target.classList.contains('col')){
        console.log(e.target.innerHTML)
            let li=document.createElement("li");
            li.textContent=e.target.innerHTML
            liste.appendChild(li);
    }
});
// liste.addEventListener('click' , function(e){
//    console.log(e.target.innerHTML)
//    e.target.innerHTML = 
// });