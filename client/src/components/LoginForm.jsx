import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function LoginForm(){
    // Login form component for login page

    const navigate = useNavigate()

    const handleLogInAttempt = () => {
        //if correct user credentials/ login as guest is checked go to browse log in page
        navigate('/browseReviews')

    }

    return(
        <>
        <form className='px-4 py-3 d-flex flex-column align-items-center justify-content-center'>
            <div>
              <h1 className="mb-4 text-center">Login</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="formUser" className="form-label px-1">Username: </label>
              <input type="email" placeholder='YourEmail@Mail.com' id="formUser" />
            </div>
            <div className="mb-3">
              <label htmlFor="formPass" className="form-label px-1">Password:  </label>
              <input type="password" placeholder='Password' id="formPass" />
            </div>
            <div>
              <label htmlFor="formGuestLogIn" className='form-label px-1'> log-in as guest: </label>
              <input type="checkbox" id='formGuestLogIn'/>

              <div className="vr mx-3"></div>

              <label htmlFor="createAcct" className='form-label px-1'> Create an Account</label>
              <Link to="/createAccount" id="createAcct">Here</Link>
            </div>
            <button className="btn btn-primary m-3" onClick={handleLogInAttempt}>
              Log In
            </button>
        </form>
        </>
    )
}

