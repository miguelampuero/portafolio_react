import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construir asunto y cuerpo para mailto
    const subject = encodeURIComponent(`Mensaje de ${name}`);
    const body = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`);

    // Link mailto dinámico
    const mailtoLink = `mailto:miguel.ampueroh@gmail.com?subject=${subject}&body=${body}`;

    // Abrir cliente de correo
    window.location.href = mailtoLink;

    // Mostrar toast y limpiar formulario tras 1 segundo
    // setTimeout(() => {
    //   toast({
    //     title: "Mensaje enviado",
    //     description: "Gracias por tu mensaje. Te responderé pronto.",
    //   });
    //   setIsSubmitting(false);
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Ponte en <span className="text-primary"> Contacto</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme. Siempre estoy abierto a hablar sobre nuevas oportunidades.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:miguel.ampueroh@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    miguel.ampueroh@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Celular</h4>
                  <a
                    href="tel:+51981041162"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +51 981 041 162
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Ubicación</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Lima, Perú
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Conéctate conmigo</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/miguelangelampueroh/" target="_blank" rel="noreferrer">
                  <Linkedin />
                </a>
                <a href="https://github.com/miguelampuero?tab=repositories" target="_blank" rel="noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Envía un Mensaje</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Tu nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ingresa tu nombre..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Tu correo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Ingresa tu correo..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tu mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hola me gustaría hablar sobre..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Abriendo cliente..." : "Enviar Mensaje"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};