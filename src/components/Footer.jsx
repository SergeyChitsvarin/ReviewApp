export default function Footer() {

    // simple footer at the bottom of screen displaying contact info
  return (
    <div className="bg-primary text-white p-3 text-center align-items-bottom">
        <div className="container d-flex align-items-center justify-content-start">
            <h1> Contact Us</h1>
            <ul>
                <li>Tel: (123)-456-7890</li>
                <li>Email: abc@Mail.com</li>
                <li>Address: 123 Moose St, A1B 2C3</li>
            </ul>
        </div>
    </div>
  );
}