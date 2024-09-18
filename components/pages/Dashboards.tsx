import React from "react";
import { Bell, MessageSquare, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/pages/avatar";
import { Input } from "@/components/pages/input";
import { Button } from "@/components/pages/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/pages/card";

// Sidebar component
const Sidebar = () => {
  const menuItems = [
    { icon: "grid", label: "Dashboard", active: true },
    { icon: "users", label: "Recruitment" },
    { icon: "calendar", label: "Schedule" },
    { icon: "user", label: "Employee" },
    { icon: "briefcase", label: "Department" },
    { icon: "headphones", label: "Support" },
    { icon: "settings", label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-white p-6 hidden md:block">
      <div className="flex items-center mb-8">
        <svg
          className="w-8 h-8 mr-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L2 7L12 12L22 7L12 2Z"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 17L12 22L22 17"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2 12L12 17L22 12"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-2xl font-bold text-blue-600">Vasitum</span>
      </div>
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`mb-4 ${
                item.active ? "text-blue-600" : "text-gray-600"
              }`}
            >
              <a href="#" className="flex items-center">
                <span
                  className={`mr-4 ${
                    item.active ? "bg-blue-100" : ""
                  } p-2 rounded`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d={`M${item.icon}`} />
                  </svg>
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// Header component
const Header = () => {
  return (
    <header className="bg-white p-4 flex justify-between items-center">
      <div className="flex-1 md:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="flex-1">
        <Input type="search" placeholder="Search" className="max-w-sm" />
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600" />
        <MessageSquare className="w-6 h-6 text-gray-600" />
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

// StatCard component
const StatCard = ({
  title,
  value,
  subtext,
  color,
}: {
  title: string;
  value: string;
  subtext: string;
  color: string;
}) => {
  return (
    <Card className={`bg-${color}-500`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className={`text-4xl font-bold text-${color}-600`}>{value}</p>
        <CardDescription>{subtext}</CardDescription>
      </CardContent>
    </Card>
  );
};

// ChartCard component
const ChartCard = ({
  title,
  value,
  subtext,
  increase,
}: {
  title: string;
  value: string;
  subtext: string;
  increase: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-baseline">
          <p className="text-4xl font-bold">{value}</p>
          <span className="text-green-500">+{increase}%</span>
        </div>
        <CardDescription>{subtext}</CardDescription>
        {/* Add chart component here */}
      </CardContent>
    </Card>
  );
};

// AnnouncementCard component
const AnnouncementCard = ({
  title,
  time,
  pinned,
}: {
  title: string;
  time: string;
  pinned: boolean;
}) => {
  return (
    <div className="border-b py-4 flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="flex space-x-2">
        {pinned && (
          <svg
            className="w-5 h-5 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        )}
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>
    </div>
  );
};

// ScheduleCard component
const ScheduleCard = ({
  title,
  time,
  priority,
}: {
  title: string;
  time: string;
  priority: boolean;
}) => {
  return (
    <div className="border-b py-4 flex justify-between items-start">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{time}</p>
      </div>
      <div className="flex items-center space-x-2">
        {priority && (
          <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-800 rounded">
            Priority
          </span>
        )}
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <StatCard
                title="Available Position"
                value="24"
                subtext="4 Urgently needed"
                color="red"
              />
              <StatCard
                title="Job Open"
                value="10"
                subtext="4 Active hiring"
                color="blue"
              />
              <StatCard
                title="New Employees"
                value="24"
                subtext="4 Department"
                color="purple"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ChartCard
                title="Total Employees"
                value="216"
                subtext="120 Men, 96 Women"
                increase="2"
              />
              <ChartCard
                title="Talent Request"
                value="16"
                subtext="6 Men, 10 Women"
                increase="5"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Announcement</CardTitle>
                </CardHeader>
                <CardContent>
                  <AnnouncementCard
                    title="Outing schedule for every department"
                    time="5 Minutes ago"
                    pinned={true}
                  />
                  <AnnouncementCard
                    title="Meeting HR Department"
                    time="Yesterday, 12:30 PM"
                    pinned={false}
                  />
                  <AnnouncementCard
                    title="IT Department need two more talents for UX/UI Designer position"
                    time="Yesterday, 09:15 AM"
                    pinned={false}
                  />
                  <Button variant="outline" className="w-full mt-4">
                    See All Announcement
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>Upcoming Schedule</CardTitle>
                    <span className="text-sm text-gray-500">
                      Today, 13 Sep 2021
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ScheduleCard
                    title="Review candidate applications"
                    time="Today - 11.30 AM"
                    priority={true}
                  />
                  <ScheduleCard
                    title="Interview with candidates"
                    time="Today - 10.30 AM"
                    priority={false}
                  />
                  <ScheduleCard
                    title="Short meeting with product designer from IT Department"
                    time="Today - 09.15 AM"
                    priority={false}
                  />
                  <Button variant="outline" className="w-full mt-4">
                    Create a New Schedule
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
