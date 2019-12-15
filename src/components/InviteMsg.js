import React from "react";
import "../styles/alerts.css";

const InviteMsg = props => {
  return (
    <section className="invite__alert-wrap">
      <form className="invite__alert" onSubmit={props.submitMsg}>
        <button className="invite__btn-dismiss" onClick={props.clickCancel}>
          <i class="material-icons">clear</i>
        </button>
        <h1 className="invite__tit">Invite Bill to connect</h1>

        <p className="invite__txt-msg">
          <p>
            Build a quality network by connecting only with people you know.
          </p>
          <p>Message (optional)</p>
          <textarea
            placeholder="Ex: We know each other from..."
            value={props.message}
            maxLength="300"
            onChange={props.input}
          ></textarea>
        </p>
        <div className="invite__btns">
          <button className="invite__btn-cancel" onClick={props.clickCancel}>
            Cancel
          </button>
          <button className="invite__btn-send" onClick={props.clickSendMsg}>
            Send invitation
          </button>
        </div>
      </form>
    </section>
  );
};

export default InviteMsg;
