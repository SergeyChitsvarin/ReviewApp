import React from 'react'
import Footer from '../components/Footer'



export default function CreateAccountPage() {
    // Page to create an account and update the database accourdingly

    function handleCreateAccount(){
        //function creates an account in the DB and send user to the login page if all entered info is correct
    }

  return (
    <>
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className='border rounded p-4 shadow'>
            <form className='px-4 py-3 d-flex flex-column align-items-center justify-content-center'>

                <div>
                    <h1 className="mb-4 text-center">Create an Account</h1>
                </div>
                <div>
                    <label htmlFor="EmailLabel">Email </label>
                    <input type="email" className='ms-2' placeholder='ExampleEmail@Here.com' id='EmailLabel'/>
                </div>
                <div>
                    <label htmlFor="FNameLabel">First Name </label>
                    <input type="text" className='ms-2' placeholder='Jane' id='FNameLabel'/>
                </div>
                <div>
                    <label htmlFor="LNameLabel">Last Name </label>
                    <input type="text" className='ms-2' placeholder='Doe' id='LNameLabel'/>
                </div>

                <button className="btn btn-primary m-3" onClick={handleCreateAccount()}> Create Account</button>

            </form>
        </div>
    </div>
    <Footer/>
    </>
  )
}
