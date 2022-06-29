class ToggleMode{
    constructor(){
        this.button = document.querySelector('.toggle-mode');
        this.dark = false;
        this.init();
    }

    init(){
        this.events();
    }

    events(){
        this.button.addEventListener('click', e => this.toggleMode(e));
    }

    toggleMode(e){
        const el = e.target;
        const body = document.querySelector('body');
        const title = document.querySelector('.title');

        if(!this.dark){
            body.style.background = '#000';
            el.classList.remove('light-mode');
            el.classList.add('dark-mode');
            el.innerHTML = 'Light Mode'
            title.innerHTML = 'Dark Mode'
            title.style.color = 'var(--color-light)';
            this.dark = true;
            return;
        }
        
        body.style.background = 'var(--color-light)';
        el.classList.remove('dark-mode');
        el.classList.add('light-mode');
        el.innerHTML = 'Dark Mode';
        title.innerHTML = 'Light Mode'
        title.style.color = 'var(--color-dark)';
        this.dark = false;
    }

}

const toggleMode = new ToggleMode();