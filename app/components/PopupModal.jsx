import React from "react";

function PopupModal({ open, onClose, message = "" }) {
  return (
    <div
      id="popup-modal"
      className={`reveal popup-modal popup-modal-${
        message === "Message delivered!" || message === "Thank you!"
          ? "sent"
          : "right"
      }`}
      style={{ display: "block", marginTop: open ? 0 : undefined }}
    >
      <h4 className="left">{message}</h4>
      <p>
        <a onClick={onClose}>
          <i className="fa fa-times fa-2x right"></i>
        </a>
      </p>
    </div>
  );
}

export default PopupModal;
