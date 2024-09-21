import React from "react";
import { FaChild } from "react-icons/fa";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <FaChild size={30} color="#FFD700" />
      </Link>
    </div>
  );
};

export default Logo;
