import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="m-2 min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
}
