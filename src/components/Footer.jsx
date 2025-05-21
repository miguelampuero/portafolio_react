import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} © 2025 Miguel | Todos los derechos reservados.
Desarrollado con 💻 por Miguel Ampuero | GitHub | Contacto.
      </p>
    <a
      onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors cursor-pointer"
    >
      <ArrowUp size={20} />
    </a>
    </footer>
  );
};
