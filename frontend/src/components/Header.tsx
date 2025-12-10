import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

export default function Header() {
  const [position, setPosition] = React.useState("bottom");
  const [lang, setLang] = React.useState("English");

  const languages: string[] =  [
    "English", "Spanish", "Chinese"
  ];

  function changeMenuLanguage(){
    setLang("Spanish");
  }

  return (
    <header className="relative w-full border-b border-zinc-200 bg-white">
      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 to-transparent pointer-events-none" />

      <div className="relative">
        {/* Main header content */}
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-700 flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-black text-foreground text-lg tracking-tight">
                studio
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button variant="outline"> {lang} </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Language</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                  >
                    <DropdownMenuRadioItem value="top">
                      English
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="bottom">
                      Spanish
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="right">
                      Chinese
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>

              <Button className="bg-zinc-900 hover:bg-zinc-800">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
