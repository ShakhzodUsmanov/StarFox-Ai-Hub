import Navbar from "@/components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inst-y-0 z-[80] bg-gray-900">
        <div>Hello sidebar</div>
      </div>
      <main className="md:pl-72">
        <Navbar/>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;