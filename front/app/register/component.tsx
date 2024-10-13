// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { RouteProtection } from "@/modules/functions/routeProtection";
import { RegisterProvider } from "@/modules/api/register";
import { consoleProtect } from "@/modules/functions/consoleCopy";

const RegisterComponent = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [position, setPosition] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const pathName = usePathname();

  useEffect(() => {
    consoleProtect();
    RouteProtection(Number(localStorage.getItem("isLogin")), pathName);
  }, [pathName]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      firstName != undefined &&
      lastName != undefined &&
      position != undefined &&
      username != undefined &&
      password != undefined &&
      confirmPassword != undefined
    ) {
      if (password != confirmPassword) {
        alert("Password is not match");
      } else {
        let payload = {
          firstName: firstName,
          lastName: lastName,
          position: position,
          username: username,
          password: password,
        };

        RegisterProvider(payload);
      }
    } else {
      console.log("no data provided");
      alert("Some field still blank");
    }
  };

  return (
    <main className="w-full h-screen flex flex-row justify-center items-center">
      <div className="w-[90%] md:w-[40%] flex flex-col items-center text-center gap-4 bg-whitesmoke bg-opacity-70 p-8 rounded-2xl">
        <h1 className="text-5xl text-jet mb-4">REGISTER</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col gap-4 items-center text-center"
        >
          <div id="name-holder" className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-[100%] text-jet bg-whitesmoke text-center px-4 py-2 rounded-lg border-2 border-solid focus:border-coral outline-none"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-[100%] text-jet bg-whitesmoke text-center px-4 py-2 rounded-lg border-2 border-solid focus:border-coral outline-none"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="text"
            placeholder="Job Position"
            className="w-[100%] text-jet bg-whitesmoke text-center px-4 py-2 rounded-lg border-2 border-solid focus:border-coral outline-none"
            onChange={(e) => setPosition(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-[100%] text-jet bg-whitesmoke text-center px-4 py-2 rounded-lg border-2 border-solid focus:border-coral outline-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-whitesmoke text-jet border-solid border-2 border-jet text-xl p-4 rounded-[4rem] w-[60%] hover:scale-95"
          >
            Register
          </button>
        </form>
      </div>
    </main>
  );
};

export default RegisterComponent;
