"use client";
import StatCard from "@/components/Dashboard/StatCard";
import ChartCard from "@/components/Dashboard/ChartCard";
import AnnouncementCard from "@/components/Dashboard/AnnouncementCard";
import ScheduleCard from "@/components/Dashboard/ScheduleCard";
import RecentActivityCard from "@/components/Dashboard/RecentActivityCard";

const announcements = [
  {
    title: "Outing schedule for every department",
    time: "5 Minutes ago",
    pin: true,
  },
  { title: "Meeting HR Department", time: "Yesterday, 12:30 PM", pin: false },
  {
    title: "IT Department need two more talents for UX/UI Designer position",
    time: "Yesterday, 09:15 AM",
    pin: false,
  },
];

const schedules = [
  {
    title: "Review candidate applications",
    time: "Today - 11.30 AM",
    type: "priority",
  },
  {
    title: "Interview with candidates",
    time: "Today - 10.30 AM",
    type: "other",
  },
  {
    title: "Short meeting with product designer from IT Department",
    time: "Today - 09.15 AM",
    type: "other",
  },
];

const stats = [
  {
    title: "Available Position",
    value: 24,
    subtext: "4 Urgently needed",
    color: "red",
  },
  {
    title: "Job Open",
    value: 10,
    subtext: "4 Active hiring",
    color: "blue",
  },
  {
    title: "New Employees",
    value: 24,
    subtext: "4 Active hiring",
    color: "purple",
  },
];

const charts = [
  {
    title: "Total Employees",
    value: 216,
    subtext: (
      <>
        <div className="flex flex-col gap-1 my-3">
          <span>120 men</span>
          <span>96 Women</span>
        </div>
      </>
    ),
    change: "+2% Past month",
  },
  {
    title: "Talent Request",
    value: 16,
    subtext: (
      <>
        <div className="flex flex-col gap-1 my-3">
          <span>6 men</span>
          <span>10 Women</span>
        </div>
      </>
    ),
    change: "+5% Past month",
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col xl:flex-row justify-center items-start mt-20 md:mt-24 lg:ml-24 mb-10 gap-5">
      <div className="pl-7 py-8 max-w-full">
        <span className="text-2xl font-bold">Dashboard</span>
        <div className="grid md:grid-cols-3 gap-6 mb-6 mt-6 md:justify-center items-center">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              subtext={stat.subtext}
              color={stat.color}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 justify-between items-center">
          {charts.map((chart, index) => (
            <ChartCard
              key={index}
              title={chart.title}
              value={chart.value}
              subtext={chart.subtext}
              change={chart.change}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="col-span-2 max-w-[calc(100%-2rem)] md:max-w-[calc(100%-2rem)]">
            <AnnouncementCard announcements={announcements} />
          </div>
        </div>
      </div>
      <div className="max-md:max-w-full md:min-w-[200px] flex max-lg:flex-col lg:flex-row xl:flex-col justify-start items-start gap-5 pl-7 xl:pl-0 xl:mt-[84px]">
        <RecentActivityCard />
        <ScheduleCard schedules={schedules} />
      </div>
    </div>
  );
}
