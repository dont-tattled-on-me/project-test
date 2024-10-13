// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LoginProvider } from "@/modules/api/login";
import { RouteProtection } from "@/modules/functions/routeProtection";
import { consoleProtect } from "@/modules/functions/consoleCopy";

const LoginComponent = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const pathName = usePathname();

  useEffect(() => {
    consoleProtect();
    RouteProtection(Number(localStorage.getItem("isLogin")), pathName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username != undefined && password != undefined) {
      const payload = {
        username: username,
        password: password,
      };

      LoginProvider(payload);
    } else {
      console.log("no data provided");
    }
  };

  return (
    <main className="w-full h-screen flex flex-row justify-center items-center">
      <div className="w-[90%] md:w-[40%] flex flex-col items-center text-center gap-4 bg-whitesmoke bg-opacity-70 p-8 rounded-2xl">
        <h1 className="text-5xl text-jet mb-4">LOGIN</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-4 items-center text-center"
        >
          <input
            type="text"
            placeholder="Username"
            className="w-[100%] text-jet bg-whitesmoke text-center px-4 py-2 rounded-lg border-2 border-solid focus:border-coral outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-[100%] text-jet bg-whitesmoke text-center px-4 py-2 rounded-lg border-2 border-solid focus:border-coral outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-whitesmoke text-jet border-solid border-2 border-jet text-xl p-4 rounded-[4rem] w-[60%] hover:scale-95"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default LoginComponent;
