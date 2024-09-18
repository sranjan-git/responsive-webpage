import {
  LayoutGrid,
  Users,
  Calendar,
  User,
  Briefcase,
  HelpCircle,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/", active: true },
  { icon: Users, label: "Recruitment", href: "/" },
  { icon: Calendar, label: "Schedule", href: "/" },
  { icon: User, label: "Employee", href: "/" },
  { icon: Briefcase, label: "Department", href: "/" },
];

const otherItems = [
  { icon: HelpCircle, label: "Support", href: "/" },
  { icon: Settings, label: "Settings", href: "/" },
];

export default function Sidebar() {
  return (
    <aside className="min-w-[80px] lg:min-w-[100px] bg-gray-100 p-4 hidden md:flex flex-col fixed left-0 top-0 min-h-screen z-20">
      <div className="flex items-center justify-center my-6 gap-3">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="text-3xl font-bold text-[#0A337A] hidden lg:flex">
          Vasitum
        </span>
      </div>
      <nav className="flex flex-col justify-center gap-5 lg:px-1 lg:py-10">
        <span className="text-xs font-semibold text-gray-400 mb-4">
          MAIN MENU
        </span>
        <ul className="space-y-6 flex flex-col justify-center items-center lg:items-start">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center ${
                  item.active ? "text-red-500 font-semibold" : "text-gray-500"
                }`}
              >
                <item.icon className="mr-3" size={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <span className="text-xs font-semibold lg:text-start text-center text-gray-400 mt-8 mb-4">
          OTHER
        </span>
        <ul className="space-y-6 flex flex-col justify-center items-center lg:items-start">
          {otherItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center text-gray-500"
              >
                <item.icon className="mr-3" size={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
