import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="m-2">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
}
