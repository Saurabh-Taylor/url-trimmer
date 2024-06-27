import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger , DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const navigate = useNavigate();

  let user = true;
  return (
    <nav className="flex justify-between pt-4 pb-4 border-b mb-4 px-4 items-center">
      <Link to={"/"}>
        {/* <img className='h-16' src="" alt="Logo" /> */}
        <h4 className="">Logo</h4>
      </Link>
      <div>
        {!user ? (
          <Button
            onClick={() => navigate("/auth")}
            className="text-black"
            variant="outline"
          >
            Login
          </Button>
        ) : <DropdownMenuModel/>}
      </div>
    </nav>
  );
};

function DropdownMenuModel(params) {
    return  <DropdownMenu>
    <DropdownMenuTrigger>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            {/* Todo - to change the fallback item to some custom user id */}
            <AvatarFallback>ST</AvatarFallback>
        </Avatar>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem>Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
}

export default Header;
