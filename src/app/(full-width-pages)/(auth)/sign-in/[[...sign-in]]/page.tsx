import React from "react";
import { SignInForm } from "@/components/auth";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <SignIn/>
    </>
  )
}
