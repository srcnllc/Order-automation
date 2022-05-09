const buton = document.querySelector('button');
const products = document.querySelector('.products');
const sag = document.querySelector('.sag');
const liste = document.querySelector('.liste');
const temizleButonu = document.querySelector("#hepsinisil");

temizleButonu.addEventListener("click", elemanlariSil);


buton.addEventListener('click' , function(e){
    location.href ="../index.html"
});
products.addEventListener('click' , function(e){
    if(e.target.classList.contains('col')){
    let li=document.createElement("li");
    li.textContent=e.target.innerHTML;
    let i = document.createElement("i");
    i.classList = "fas fa-times";
    li.appendChild(i);
    liste.appendChild(li);
    elemanSilmeButonu = document.querySelectorAll(".fa-times");
    for (var j = 0; j < elemanSilmeButonu.length; j++) {
        elemanSilmeButonu[j].addEventListener("click", elemansil);
    }
    console.log(e.target.innerHTML)

    }
});
sag.addEventListener('click' , function(e){
    if(e.target.classList.contains('col')){
        console.log(e.target.innerHTML)
            let li=document.createElement("li");
            li.textContent=e.target.innerHTML;
            let i = document.createElement("i");
            i.classList = "fas fa-times";
            li.appendChild(i);
            liste.appendChild(li);
            elemanSilmeButonu = document.querySelectorAll(".fa-times");
            for (var j = 0; j < elemanSilmeButonu.length; j++) {
                elemanSilmeButonu[j].addEventListener("click", elemansil);
            }
    }
});

function elemansil() {
    var secim = confirm("Sipariş silinsin mi?");
    if (secim == true) {       
        var silinecek = this.parentElement;
        silinecek.remove();
    }
}
function elemanlariSil() {
    var secim = confirm("Masaya ait tüm siparişler silinsin mi?");
    if (secim == true) {
        
        // eğer onaylanırsa tüm elemanlar silinsin
        var silinecekler = document.querySelectorAll("li");
 
        for (var j = 0; j < silinecekler.length; j++) {
            silinecekler[j].remove();
        }
    }
}