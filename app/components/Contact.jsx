import React, { useState } from "react";
import PopupModal from "./PopupModal";

const Contact = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [message, setMessage] = useState("Thank you!");

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    if (name && email && message) {
      fetch("/Contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.success) {
            setOpenPopup(true);
            setMessage("Message delivered!");
            e.target.reset();
          } else {
            setOpenPopup(true);
            setMessage("Failed to send message.");
          }
        })
        .catch((error) => {
          console.error(error);
          setOpenPopup(true);
          setMessage("Failed to send message.");
        });
    } else if (!name) {
      setOpenPopup(true);
      setMessage("Please fill in your name");
    } else if (!email) {
      setOpenPopup(true);
      setMessage("Please fill in your email address");
    } else {
      setOpenPopup(true);
      setMessage("Please fill in your message");
    }
  };

  return (
    <div className="contact">
      <div className="row page">
        <div className="large-12 columns">
          <h1>{"<Let's Chat/>"}</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="large-6 columns">
            <input
              className="contactmsg"
              type="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="large-6 columns">
            <input
              className="contactmsg"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="large-12 columns">
            <textarea
              className="contactmsg"
              name="message"
              placeholder="Message"
            />
          </div>
          <div className="large-12 columns">
            <input type="submit" className="button" value="Send your message" />
          </div>
        </form>
      </div>
      <PopupModal
        message={message}
        open={openPopup}
        onClose={() => setOpenPopup(false)}
      />
    </div>
  );
};

export default Contact;
