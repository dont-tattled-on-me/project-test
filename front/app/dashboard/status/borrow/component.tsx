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

const BorrowStatusComponent = () => {
  const pathName = usePathname();

  useEffect(() => {
    consoleProtect();
    RouteProtection(Number(localStorage.getItem("isLogin")), pathName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <main className="w-full min-h-screen bg-whitesmoke bg-opacity-40">
      <Navbar pathName={pathName} />

      <div className="w-[80%] mx-auto mt-8">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border-solid border-2 border-jet bg-bg p-4 w-[20%]">
                วันที่
              </th>
              <th className="border-solid border-2 border-jet bg-bg p-4 w-[15%]">
                รหัสอุปกรณ์
              </th>
              <th className="border-solid border-2 border-jet bg-bg p-4 w-[20%]">
                ผู้ขอยืม
              </th>
              <th className="border-solid border-2 border-jet bg-bg p-4 w-[20%]">
                ผู้ให้ยืม
              </th>
              <th className="border-solid border-2 border-jet bg-bg p-4 w-[10%]">
                สถานะ
              </th>
              <th className="border-solid border-2 border-jet bg-bg p-4 w-[15%]">
                รายละเอียด
              </th>
            </tr>
          </thead>
          <tbody className="w-full h-[50vh] overflow-y-auto">
            <tr>
              <td className="border-solid border-2 border-jet bg-whitesmoke text-jet"></td>
              <td className="border-solid border-2 border-jet bg-whitesmoke text-jet"></td>
              <td className="border-solid border-2 border-jet bg-whitesmoke text-jet"></td>
              <td className="border-solid border-2 border-jet bg-whitesmoke text-jet"></td>
              <td className="border-solid border-2 border-jet bg-whitesmoke text-jet"></td>
              <td className="border-solid border-2 border-jet bg-whitesmoke text-jet"></td>
            </tr>
          </tbody>
        </table>

        <div className="mt-10">
          <a
            href="/dashboard/status"
            className="text-2xl bg-bg p-4 rounded-xl hover:opacity-60 hover:scale-95"
          >
            ย้อนกลับ
          </a>
        </div>
      </div>
    </main>
  );
};

export default BorrowStatusComponent;
