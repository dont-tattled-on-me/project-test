// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

import { config } from "../config";

interface payloadInterface {
  firstName: string;
  lastName: string;
  position: string;
  username: string;
  password: string;
}

export function RegisterProvider(payload: payloadInterface) {
  fetch(`${config.APP_ROOT}/api/register`, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json; charset=UTF-8",
    }),
    body: JSON.stringify(payload),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp.payload);

      alert(resp.message);

      window.location.replace("/login");
    });
}
