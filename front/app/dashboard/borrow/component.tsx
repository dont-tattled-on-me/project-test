// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import { usePathname } from "next/navigation";
import { FormEvent, useEffect } from "react";

import { consoleProtect } from "@/modules/functions/consoleCopy";
import { RouteProtection } from "@/modules/functions/routeProtection";
import { Navbar } from "@/Components/Navbar";

const BorrowComponent = () => {
  const pathName = usePathname();

  useEffect(() => {
    consoleProtect();
    RouteProtection(Number(localStorage.getItem("isLogin")), pathName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="w-full min-h-screen bg-whitesmoke bg-opacity-40">
      <Navbar pathName={pathName} />

      <div className="ml-6 mt-6">
        <div id="form-controller" className="w-[70%]">
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">วันที่ขอยืม</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="date"
                placeholder="วันที่ขอยืม"
              />
            </div>

            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">เวลาขอยืม</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="time"
                placeholder="เวลาขอยืม"
              />
            </div>

            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">ชื่อ - สกุล</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="text"
                placeholder="ชื่อ - สกุล"
              />
            </div>

            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">งาน / แผนก</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="text"
                placeholder="งาน / แผนก"
              />
            </div>

            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">เบอร์โทรติดต่อ</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="text"
                placeholder="เบอร์โทรติดต่อ"
              />
            </div>

            <hr className="my-4" />

            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">รายงานแจ้งซ่อม</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="text"
                placeholder="ชื่ออุปกรณ์"
              />
            </div>
            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]"></p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="text"
                placeholder="รหัสอุปกรณ์"
              />
            </div>
            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">สาเหตุการยืม</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="text"
                placeholder="ระบุสาเหตุ"
              />
            </div>
            <div className="my-2 flex flex-row justify-start items-center">
              <p className="p-4 text-3xl w-[30%]">วันที่คาดว่าจะนำมาคืน</p>
              <input
                className="p-4 text-jet rounded-xl border-2 border-solid border-[transparent] hover:border-coral focus:border-coral outline-none w-70%"
                type="date"
                placeholder="ระบุอาคาร / ชั้น / ห้อง"
              />
            </div>

            <div className="w-full py-4 flex flex-row justify-between">
              <a
                className="p-4 bg-[#fe0000] rounded-lg hover:opacity-60 hover:scale-95"
                href="/dashboard"
              >
                ย้อนกลับ
              </a>
              <button
                className="p-4 bg-bg rounded-lg hover:opacity-60 hover:scale-95"
                type="submit"
              >
                ส่งคำร้อง
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default BorrowComponent;
