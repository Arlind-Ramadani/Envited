import BirthdayCake from "../public/images/Birthday cake.png";
import { IoCalendarOutline, IoChevronForward } from "react-icons/io5";
import { RiMapPinLine } from "react-icons/ri";

export const EventPage = () => {
  return (
    <div className="event-wrapper">
      <div className="event-content">
        <h2>Birthday Bash</h2>

        <p>
          Hosted by <span>Elysia</span>
        </p>

        <div className="event-details">
          <a href="#" className="details-item">
            <div className="icon">
              <IoCalendarOutline color="#8456EC" />
            </div>
            <div className="content">
              <p>18 August 6:00PM</p>
              <p className="sub-detail">
                to <span>19 August 1:00PM</span> UTC +10
              </p>
            </div>
            <IoChevronForward className="arrow" />
          </a>
          <a href="#" className="details-item">
            <div className="icon">
              <RiMapPinLine color="#8456EC" />
            </div>
            <div className="content">
              <p>Street name</p>
              <p className="sub-detail">Suburb, State, Postcode</p>
            </div>
            <IoChevronForward className="arrow" />
          </a>
        </div>
      </div>
      <img src={BirthdayCake} alt="Birthday cake" />
    </div>
  );
};
