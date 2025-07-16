import logo from '../Images/logo-sm.jpg';

const Footer = () => {
  return (
    <footer className="footer">
        <section>
            <div className="company-info">
                <img src={logo} alt="Little Lemon Logo" />
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <h3>Important Links</h3>
                <ul className="social-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/booking">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
                <h3>Contact Us</h3>
                <p>Email: littlelemon@email.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Lemon St, Chicago, IL</p>
            </div>
        </section>
    </footer>
  );
}

export default Footer;