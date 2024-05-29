import React, { useState } from 'react';
import Card from './Card'
export default function UserLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
  
    const handleEmailChange = (e) => {
        e.preventDefault()
      const value = e.target.value;
      setEmail(value);
      if (!value.endsWith('.ru')) {
        setEmailError('Yalnız .ru domenlərinə icazə verilir.');
        console.warn('Yalnız .ru domenlərinə icazə verilir.');
      } else {
        setEmailError('');
      }
    };
  
    const handlePasswordChange = (e) => {
        e.preventDefault()
      const value = e.target.value;
      setPassword(value);
      if (value.length < 8) {
        setPasswordError('Ən azı 8 simvol.');
        console.warn('Ən azı 8 simvol.');
      } else {
        setPasswordError('');
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!emailError && !passwordError && email && password) {
        console.log('Form submitted:', { email, password });
      } else {
        console.warn('Formda səhvlər var.');
      }
    };
  
    return (
        <>
      <form onSubmit={handleSubmit}>

          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}


          <label htmlFor="password">Parol:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        <button type="submit">Login</button>
      </form>
      <Card email={email} password={password}/>       
      </>
    );
  };
