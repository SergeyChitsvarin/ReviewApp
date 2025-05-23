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
        <div className="container-fluid d-flex align-items-center ">
            <img
                src="/logoReviewApp.jpg"
                alt="Logo"
                className="m-2 justify-content-center"
                style={{ height: "50px", width: "50px", cursor: "pointer" }}
                onClick={goToMainPage}
            />
            <h1 className="m-0 justify-content-center">Review Guru</h1>
            <button onClick={HandleLogOut} className="justify-content-right btn btn-secondary">Log Out</button>
        </div>
    </div>
  );
}