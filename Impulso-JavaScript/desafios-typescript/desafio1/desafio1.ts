// Como podemos rodar isso em um arquivo .ts sem causar erros? 

// let employee = {};
// employee.code = 10;
// employee.name = "John";

interface Employee {
    code: number;
    name: string;
}

const employee: Employee = {
    name: 'Jhon',
    code: 10,
};

console.log(employee.name);
console.log(employee.code);