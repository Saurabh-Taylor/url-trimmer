import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOut } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();

  let user = false;
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
            variant="default"
          >
            Login
          </Button>
        ) : (
          <DropdownMenuModel />
        )}
      </div>
    </nav>
  );
};

function DropdownMenuModel(params) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden" >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          {/* Todo - to change the fallback item to some custom user id */}
          <AvatarFallback>ST</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
            {/* Todo - to add from DB */}
            Saurabh Tailor
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LinkIcon className="mr-2 h-4 w-4" /> My Links
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Header;
