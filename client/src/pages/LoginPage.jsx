import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

export default function LoginPage() {
  

  return (
    //Web page used for signing in or creating an account to access the rest of the website as a logged in user.
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className="border rounded p-4 shadow">
        <LoginForm/>
        </div>
      </div>
      <Footer />
    </>
  )
}