import React from "react";
import UserForm from "../../components/userForm";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Profile :D</h1>
      <p>
        Hello {user.firstName} {user.lastName}
      </p>
      <p>Skills: {user.skills}</p>
      <UserForm />
    </div>
  );
};

export default Profile;
