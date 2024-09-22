import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { CircleUserRound } from "lucide-react";

const UserIcon = async () => {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="profile Image"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <CircleUserRound className="w-6 h-6 bg-primary rounded-full text-white" />
  );
};

export default UserIcon;
