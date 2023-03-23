import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Login(){
    const [user,setUser]=useState({
        email:'',
        password:''
    })
    const onchangeInput =e=>{
        const{name,value} =e.target;
        setUser({...user,[name]:value})
    }
    const loginSubmit=async e=>{
        e.preventDefault()
        try{
            await axios.post('/user/login',{...user})
            localStorage.setItem('firstLogin',true)
            window.location.href="/";
        }
        catch(err)
        {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className='login-page'>
         <form onSubmit={loginSubmit}>
           <h2>Login</h2>
            <input type="email" name="email" required 
            placeholder='email'value={user.email} onChange={onchangeInput}/>

           <input type="password" name="password" required autoComplete='on'
            placeholder='password'value={user.password} onChange={onchangeInput}/>

            <div className='row'>
                <button type="submit">Login</button>
                <Link to="/register">Register</Link>
            </div>
         </form>
        </div>
    )
}
export default Login