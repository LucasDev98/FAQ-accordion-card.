//VARIABLES
let links = document.querySelectorAll('.list__item');




links.forEach( link => {

    
    link.addEventListener('click', ()=> {
        let existClass = document.querySelector('.show');
        if( existClass  ) {
            link.classList.add('show');
            existClass.classList.remove('show');
            
        }else {
            link.classList.add('show')
        }
         
    } )
}) 

