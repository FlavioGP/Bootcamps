import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const [loading, setLoading] = useState('');
  const [active, setActive] = useState(false);

  const chekForm = () => {
    if(!email){ 
      setActive(false);
      return;
    };
    if(!password || password.length < 5){ 
      setActive(false);
      return;
    };
    setActive(true)
  };
  const clearImputs= () => {
    setEmail('')
    setPassword('')
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!active) return;

    const user = {
      email,
      password
    }

    try {
      setErrorMessage('');
      setActive(false)
      await login(user)
      clearImputs();
      alert('Sucesso!')
    } catch (error) {
      setErrorMessage(error.message);
      clearImputs()
    }

  }

  return (
    <div className='wrapper' onChange={chekForm}>
      <div className='login-form'>
        <h1>Login Form</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        { errorMessage && <div className='errorMessage'>{errorMessage}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email:</label>
          <input 
            id={'email'} 
            type={'email'} 
            autoComplete='off' 
            onChange={e => setEmail(e.target.value)}
            value={email} 
          />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input 
            id={'password'} 
            type={'password'} 
            onChange={e => setPassword(e.target.value)}
            value={password} 
          />
        </div>

        <div className='button'>
          <button 
          className={active ? 'active': ''}
          onClick={e => handleSubmit(e)}
          >Login</button>
        </div>
      </div>
    </div>
  );
}
