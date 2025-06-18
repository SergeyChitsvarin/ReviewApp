import React from 'react'
import Footer from '../components/Footer'



export default function CreateAccountPage() {
    // Page to create an account and update the database accourdingly

    function handleCreateAccount(){
        //function creates an account in the DB and send user to the login page if all entered information is correct

    }

  return (
  <>
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div className="border rounded p-4 shadow w-100" style={{ maxWidth: '400px' }}>
        <form className="px-4 py-3 w-100">
          <h1 className="mb-4 text-center">Create an Account</h1>

          <div className="mb-3">
            <label htmlFor="EmailLabel" className="form-label">Email</label>
            <input type="email" className="form-control" id="EmailLabel" placeholder="ExampleEmail@Here.com" />
          </div>

          <div className="mb-3">
            <label htmlFor="FNameLabel" className="form-label">First Name</label>
            <input type="text" className="form-control" id="FNameLabel" placeholder="Jane" />
          </div>

          <div className="mb-3">
            <label htmlFor="LNameLabel" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="LNameLabel" placeholder="Doe" />
          </div>

          <div className="mb-3">
            <label htmlFor="PassLabel" className="form-label">Password</label>
            <input type="password" className="form-control" id="PassLabel" placeholder="Password" />
          </div>

          <button type="button" className="btn btn-primary w-100 mt-3" onClick={handleCreateAccount}>
            Create Account
          </button>
        </form>
      </div>
    </div>
    <Footer />
  </>
  )
}
