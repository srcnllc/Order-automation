const container = document.querySelector('.container');
const col = document.querySelector('.col');
const cols = document.querySelectorAll('.col');

getFromLocalStorage();

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
    if(e.target.classList.contains('col') || e.target.classList.contains('selected')){
        var secim = confirm(`${e.target.innerHTML} masası Dolu/Boş olarak ayarlansın mı?`);
        if (secim == true) {       
            e.target.classList.toggle('selected');
        }
    }
    localstorage();
});

//Local Storage üzerine seçilenleri kaydederek sayfa yenilenmesinde kaybolmamasını sağladık.

function localstorage(){
    const selectedCols = container.querySelectorAll(".col.selected");
    
    const selectedColsArr = [];
    const colsArr = [];
    selectedCols.forEach(function(col){
        selectedColsArr.push(col);
    });
    
    cols.forEach(function(col){
        colsArr.push(col);
    });

    let selecredColIndexs = selectedColsArr.map(function(col){
        return colsArr.indexOf(col);
    });
    
    saveToLocalStorage(selecredColIndexs);
}
function getFromLocalStorage(){
    const selectedCols = JSON.parse(localStorage.getItem('selectedCols'));
    if(selectedCols !=null && selectedCols.length>0){
        cols.forEach(function(col,index){
            if(selectedCols.indexOf(index) > -1){
                col.classList.add('selected')
            }
        })
    }
}
function saveToLocalStorage(indexs){
    localStorage.setItem('selectedCols',JSON.stringify(indexs));
}