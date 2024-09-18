"use client";
import {
  Bell,
  ChevronDown,
  Search,
  MessageSquareMore,
  Menu,
} from "lucide-react";
import { Button } from "@/components/pages/button";
import { Input } from "@/components/pages/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/pages/avatar";

export default function Header() {
  return (
    <header className="flex justify-between items-center pl-8 pr-8 py-8 bg-white lg:ml-32 fixed w-dvw md:w-[calc(100dvw-100px)] lg:w-[calc(100dvw-200px)] max-h-[100px] z-10">
      <div className="relative flex items-center">
        <div className="flex lg:hidden">
          <Button variant="ghost" size="icon">
            <Menu size={20} />
          </Button>
        </div>
        <Input
          type="text"
          placeholder="Search"
          className="pl-5 pr-10 py-7 w-96 rounded-md hidden md:flex"
        />
        <Search
          className="absolute -right-5 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          size={20}
        />
      </div>
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="icon"
          className="relative hover:bg-transparent"
        >
          <Bell size={20} className="text-gray-500" />
          <div className="rounded-full size-3 border-2 border-white bg-red-600 relative right-3 -top-2"></div>
        </Button>
        <Button variant="ghost" size="icon" className="hover:bg-transparent">
          <MessageSquareMore size={20} className="" />
        </Button>
        <Button variant="ghost" className="hover:bg-transparent flex gap-2">
          <Avatar>
            <AvatarImage src="/acc.jpg" alt="@shadcn" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            <span className="font-medium hidden lg:flex">Admirra John</span>
            <ChevronDown size={16} className="inline -ml-2 lg:ml-1" />
          </div>
        </Button>
      </div>
    </header>
  );
}
