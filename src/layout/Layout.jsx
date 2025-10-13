import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative bg-black">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
