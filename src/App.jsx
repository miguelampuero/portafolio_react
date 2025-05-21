import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

function LocationLogger() {
  const location = useLocation();
  console.log("Ruta actual:", location.pathname);
  return null;
}

function App() {
  return (
    <>
      <Toaster />
      <HashRouter>
        <LocationLogger />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;