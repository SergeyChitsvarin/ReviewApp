export default function Footer() {

    // simple footer at the bottom of screen displaying contact info
  return (
    <div className="bg-primary text-white p-3 text-center align-items-bottom">
        <div className="container d-flex align-items-center justify-content-start">
            <h1> Contact Us</h1>
            <ul className="list-unstyled p-2">
                <li>☎ (123)-456-7890</li>
                <li>✉ abc@Mail.com</li>
                <li>📍 123 Moose St</li>
            </ul>
        </div>
    </div>
  );
}