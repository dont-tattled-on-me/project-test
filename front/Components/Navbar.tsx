// ███████╗██╗   ██╗██████╗ ██╗  ██╗ █████╗ ██╗  ██╗██╗████████╗    ██████╗
// ██╔════╝██║   ██║██╔══██╗██║  ██║██╔══██╗██║ ██╔╝██║╚══██╔══╝    ██╔══██╗
// ███████╗██║   ██║██████╔╝███████║███████║█████╔╝ ██║   ██║       ██████╔╝
// ╚════██║██║   ██║██╔═══╝ ██╔══██║██╔══██║██╔═██╗ ██║   ██║       ██╔═══╝
// ███████║╚██████╔╝██║     ██║  ██║██║  ██║██║  ██╗██║   ██║       ██║██╗
// ╚══════╝ ╚═════╝ ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝   ╚═╝       ╚═╝╚═╝

export const Navbar = (props: { pathName?: string; isFixed?: boolean }) => {
  return (
    <div
      id="NavBar"
      className={`bg-bg w-full text-whitesmoke pt-6 pb-4 flex flex-row ${
        props.isFixed == true ? "fixed top-0 left-0" : ""
      }`}
    >
      <div id="left" className="w-full h-full flex flex-row px-2">
        <a
          href={`${props.pathName != "/dashboard" ? "/dashboard" : "#"}`}
          className={`text-2xl p-4 hover:opacity-60 ${
            props.pathName == "/dashboard" ? "opacity-60" : ""
          }`}
        >
          Home
        </a>
        <a
          href={`${
            props.pathName != "/dashboard/fix" ? "/dashboard/fix" : "#"
          }`}
          className={`text-2xl p-4 hover:opacity-60 ${
            props.pathName == "/dashboard/fix" ? "opacity-60" : ""
          }`}
        >
          แจ้งซ่อม
        </a>
        <a
          href={`${
            props.pathName != "/dashboard/borrow" ? "/dashboard/borrow" : "#"
          }`}
          className={`text-2xl p-4 hover:opacity-60 ${
            props.pathName == "/dashboard/borrow" ? "opacity-60" : ""
          }`}
        >
          ขอยืม
        </a>
        <a
          href={`${
            props.pathName != "/dashboard/status" ? "/dashboard/status" : "#"
          }`}
          className={`text-2xl p-4 hover:opacity-60 ${
            props.pathName == "/dashboard/status" ? "opacity-60" : ""
          }`}
        >
          เช็คสถานะ
        </a>
      </div>
      <div id="right" className="w-full h-full flex justify-end px-2 gap-4">
        <input
          type="text"
          className="px-2 w-[70px] hover:w-[30%] focus:w-[30%] focus:border-coral border-2 border-solid border-[transparent] rounded-xl text-jet outline-none"
          name="search"
          placeholder="search"
        />
        <a
          href="/logout"
          className="text-2xl p-4 hover:opacity-60 bg-[#fe0000] rounded-xl"
        >
          Logout
        </a>
      </div>
    </div>
  );
};
