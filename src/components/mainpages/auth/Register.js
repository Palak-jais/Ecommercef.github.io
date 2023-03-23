import React ,{useState}from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Register(){
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })
    const onchangeInput =e=>{
        const{name,value} =e.target;
        setUser({...user,[name]:value})
    }
    const registerSubmit=async e=>{
        e.preventDefault()
        try{
            await axios.post('/user/register',{...user})
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
         <form onSubmit={registerSubmit}>
         <h2>Register</h2>
         <input type="text" name="name" required autoComplete='on'
            placeholder='Name'value={user.name} onChange={onchangeInput}/>

            <input type="email" name="email" required 
            placeholder='Email'value={user.email} onChange={onchangeInput}/>

           <input type="password" name="password" required autoComplete='on'
            placeholder='Password'value={user.password} onChange={onchangeInput}/>

            <div className='row'>
                <button type="submit">Register</button>
                <Link to="/login">Login</Link>
            </div>
         </form>
        </div>
    )
}
export default Register