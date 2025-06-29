import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Header() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    //displaying users name and a welcome message if the user is logged
    useEffect(() => {
        const token = localStorage.getItem('token');
        const isGuest = localStorage.getItem('guest') === 'true';

        if (token && !isGuest) {
        // Fetch user info
        axios.get('http://localhost:5000/users/me', {
            headers: {
            Authorization: `Bearer ${token}`,
            }
        }).then(res => {
            setUserName(res.data.firstName);
        }).catch(() => {
            setUserName(' User');
        });
        }
    }, []);


    // user redirected to login page and logged out of account
    const handleLogOut = () => {
        const token = localStorage.getItem('token');
        const isGuest = localStorage.getItem('guest') === 'true';

        if (isGuest || !token) {
        // If guest user (not logged in)
        localStorage.removeItem('guest');
        navigate('/');
        } 
        else {
        // If logged-in user
        localStorage.removeItem('token');
        localStorage.removeItem('guest');
        navigate('/');
        }
    };

    // User redirected to main page
    function goToMainPage()
    {
        navigate("/browseReviews");
    }

    // Header component showing logo and text allowing user to go to home page or log out
  return (
    <div className="navbar sticky-top bg-body-tertiary text-white text-center">
        <div className="container-fluid d-flex align-items-center ">
            <img
                src="/logoReviewApp.jpg"
                alt="Logo"
                className="m-2 justify-content-center"
                style={{ height: "50px", width: "50px", cursor: "pointer" }}
                onClick={goToMainPage}
            />
            <h1 className="m-0 justify-content-center">Review Guru</h1>

            {userName && <span>Welcome, {userName}!</span>}

            <button onClick={handleLogOut} className="justify-content-right btn btn-secondary">Log Out</button>
        </div>
    </div>
  );
}