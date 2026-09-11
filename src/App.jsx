import { useEffect } from "react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import MembersPage from "./pages/MembersPage.jsx";
import { useHashRoute } from "./router.js";

const ROUTES = {
  "/": HomePage,
  "/product": ProductPage,
  "/members": MembersPage,
};

export default function App() {
  const path = useHashRoute();
  const Page = ROUTES[path] ?? HomePage; // path มั่ว ๆ ให้กลับหน้าแรก

  // เปลี่ยนหน้าแล้วเลื่อนขึ้นบนสุด เหมือน navigation ปกติ
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [path]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-400/30">
      <Navbar />
      <main>
        <Page />
      </main>
      <Footer />
    </div>
  );
}
