"use server";

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signIn, signOut } from "../../../auth";
import { signFormSchema } from "../validator";

// signin with credentials
export async function signInWithCredentials(
  preState: unknown,
  formData: FormData
) {
  try {
    const user = signFormSchema.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });
    await signIn("credentials", user);
    return { success: true, message: "Signed In successfully " };
  } catch (error) {
    // if(isRedirectError(error)){
    //   throw new Error("Redirect error occurred");
    // }
    return {success:false,message:"Invalid Email or Password"}
  }
}


export async function signOutUser() {
  await signOut();
  return;
}