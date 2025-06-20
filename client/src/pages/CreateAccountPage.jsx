import React from 'react'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';



export default function CreateAccountPage() {
    // Page to create an account and update the database accourdingly

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    });
    const [error, setError] = useState();

    //function creates an account in the DB and send user to the login page if all entered information is correct
    function handleCreateAccount() {
        const { email, firstName, lastName, password } = formData;

        if (!email || !firstName || !lastName || !password) {
        setError('All fields are required.');
        return;
        }

        if (firstName.length > 20) {
            setError('Your First name has too many characters')
        }

        if (lastName.length > 50) {
            setError('Your Last name has too many characters')
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        setError('Please enter a valid email address.');
        return;
        }

        if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        return;
        }
        // Clear error message
        setError('');
        // Fetching 
        fetch('http://localhost:5000/users/register', { 
            method: 'POST', headers: {'Content-Type': 'application/json',}, body: JSON.stringify({ email, firstName, lastName, password })

        }).then(res => {
            if (!res.ok) {
                return res.json().then(err => {
                throw new Error(err.error || 'Failed to register');
            });
            }
            
            return res.json();
        })
        .then(() => {
            navigate('/');

        })
        .catch(err => {
        setError(err.message);

        });

        navigate('/');
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100">
        <div className="border rounded p-4 shadow w-100" style={{ maxWidth: '400px' }}>
          <form className="px-4 py-3 w-100" onSubmit={(e) => e.preventDefault()}>
            <h1 className="mb-4 text-center">Create an Account</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
              <label htmlFor="EmailLabel" className="form-label">Email</label>
              <input type="email" className="form-control" id="EmailLabel" placeholder="ExampleEmail@Here.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="FNameLabel" className="form-label">First Name</label>
              <input type="text" className="form-control" id="FNameLabel" placeholder="Jane"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="LNameLabel" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="LNameLabel" placeholder="Doe"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="PassLabel" className="form-label">Password</label>
              <input type="password" className="form-control" id="PassLabel" placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
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
