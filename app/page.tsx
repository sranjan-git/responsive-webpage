import Sidebar from "@/components/Dashboard/Sidebar";
import Header from "@/components/Dashboard/Header";
import Dashboard from "@/components/Dashboard/Dashboard";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto md:ml-24">
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}
