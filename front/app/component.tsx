// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import { consoleProtect } from "@/modules/functions/consoleCopy";
import { useEffect } from "react";

const IndexComponents = () => {
  useEffect(() => {
    consoleProtect();
  });

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-[90%] md:w-[40%] flex flex-col items-center text-center gap-4 bg-whitesmoke bg-opacity-70 p-6 rounded-2xl">
        <h1 className="text-5xl text-jet">WELCOME !</h1>
        <a
          className="bg-whitesmoke text-jet border-solid border-2 border-jet text-xl p-4 rounded-[4rem] hover:scale-95"
          href="/login"
        >
          Login
        </a>
        <a
          className="bg-whitesmoke text-jet border-solid border-2 border-jet text-xl p-4 rounded-[4rem] hover:scale-95"
          href="/register"
        >
          Register
        </a>
      </div>
    </main>
  );
};

export default IndexComponents;
