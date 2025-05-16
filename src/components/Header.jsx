import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    function goToMainPage()
    {
        navigate("/");
    }

    // simple header showing logo and text allowing user to go to home page
  return (
    <div className="bg-primary text-white p-3 text-center">
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
    </div>
  );
}