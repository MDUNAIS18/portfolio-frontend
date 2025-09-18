import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Achievements from './Achievements';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-200/25 to-purple-200/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <Navigation />
      <main className="relative z-10">
        <Hero />
        <div className="bg-white/80 backdrop-blur-sm">
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Achievements />
          <Contact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border-t border-white/20 py-12 relative z-10">
        <div className="container-max">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold text-foreground">
                Mohammed Unais
              </span>
            </div>
            <p className="text-muted-foreground text-lg">
              © 2025 Mohammed Unais. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 text-muted-foreground">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <span>Designed with ❤️</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;