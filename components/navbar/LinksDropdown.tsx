import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiAlignLeft } from "react-icons/ci";
import { links } from "@/utils/links";
import Link from "next/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignOutLink from "./SignOutLink";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <CiAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36" align="start" sideOffset={10}>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton>
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
        <SignedIn>
          {links.map((link, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link href={link.href} className="capitalize w-full">
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
