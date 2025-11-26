import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
