import React from "react";
import "../styles/alerts.css";

const Invite = props => {
  return (
    <section className="invite__alert-wrap">
      <form className="invite__alert" onSubmit={props.submitMsg}>
        <button className="invite__btn-dismiss" onClick={props.clickCancel}>
          <i class="material-icons">clear</i>
        </button>

        <h1 className="invite__tit">You can customize this invitation</h1>
        <p className="invite__txt">
          JoinIn members are more likely to accept invitations that include
          a&nbsp;personal note.
        </p>
        <div className="invite__btns">
          <button className="invite__btn-add" onClick={props.clickAddMsg}>
            Add a note
          </button>
          <button className="invite__btn-send" onClick={props.clickSend}>
            Send now
          </button>
        </div>
      </form>
    </section>
  );
};

export default Invite;
