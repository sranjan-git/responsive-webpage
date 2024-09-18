"use client";

import {
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/pages/card";
import { ArrowUp } from "lucide-react";

const data = [
  { value: 30 },
  { value: 50 },
  { value: 45 },
  { value: 65 },
  { value: 70 },
];

export default function Component({
  title,
  value,
  subtext,
  change,
}: {
  title: string;
  value: number;
  subtext: React.ReactNode;
  change: string;
}) {
  return (
    <Card className="max-w-[calc(100%-2rem)] min-h-[200px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0"></CardHeader>
      <CardContent className="grid grid-cols-2 gap-2">
        <div className="flex flex-col items-start justify-center gap-5 mt-5">
          <CardTitle className="text-sm lg:text-[14px] font-medium">
            {title}
          </CardTitle>
          <div className="text-4xl lg:text-5xl font-medium">{value}</div>
          <span className="text-xs text-muted-foreground">{subtext}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-14">
          <div className="min-w-[7rem] lg:min-w-[150px] h-[80px]">
            <div className="flex flex-col relative top-6 left-0 w-full z-5 justify-center items-center">
              <span className="text-orange-600 text-xs font-semibold">
                {change.substring(0, 3)}
              </span>
              <ArrowUp className="inline-block text-orange-500" />
            </div>
            <ResponsiveContainer
              width="100%"
              height="100%"
              className="[background: linear-gradient(148.47deg, #FF5151 -3.36%, rgba(255, 255, 255, 0) 57.39%);]"
            >
              <RechartsLineChart data={data}>
                <defs>
                  <linearGradient
                    id="colorGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#FF5151"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={true}
                  fill="url(#colorGradient)"
                  strokeLinecap="round"
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-xs font-normal text-black rounded-sm bg-orange-500/10 py-1 px-2">
            {change}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
