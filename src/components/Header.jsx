import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    // user redirected to login page and logged out of account
    function HandleLogOut()
    {
        navigate('/');

    }
    // User redirected to main page
    function goToMainPage()
    {
        navigate("/browseReviews");
    }

    // Header component showing logo and text allowing user to go to home page
  return (
    <div className="navbar sticky-top bg-body-tertiary text-white text-center">
        <div className="container d-flex align-items-center justify-content-center">
            <img
                src="/logoReviewApp.jpg"
                alt="Logo"
                className="m-2 "
                style={{ height: "50px", width: "50px", cursor: "pointer" }}
                onClick={goToMainPage}
            />
            <h1 className="m-0">Review Guru</h1>
        </div>
        <button onClick={HandleLogOut} className="justify-content-right btn btn-secondary">Log Out</button>
    </div>
  );
}