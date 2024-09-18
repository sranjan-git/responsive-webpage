"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/pages/card";

interface StatCardProps {
  title: string;
  value: number;
  subtext: string;
  color: string;
}

export default function StatCard({
  title,
  value,
  subtext,
  color,
}: StatCardProps) {
  const bgColor = {
    red: "bg-red-100/90",
    blue: "bg-blue-100/90",
    purple: "bg-purple-100/90",
  }[color];

  const textColor = {
    red: "text-red-500",
    blue: "text-blue-500",
    purple: "text-purple-500",
  }[color];

  return (
    <Card
      className={`${bgColor} max-md:max-w-[calc(100%-2rem)] md:min-w-[220px] text-xl min-h-[150px] shadow-none`}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-5">
        <CardTitle className="text-sm lg:text-sm font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-center gap-5">
        <div className="text-3xl lg:text-4xl font-medium">{value}</div>
        <p className={`text-sm lg:text-[0.75rem] ${textColor}`}>{subtext}</p>
      </CardContent>
    </Card>
  );
}
