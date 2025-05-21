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
          <Route path="/about" element={<Home scrollTo="about" />} />
          <Route path="/skills" element={<Home scrollTo="skills" />} />
          <Route path="/projects" element={<Home scrollTo="projects" />} />
          <Route path="/contact" element={<Home scrollTo="contact" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;