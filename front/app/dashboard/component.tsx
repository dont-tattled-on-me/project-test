// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Navbar } from "@/Components/Navbar";
import { RouteProtection } from "@/modules/functions/routeProtection";
import { consoleProtect } from "@/modules/functions/consoleCopy";
import Image from "next/image";

const DashboardComponents = () => {
  const pathName = usePathname();

  const [name, setName] = useState<string>();
  const [position, setPosition] = useState<string>();

  useEffect(() => {
    consoleProtect();
    RouteProtection(Number(localStorage.getItem("isLogin")), pathName);

    setName(`${localStorage.getItem("name")}`);
    setPosition(`${localStorage.getItem("position")}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  return (
    <main className="w-full min-h-screen bg-whitesmoke bg-opacity-40">
      <Navbar pathName={pathName} />

      <div className="ml-6 mt-6">
        <h1 className=" text-4xl text-hover">ข้อมูลส่วนตัว</h1>
        <div
          id="card"
          className="ml-6 mt-6 bg-whitesmoke w-[60%] rounded-lg flex flex-row"
        >
          <div
            id="pic-hover"
            className="flex flex-row justify-center items-center flex-1"
          >
            <Image
              src="https://picsum.photos/1080/1080"
              alt="profile picture"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div id="content-hover" className="p-8">
            <p className="text-jet/70 text-xl">ชื่อ - สกุล</p>
            <p className="text-jet text-3xl">{name}</p>
            <p className="text-jet/70 text-xl">ตำแหน่ง</p>
            <p className="text-jet text-3xl">{position}</p>
            <p className="text-jet/70 text-xl">ห้องทำงาน</p>
            <p className="text-jet text-3xl">-</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardComponents;
