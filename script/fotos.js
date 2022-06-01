function FotosInit()
{
    //SetEffectGalery();
    SetHeaderAndFooter();
}



function SetEffectGalery(){
    var galeria = document.querySelector("#galeria-fotos").getElementsByTagName('img');
    if(galeria){
        for (var a of galeria){
            a.addEventListener('mouseover', function(){
                this.classList.replace('container-foto','container-foto-effect'); 
            }, false);
            a.addEventListener('mouseout', function(){
                this.classList.replace('container-foto-effect', 'container-foto'); 
            }, false);
            a.classList.add('container-foto');
        }
    }
}