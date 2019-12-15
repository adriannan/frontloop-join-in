import React from "react";
import avatarBG from "../images/bill-gates-avatar.png";
import "../styles/aside.css";

const ProfileInfo = props => {
  return (
    <div className="aside__profile">
      <div className="profile__info">
        <img src={avatarBG}></img>
        <h3>Bill Gates</h3>
        <h4>Microsoft Founder</h4>
        <p>Greater Seattle Area</p>
        {props.follow ? (
          <button className="btn__unfollow" onClick={props.clickUnfollow}>
            Unfollow
          </button>
        ) : (
          <button className="btn__follow" onClick={props.clickFollow}>
            Follow
          </button>
        )}
        {props.connect ? (
          <button
            className="btn__connect btn__connect-pending"
            onClick={props.clickConnect}
          >
            Pending<i class="material-icons">keyboard_arrow_down</i>
          </button>
        ) : (
          <button className="btn__connect" onClick={props.clickConnect}>
            Connect<i class="material-icons">keyboard_arrow_down</i>
          </button>
        )}
      </div>
      <div className="profile__stats">
        <p>
          <span>200</span>
          <span>connections</span>
        </p>
        <p>
          <span>1.9M</span>
          <span>followers</span>
        </p>
      </div>
      <div className="profile__links">
        <p>
          <i class="material-icons">link</i>

          <a href="https://www.linkedin.com/in/williamhgates/">
            linkedin.com/in/williamhgates
          </a>
        </p>
        <p>
          <i class="material-icons">language</i>
          <a href="https://www.billgates.com.com">billgates.com</a>
        </p>
      </div>
      <a href="" download="profile" className="profile__pdf-link">
        <div className="profile__pdf">
          <i class="material-icons">get_app</i>
          <p>Export page as PDF</p>
        </div>
      </a>
    </div>
  );
};

export default ProfileInfo;
