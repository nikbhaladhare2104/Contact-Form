import React, { useState } from "react";

const ModernForm = () => {
  const [checked, setChecked] = useState(false);
  const [checkedQuery, setCheckedQuery] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    query: "",
    message: "",
    consent: Boolean(checked),
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // e.preventDefault();
    setFormData((prev) => ({
      ...prev,
      query: checkedQuery,
      consent: checked,
    }));
    if (
      // !formData.consent ||
      // !formData.query ||
      !formData.message ||
      !formData.email ||
      !formData.first_name ||
      !formData.last_name
    ) {
      return alert("All fields are required");
    }
    console.log(formData);
  };
  return (
    <div className="container">
      <h1
        style={{
          fontSize: "1.9rem",
          marginBottom: "1rem",
          letterSpacing: "0px",
        }}
      >
        Contact Us
      </h1>
      <div className="name">
        <div className="input-group">
          <input
            required=""
            type="text"
            name="text"
            autocomplete="off"
            className="input"
            placeholder=""
          />
          <label className="user-label">First Name</label>
        </div>
        <div className="input-group">
          <input
            required=""
            type="text"
            name="text"
            autocomplete="off"
            className="input"
            placeholder=""
          />
          <label className="user-label">Last Name</label>
        </div>

        {/* <div className="full-name">
          <label htmlFor="first-name">First Name *</label>
          <input
            type="text"
            id="first-name"
            name="first_name"
            value={formData.first_name}
            onChange={(e) => handleChange(e)}
          />
        </div> */}
        {/* <div className="full-name">
          <label htmlFor="last-name">Last Name *</label>
          <input
            type="text"
            id="last-name"
            name="last_name"
            value={formData.last_name}
            onChange={(e) => handleChange(e)}
          />
        </div> */}
      </div>
      <div className="input-group email">
        <input
          required=""
          type="email"
          name="email"
          autocomplete="off"
          className="input"
          placeholder=""
        />
        <label className="user-label">Email Address</label>
      </div>

      <div className="query">
        {/* <p>Query Type *</p> */}
        <div class="radio-button-container">
          <div className="radio-button">
            <input
              type="radio"
              className="radio-button__input"
              id="radio1"
              name="radio-group"
            />
            <label class="radio-button__label" for="radio1">
              <span class="radio-button__custom"></span>
              General Inquiry
            </label>
          </div>
          <div class="radio-button">
            <input
              type="radio"
              class="radio-button__input"
              id="radio2"
              name="radio-group"
            />
            <label class="radio-button__label" for="radio2">
              <span class="radio-button__custom"></span>
              Support Request
            </label>
          </div>
        </div>
      </div>
      <div className="input-group message">
        <textarea
          required=""
          type="text"
          name="message"
          autocomplete="off"
          className="input"
          placeholder=""
        />
        <label className="user-label">Message </label>
      </div>
      <div className="conditions">
        <label className="condition-label">
          <input type="checkbox" />
          <svg viewBox="0 0 64 64" height="1em" width="1em">
            <path
              d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
              pathLength="575.0541381835938"
              className="path"
            ></path>
          </svg>
        </label>
        <p className="condition-text">
          I consent to being contacted by the team
        </p>
      </div>
      <button className="btn">Submit</button>
    </div>
  );
};

export default ModernForm;
