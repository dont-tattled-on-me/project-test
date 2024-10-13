// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

import { config } from "../config";

interface payloadInterface {
  username: string;
  password: string;
}

export function LoginProvider(payload: payloadInterface) {
  fetch(`${config.APP_ROOT}/api/login`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp.status == 1) {
        console.log("logged in");
        localStorage.setItem("isLogin", "1");
        localStorage.setItem("username", resp.payload.username);
        localStorage.setItem(
          "name",
          `${resp.payload.firstName} ${resp.payload.lastName}`
        );
        localStorage.setItem("position", resp.payload.position);

        window.location.replace("/dashboard");
      } else {
        console.log("un auth");
      }
    });
}
