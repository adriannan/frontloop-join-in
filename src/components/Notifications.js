import React from "react";
import "../styles/header.css";

const Notifications = () => {
  return (
    <div className="header__notif">
      <i class="material-icons notif-chat">chat</i>
      <i class="material-icons notif-notif">notifications</i>
      <i class="material-icons notif-add">person_add</i>
    </div>
  );
};

export default Notifications;
