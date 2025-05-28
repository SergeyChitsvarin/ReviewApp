export default function Footer() {

    // simple footer component at the bottom of screen displaying contact information
  return (

    <div className="bg-body-secondary text-white p-1 text-center navbar">
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