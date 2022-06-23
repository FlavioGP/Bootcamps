
class Contador{
    constructor(){
        this.contador = document.querySelector('.contador');
        this.display = 0;
        this.init();
    }

    init(){
        this.events();
    }

    events(){
        this.contador.addEventListener('click', e => {
            const span = this.contador.querySelector('.number');
            const el = e.target;
            this.score(el, span);
            console.log(this.display);
        });
    }

    score(el, span){

        if(el.classList.contains('increment')){ 
            this.display++;
        }
        if(el.classList.contains('decrement')) {
            if(!this.negatives()) return;
            this.display--;
        }
        this.changeColor(span);
        span.innerText = `${this.display}`;
    }

    negatives(){
        const check = document.querySelector('.check');
        const checkBoxes =  check.querySelectorAll('input[type="checkbox"]');
        let flag = true;

        for(let input of checkBoxes){
            if(input.classList.contains('negative-number') && !input.checked){
                if (this.display <= 0) {
                    this.display = 0;
                    return flag = false;
                }
            };     
        };
        return flag;
    }

    changeColor(span){
        const check = document.querySelector('.check');
        const checkBoxes =  check.querySelectorAll('input[type="checkbox"]');

            for(let input of checkBoxes){

                if(input.classList.contains('change-color') && input.checked){  
                    if(this.display == 0) span.style.color = 'black';
                    if(this.display >= 1) span.style.color = 'green';
                    if(this.display <= -1) span.style.color = 'red';
                }
            }
    }

}


const contador = new Contador();