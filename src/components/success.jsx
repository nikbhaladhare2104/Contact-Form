import React from "react";

const Success = () => {
  return (
    <div className="success">
      <div className="success-heading">
        <img src="/icon-success-check.svg" alt="success icon" />
        <p className="heading-title">Message Sent!</p>
      </div>
      <p className="success-desc">
        Thanks for completing the form. We'll be in touch soon!
      </p>
    </div>
  );
};

export default Success;
