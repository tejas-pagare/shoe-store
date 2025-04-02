"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInWithCredentials } from "@/lib/actions/user.actions";
import { DefaultSignUpValue } from "@/lib/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { setTimeout } from "timers/promises";

const SignInForm = () => {
  const searchParmas = useSearchParams();
  const callbackurl = searchParmas.get('callbackurl')||'/'
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button disabled={pending} size={"lg"} className="w-full cursor-pointer">
        {pending ? "Sign In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="callbackurl" value={callbackurl} />
      <div className="space-y-2 ">
        <Label htmlFor="email" className="font-bold">
          Email
        </Label>
        <Input
          name="email"
          id="email"
          defaultValue={DefaultSignUpValue.email}
          placeholder="Enter Email"
          type="email"
        />
      </div>
      <div className="space-y-2 ">
        <Label htmlFor="password" className="font-bold">
          Password
        </Label>
        <Input
          name="password"
          id="password"
          defaultValue={DefaultSignUpValue.password}
          placeholder="Emter Password"
          type="password"
        />
      </div>
      <div>
        <SignInButton />
      </div>
      {data && !data.success && (
        <div className="text-center text-red-600">{data.message}</div>
      )}
      <div className="text-center">
        Don't have an account?
        <Link href={"/sign-up"} target="_self" className="link text-blue-800">
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
