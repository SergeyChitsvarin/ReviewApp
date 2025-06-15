import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogInAttempt = () => {
    //if correct user credentials/ login as guest is checked go to browse log in page
    navigate('/browseReviews')

  }

  return (
    //Web page used for signing in or creating an account to access the rest of the website as a logged in user.
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className="border rounded p-4 shadow">
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
            <div className='mb-3'>
              <label htmlFor="formGuestLogIn" className='form-label px-1'> log-in as guest: </label>
              <input type="checkbox" id='formGuestLogIn'/>
            </div>
            <button className="btn btn-primary m-3" onClick={handleLogInAttempt}>
              Log In
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  )
}