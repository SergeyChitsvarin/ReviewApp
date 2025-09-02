import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Header() {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    //displaying users name if the user is logged in
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
            setUserName('NO USER NAME');
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
        <div className="navbar sticky-top bg-body-tertiary border-bottom shadow-sm px-3">
            <div className="d-flex align-items-center justify-content-between w-100">

            <div className="d-flex align-items-center">
                <img src="/logoReviewApp.jpg" alt="Logo" className="me-2" style={{ height: "50px", width: "50px", cursor: "pointer" }}
                onClick={goToMainPage}
                />
                <h1 className="h4 m-0">Review Guru</h1>
            </div>
                <div className="d-flex align-items-center">

                    {userName && (
                        <span className="m-3">
                        Welcome, {userName}!
                    </span>)}

                    <button onClick={handleLogOut} className="btn btn-secondary">
                    Log Out
                    </button>
                </div>
            </div>
        </div>
    );
}