import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [active, setActive] = useState(false);

  const chekActiveButton = () => {
    if(!email || password.length < 6){ 
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
    <div className='wrapper' onChange={chekActiveButton}>
      <div className='login-form'>
        <h1>Login Form</h1>
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
          disabled={active ? false : true}
          onClick={e => handleSubmit(e)}
          >Login</button>
        </div>
      </div>
    </div>
  );
}

