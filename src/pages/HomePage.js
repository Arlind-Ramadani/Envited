import { Button } from "../components/Button/Button";
import LandingPage from "../public/images/LandingPage.svg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="home-wrapper">
      <div className="image-wrapper">
        <img src={LandingPage} alt="landing page" />
        <Link to="/create">
          <Button text="🎉 Create my event" />
        </Link>
      </div>

      <div className="home-content">
        <h1>
          Imagine if <span>Snapchat </span>had events.
        </h1>

        <p>Easily host and share events with your friends across any social media.</p>

        <Link to="/create">
          <Button text="🎉 Create my event" />
        </Link>
      </div>
    </div>
  );
};
