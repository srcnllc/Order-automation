const container = document.querySelector('.container');
const col = document.querySelector('.col');

document.oncontextmenu = function(){return false}
if(document.layers) 
{
	window.captureEvents(Event.MOUSEDOWN);
	window.onmousedown = function(e)
	{
	if(e.target==document)return false;
	}
}
else 
{
	document.onmousedown = function(){return false}
}

container.addEventListener('click' , function(e){
    if(e.target.classList.contains('col') || e.target.classList.contains('selected')){
        console.log(e.target.innerHTML);
        location.href = `./siparis/${e.target.innerHTML}.html`;
    }
});
container.addEventListener('contextmenu' , function(e){
    if(e.target.classList.contains('col') && !e.target.classList.contains('selected')){
        console.log(e.target.innerHTML);
        var secim = confirm(`${e.target.innerHTML} masası doldurulsun mu?`);
        if (secim == true) {       
            e.target.classList.toggle('selected');
        }
    }
    // Hem if hemde else aynı anda selected oldugundan çalışıyor buradan devam et....!!!!
    else(e.target.classList.contains('selected'))
        var secim = confirm(`${e.target.innerHTML} masası boş mu?`);
        if (secim == true) {       
            e.target.classList.toggle('selected');
        }
});
