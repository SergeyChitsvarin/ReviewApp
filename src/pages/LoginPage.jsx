import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogInAttempt = () => {
    //if correct user credentials go to browse log in page
    navigate('/browseReviews')

  }

  return (
    //simple UI with user and password fields and error handling on click
    <>
      <Header />
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
            <button className="btn btn-primary m-3" onClick={handleLogInAttempt}>
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  )
}