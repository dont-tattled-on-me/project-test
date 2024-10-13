// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { consoleProtect } from "@/modules/functions/consoleCopy";
import { RouteProtection } from "@/modules/functions/routeProtection";
import { Navbar } from "@/Components/Navbar";

const StatusComponent = () => {
  const pathName = usePathname();

  useEffect(() => {
    consoleProtect();
    RouteProtection(Number(localStorage.getItem("isLogin")), pathName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <main className="w-full min-h-screen bg-whitesmoke bg-opacity-40">
      <Navbar pathName={pathName} isFixed={true} />

      <div className="w-full h-screen flex flex-col justify-center items-center gap-20">
        <div className="w-full h-[40vh] flex flex-row justify-around">
          <a
            className="text-5xl bg-bg p-8 rounded-xl flex flex-row justify-center items-center hover:opacity-60 hover:scale-95"
            href="/dashboard/status/fix"
          >
            สถานะอุปกรณ์แจ้งซ่อม
          </a>
          <a
            className="text-5xl bg-bg p-8 rounded-xl flex flex-row justify-center items-center hover:opacity-60 hover:scale-95"
            href="/dashboard/status/borrow"
          >
            สถานะอุปกรณ์ที่ขอยืม
          </a>
        </div>
        <div className="w-full justify-start px-12">
          <a
            href="/dashboard"
            className="text-2xl bg-bg p-4 rounded-xl hover:opacity-60 hover:scale-95"
          >
            ย้อนกลับ
          </a>
        </div>
      </div>
    </main>
  );
};

export default StatusComponent;
