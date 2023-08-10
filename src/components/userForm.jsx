import React, { useState } from "react";
import { connect } from "react-redux";
import { updateUser } from "../redux/userActions";

const UserForm = ({ updateUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, skills };
    updateUser(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <br />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <br />
      <input
        type="text"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
        placeholder="Skills"
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};

export default connect(null, { updateUser })(UserForm);
