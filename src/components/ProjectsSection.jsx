import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "🗃️ Sistema de Inventario",
    description: "Un sistema de inventario moderno para gestionar entradas, salidas y niveles de stock de forma rápida y sencilla",
    // desarrollo
    // image: "/projects/project1.png",
    // produccion
    image: "/portafolio_react/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/miguelampuero?tab=repositories",
  },
  {
    id: 2,
    title: "🏥 Historia Clinica",
    description:
      "Sistema electrónico para gestionar y consultar historias clínicas de pacientes de manera segura y eficiente.",
    image: "/portafolio_react/projects/project2.png",
    tags: ["Java", "JSP", "GlassFish", "MySQL", "Servlets", "MVC"],
    demoUrl: "#",
    githubUrl: "https://github.com/miguelampuero?tab=repositories",
  },
  {
    id: 3,
    title: "🧪 Prototipo: Yogurt Artesanal Misti",
    description:
      "Prototipo de una plataforma de comercio electrónico enfocada en la venta de yogurt artesanal. Incluye catálogo de productos, carrito de compras, autenticación de usuarios y procesamiento de pagos.",
    image: "/portafolio_react/projects/project3.png",
    tags: ["Figma", "User research", "UI/UX", "Wireframes"],
    demoUrl: "#",
    githubUrl: "https://www.figma.com/design/kxghspvSJo355PKb6HsfsY/Yogurt-Artesanal-del-Misti---media-y-alta-fidelidad?node-id=0-1&p=f",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Proyectos <span className="text-primary"> Destacados</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
Aquí les presento algunos de mis proyectos recientes. Cada proyecto fue elaborado con esmero, prestando atención al detalle, al rendimiento y a la experiencia del usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {/* <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a> */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/miguelampuero?tab=repositories"
          >
            Revisa mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
