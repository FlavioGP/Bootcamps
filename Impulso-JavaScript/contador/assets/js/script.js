class Contador{
    constructor(){
        this.contador = document.querySelector('.contador');
        this.init();
    }

    init(){

        this.events();
    }

    events(){
        this.contador.addEventListener('click', e => {
            const span = this.contador.querySelector('.number');
            const el = e.target;
            this.checkInput(span);
            this.score(el, span);
        });
    }

    score(el, span){

        if(el.classList.contains('increment')) span.innerHTML++;
        if(el.classList.contains('decrement')) span.innerHTML--;

    }

    checkInput(span){
        const check = document.querySelector('.check');
        const checkBoxes =  check.querySelectorAll('input[type="checkbox"]');

            for(let input of checkBoxes){

                if(input.classList.contains('negative-number') && !input.checked){  
                    if (span.innerText <= 0) span.innerText = 0;
                };

                if(input.classList.contains('change-color') && input.checked){  
                    if(span.innerText == 0) span.style.color = 'black';
                    if(span.innerText > 0) span.style.color = 'green';
                    if(span.innerText < 0) span.style.color = 'red';
                }   
                
            }
    }

}


const contador = new Contador();