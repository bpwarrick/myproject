import { Link } from "react-router-dom";
import banner from "../Images/banner-lg.jpg";
const Homepage = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean resaurant, focused on traditional recipes served with a modern twist.</p>
          <Link to="/booking">
            <button>Reserve A Table</button>
          </Link>
        </div>
        <div className="banner-img">
          <img src={banner} alt='' />
        </div>
      </section>
    </header>
  );
}

export default Homepage;