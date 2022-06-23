class TodoList{
    constructor(){
        this.form = document.querySelector('.form');
    }

    init(){
        this.events();
    }

    events(){
        this.form.addEventListener('submit', e=>{
            e.preventDefault();
            const el = e.target;
            this.addList();

        });
    }

    addList(){
        const input = this.form.querySelector('input[type="text"]');
        const list = document.querySelector('.list');

        if(input.value == '') return;

        const li = document.createElement('li');

        const check = document.createElement('input');
        check.type = 'checkbox';
        check.id= this.randomId();

        const label = document.createElement('label');
        label.htmlFor = check.id;
        label.innerText = input.value;

        li.appendChild(check);
        li.appendChild(label);
        list.appendChild(li);

        input.value = '';
    }

    randomId(){
       const min = 0;
       const max = 99999999;
       return Math.floor(Math.random() * (max - min)) + min;
    }

}



const todoList = new TodoList();

todoList.init();