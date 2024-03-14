import { Sidebar } from "@/components/Sidebar/Sidebar";
import { useState } from "react";

const Documentation: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* header */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <h3>Hello world</h3>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
