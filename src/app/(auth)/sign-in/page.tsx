import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import SignInForm from "./credentails-signin-form";
import { auth } from "../../../../auth";
import {redirect} from "next/navigation"
export const metadata: Metadata = {
  title: "Sign In",
};
async function page(props:{searchParams:Promise<{callbackurl:string}>}) {
  const {callbackurl} = await props.searchParams;
  const session = await auth();
  if(session){
    redirect(callbackurl||"/")
  }
  return (
    <>
      <div className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="flex items-center flex-col">
            <div className="flex items-center justify-center">
              <Image src={"/images/logo.png"} alt="Logo" height={100} width={100}/>
            </div>
            <CardTitle>
              Sign In
            </CardTitle>
            <CardDescription>
              Sign In to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm/>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default page;
