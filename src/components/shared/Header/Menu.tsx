import Link from "next/link";
import { ModeToggle } from "../Theme/theme-toogler";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Menu() {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <div className="space-x-2">
          <ModeToggle />
          <Link href={"/cart"}>
            <Button variant={"ghost"} className="cursor-pointer">
              <ShoppingCart />
              Cart
            </Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button className="cursor-pointer">
              <User />
              Signup
            </Button>
          </Link>
        </div>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
          <EllipsisVertical/>
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start pl-8">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            
              <ModeToggle />
              <Link href={"/cart"}>
                <Button variant={"ghost"} className="cursor-pointer">
                  <ShoppingCart />
                  Cart
                </Button>
              </Link>
              <Link href={"/sign-up"}>
                <Button className="cursor-pointer">
                  <User />
                  Signup
                </Button>
              </Link>
            
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}

export default Menu;
