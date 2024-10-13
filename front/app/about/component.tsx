// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import Image from "next/image";
import { useEffect } from "react";

import { consoleProtect } from "@/modules/functions/consoleCopy";

const AboutComponent = () => {
  useEffect(() => {
    consoleProtect();
  }, []);

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center gap-4">
      <div className="w-full text-whitesmoke text-4xl underline text-center">
        Developer Profile
      </div>
      <div className="w-[60%] bg-whitesmoke text-jet flex flex-row rounded-xl">
        <div className="w-[80%] flex flex-row justify-center items-center">
          <Image
            src="https://avatars.githubusercontent.com/u/25049577"
            alt="profile image"
            width={250}
            height={250}
            className="rounded-full my-6 p-2 border-4 border-solid border-coral hover:p-1 hover:scale-105"
          />
        </div>
        <div className="w-full px-4 py-6">
          <p className="text-3xl mb-4">Suphakit Pinyoworapot</p>
          <p className="text-xl underline mb-2">Links</p>
          <p className="text-xl flex flex-row gap-2">
            <a
              href="https://github.com/dethMastery"
              target="_blank"
              className="bg-jet text-whitesmoke p-2 rounded-xl hover:scale-95 hover:opacity-60"
            >
              Github
            </a>

            <a
              href="mailto:pinyoworapot@suphakit.net"
              target="_blank"
              className="bg-coral text-whitesmoke p-2 rounded-xl hover:scale-95 hover:opacity-60"
            >
              E-Mail
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutComponent;
