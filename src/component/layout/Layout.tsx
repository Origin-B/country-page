import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="bg-primary font-be-vietnam-pro text-text stroke-text flex min-h-screen flex-col items-center overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}
