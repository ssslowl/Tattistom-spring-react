import React, { useEffect, useState } from 'react'
import styles from './css/login.module.css'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from 'axios'
import  logo  from './imgs/logo.png'


function Login() {

useEffect(() => {
  document.body.className = styles.layout
  document.getElementById('root').className = styles.layout;
}, [])

const [login, setLogin] = useState("")
const [password, setPassword] = useState("")


const handleSubmit = async (e) => {
  e.preventDefault()
  console.log('login:', login)
  console.log('password:', password)
  
  const result = await axios.post('http://localhost:8080/auth/sign-in',
                                  {username: login, password: password, expiresInMins: 60} ,
                                  {headers: {'Content-Type': 'application/json'}}).then((response) => { 
                                    const token = response.data.token;
                                    localStorage.setItem('token', token); 
                                    window.location.href = '/'
                                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;})
                                  .catch((error) => { console.log('error:', error) })

  

}


  return (
    <div className={styles.login}>
      <img src={logo} alt="" />
      <h1>TattiStom</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="login" label="Логин" variant="standard" value={login} onChange={(e) => setLogin(e.target.value)}/>
        <TextField type="password" id="password" label="Пароль" variant="standard" value={password} onChange={(e) => setPassword(e.target.value)}  />
        <Button variant="contained" type='submit'>Войти</Button>
      </form>
    </div>
  )
}

export default Login