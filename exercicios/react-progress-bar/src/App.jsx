/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    maritalStatus: '',
    genre: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      return newData;
    });
  };

  const progressBar = () => {
    let value = 0
    let lenFormData = Object.keys(formData).length
    let sumBar = 100 / lenFormData


    if(formData.name){
      let regName = /.+ .+/gi;
      // let nameSplit = formData.name.split(' ');
      // if(nameSplit[1]) value += sumBar;
      if(regName.test(formData.name)) value += sumBar;
    }
    if(formData.email){
      let regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(regEmail.test(formData.email)) value += sumBar
    }

    if(formData.maritalStatus){
      value += sumBar
    }
    if(formData.genre){
      value += sumBar
    }
    return value
  }

  const handleSubmit = e =>{
    setFormData({
      name: '',
      email: '',
      maritalStatus: '',
      genre: '',
    });
    alert('Formulario enviado com sucesso!')
  }

  return (
    <div className="App">
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container">
          <div className="bar" style={{width: `${progressBar()}%`}}></div>
        </div>
        <div className="form-group">
          <label htmlFor="">Nome Completo</label>
          <input 
          onChange={(e) => handleChange(e)} 
          value={formData.name} 
          name='name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="">E-mail</label>
          <input 
          onChange={(e) => handleChange(e)} 
          value={formData.email} 
          name='email'
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Estado Civil</label>
          <select
            onChange={(e) => handleChange(e)} 
            name='maritalStatus'
            value={formData.maritalStatus}
          >
            <option value="">- selecione...</option>
            <option value="solteiro">Solteiro</option>
            <option value="casado">Casado</option>
            <option value="divorciado">Divorciado</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="">Gênero</label>masculino

feminino
          <div className="radios-container">
            <span>
              <input
              type="radio" 
              name='genre' 
              value='masculine'
              onChange={(e) => handleChange(e)} 
              checked={formData.genre === 'masculine'}
              /> Masculino
            </span>
            <span>
              <input
              type="radio"
              name='genre' 
              value='feminine'
              onChange={(e) => handleChange(e)} 
              checked={formData.genre === 'feminine'}
              /> Feminino
            </span>
          </div>
        </div>
        <button 
          disabled={progressBar() !== 100}
          onClick={handleSubmit}
        >Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
