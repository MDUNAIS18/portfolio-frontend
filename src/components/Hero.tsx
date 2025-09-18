import { ArrowDown, Download, Mail, User } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-container bg-abstract">

      <div className="hero-content">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Text Content */}
          <div className="hero-text fade-in-up">
            <div className="space-y-6">
              {/* Greeting */}
              <p className="text-lg text-muted-foreground font-medium">
                Hello, I'm
              </p>

              {/* Main Name */}
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                MOHAMMED UNAIS
              </h1>

              {/* Title */}
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Python Developer | Cloud Enthusiast
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                I'm a highly motivated and detail-oriented Python Developer with a strong foundation in programming and problem-solving. I strive to build efficient applications, write clean code, and collaborate effectively with teams.
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary text-lg px-8 py-4"
                >
                  Hire Me
                </button>
                <a
                  href="/MOHAMMED UNAIS RESUME.pdf"
                  download
                  className="btn-outline text-lg px-8 py-4 flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="hero-image fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-[var(--shadow-medium)] bg-white p-2">
                <img
                  src="/IMG_2011.jpg"
                  alt="Mohammed Unais"
                  className="w-full h-full object-cover rounded-xl"
                  draggable={false}
                />
              </div>
              {/* Decorative elements removed for a minimal profile effect */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;