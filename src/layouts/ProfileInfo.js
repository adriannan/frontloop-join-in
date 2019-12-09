import React from "react";
import avatarBG from "../images/bill-gates-avatar.png";
import "../styles/aside.css";

const ProfileInfo = () => {
  return (
    <div className="aside__profile">
      <div className="profile__info">
        <img src={avatarBG}></img>
        <h3>Bill Gates</h3>
        <h4>Microsoft Founder</h4>
        <p>Greater Seattle Area</p>
        <button className="btn__follow">Follow</button>
        <button className="btn__connect">
          Connect<i class="material-icons">keyboard_arrow_down</i>
        </button>
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

          {/* <i class="material-icons">public</i> */}

          <a href="https://www.billgates.com.com">billgates.com</a>
        </p>
      </div>
      <div className="profile__pdf">
        <i class="material-icons">get_app</i>
        <p>Export page as PDF</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
