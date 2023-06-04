import React, { useContext } from "react";
import avatarImg from "../../../assets/images/placeholder.jpg";
import { AuthContext } from "../../../providers/AuthProvider";
const Avatar = () => {
  const { user } = useContext(AuthContext);

  return (
    <img
      src={user && user.photoURL ? user.photoURL : avatarImg}
      className="h-[30px] w-[30px] rounded-full"
      alt="profile"
    />
  );
};

export default Avatar;
