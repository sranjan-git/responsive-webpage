"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/pages/card";
import { Button } from "@/components/pages/button";
import { MoreHorizontal, ChevronDown, Pin } from "lucide-react";

interface AnnouncementProps {
  title: string;
  time: string;
  pin: boolean;
}

export default function AnnouncementCard({
  announcements,
}: {
  announcements: AnnouncementProps[];
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">Announcement</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          className="shadow-[0px_0px_1px] text-gray-500 text-[0.5rem] px-2 py-1 flex gap-2 rounded-sm"
        >
          <span>Today, 13 Sep 2021</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="mt-5 py-0 ">
        <ul className="space-y-4 flex flex-col overflow-y-auto max-h-52">
          {announcements
            .sort((a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0))
            .map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-md"
              >
                <div className="flex flex-col space-y-1">
                  <span className="font-normal text-sm">{item.title}</span>
                  <span className="text-xs text-gray-500">{item.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon">
                    <Pin
                      size={16}
                      className={`rotate-45 ${
                        item.pin ? "text-black" : "text-gray-400"
                      }`}
                      fill={item.pin ? "black" : "#b2b2b2"}
                    />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal size={16} />
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </CardContent>
      <div className="flex items-center justify-center w-full border-t pb-2">
        <Button variant="link" className="mt-1 text-red-500">
          See All Announcement
        </Button>
      </div>
    </Card>
  );
}
