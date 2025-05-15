import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogInAttempt = () => {
    //if correct user credentials go to browse log in page
    navigate('/browseReviews')

  }

  return (
    //simple UI with user and password fields and error handling on click
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="mb-4">Login</h1>
      <h3>Username: </h3>
      <input type="email" placeholder='YourEmail@Mail.com' />
      <h3>Password: </h3>
      <input type="password" placeholder='Password' />
      <button className="btn btn-primary m-3" onClick={handleLogInAttempt}>
        Log In
      </button>
    </div>
  )
}