import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Page1 from "./glow-menu";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex fixed right-0 left-0 top-4 z-50 justify-center pointer-events-none">
        <div className="px-6 w-full max-w-6xl pointer-events-auto">
          <Page1 />
        </div>
      </div>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
