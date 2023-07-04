import React,{useState} from 'react'
import './Login.css'
import { Link , useNavigate} from 'react-router-dom'
import { auth } from './Firebase';


function Login() {
    const history = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const signIn = e =>{
        e.preventDefault();
    }
    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'> 
            <img
                className='login-logo'
                src='https://w7.pngwing.com/pngs/732/34/png-transparent-logo-amazon-com-brand-flipkart-others-text-orange-logo.png' 
            />
        </Link> 

        <div className='login-container'>
            <h1>Sign in</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}  />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                
                <button onClick={signIn} type='submit'className='login-signinbutton'>Sign in</button>

            </form>
            <p>By signing in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-based Ads Notice.</p>
            <button onClick={register} className='login-registerbutton'>Create your Amazon account</button>
        </div>  

    </div>
  )
}

export default Login
