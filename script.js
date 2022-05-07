const container = document.querySelector('.container');

container.addEventListener('click' , function(e){
    if(e.target.classList.contains('col') && !e.target.classList.contains('selected')){
        console.log(e.target.innerHTML);
        location.href = `./siparis/${e.target.innerHTML}.html`;
    }
});