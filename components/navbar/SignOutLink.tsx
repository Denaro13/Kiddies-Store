"use client";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SignOutLink = () => {
  const { toast } = useToast();

  const handleSignOut = () => {
    toast({
      description: "Logout Successful",
    });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleSignOut}>
        Log Out
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
