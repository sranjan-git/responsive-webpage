"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/pages/card";
import { Button } from "@/components/pages/button";

export default function RecentActivityCard() {
  return (
    <Card className="bg-[#161E54] text-white xl:max-w-[427px] lg:max-w-[300px] lg:min-h-[300px] xl:min-h-full max-md:max-w-[calc(100%-2rem)]">
      <CardHeader>
        <CardTitle>Recently Activity</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col">
        <span className="text-xs mb-2 text-gray-400">
          10.40 AM, Fri 10 Sept 2021
        </span>
        <span className="text-lg font-medium mb-5 xl:mb-2">
          You Posted a New Job
        </span>
        <span className="text-xs mb-8 xl:mb-4 text-gray-300">
          Kindly check the requirements and terms of work and make sure
          everything is right.
        </span>
        <div className="flex flex-row md:flex-col xl:flex-row justify-between items-start xl:items-center gap-5">
          <span className="text-xs">Today you makes 12 Activity</span>
          <Button
            variant="outline"
            className="bg-[#FF5151] text-white rounded-sm hover:bg-[#FF3232] hover:text-white"
          >
            See All Activity
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
