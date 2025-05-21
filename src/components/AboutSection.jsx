import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Acerca de <span className="text-primary">Mi</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desarrollador de Software apasionado y creador de tecnología
            </h3>

            <p className="text-muted-foreground">
            Con más de 3 años de experiencia en el desarrollo web, estoy especializado en la creación de aplicaciones robustas, seguras y de alto rendimiento desde el lado del servidor. Trabajo con tecnologías modernas para construir soluciones escalables y eficientes que cumplen con los estándares actuales de calidad y rendimiento.
            </p>

            <p className="text-muted-foreground">
            Me apasiona diseñar soluciones elegantes para problemas complejos, y me mantengo en constante aprendizaje para estar al día con las últimas herramientas, frameworks y buenas prácticas en el desarrollo backend.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              {/* <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a> */}

              <a
                href="https://drive.google.com/file/d/1x5jhbedQjGQE7FdP3eXQ2_XkcQgmB7-d/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desarrollo Web</h4>
                  <p className="text-muted-foreground">
Creación de sitios web y aplicaciones web responsivos con frameworks modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
Diseño de interfaces de usuario intuitivas y experiencias de usuario fluidas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Gestión de proyectos</h4>
                  <p className="text-muted-foreground">
Liderando proyectos desde su concepción hasta su finalización con metodologías ágiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
