import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user } = useAuth0();
  console.log(user);
  return (
    <div>
      <img src={user.picture} alt="UserImg" />
      <div>Hello {user.name}</div>
      <div>Hello {user.email}</div>
    </div>
  );
}

export default Profile;
