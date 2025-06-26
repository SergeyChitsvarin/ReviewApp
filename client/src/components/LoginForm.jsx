import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

export default function LoginForm(){
    // Login form component for login page
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [guestLogin, setGuestLogin] = useState(false);

    const navigate = useNavigate()

    const handleLogin = async (e) => {

      if(guestLogin){
        navigate('/browseReviews');
      }

      e.preventDefault();
      try {
        const res = await axios.post('http://localhost:5000/auth/login', { email, password });
        localStorage.setItem('token', res.data.accessToken);
        navigate('/browseReviews');
      } catch (err) {
        setError('Invalid email or password');
      }

    }

    return(
        <>
        <form onSubmit={handleLogin} className='px-4 py-3 d-flex flex-column align-items-center justify-content-center'>
            <div>
              <h1 className="mb-4 text-center">Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="formUser" className="form-label px-1">Username: </label>
              <input type="email" placeholder='YourEmail@Mail.com' id="formUser" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="formPass" className="form-label px-1">Password:  </label>
              <input type="password" placeholder='Password' id="formPass" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="formGuestLogIn" className='form-label px-1'> log-in as guest: </label>
              <input type="checkbox" id='formGuestLogIn' checked = {guestLogin} onChange={(e) => setGuestLogin(e.target.checked)}/>

              <div className="vr mx-3"></div>

              <label htmlFor="createAcct" className='form-label px-1'> Create an Account</label>
              <Link to="/createAccount" id="createAcct">Here</Link>
            </div>

            {error && <div className="alert alert-danger mt-2">{error}</div>}

            <button className="btn btn-primary m-3" type='submit'>
              Log In
            </button>
        </form>
        </>
    )
}

