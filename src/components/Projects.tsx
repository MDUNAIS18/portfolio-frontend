import { ExternalLink, Github, Code, Database, Gamepad2, Briefcase, Ticket, Leaf, Voicemail, ChartBarStackedIcon, MessageCircle } from 'lucide-react';
import { ChartTooltip } from './ui/chart';

const Projects = () => {
  const projects = [
    {
      icon:  MessageCircle,
      title: "Auto Replay AI ChatBot ",
      description: "A modern real-time chat application built with Django and WebSockets, featuring instant messaging, user authentication, and a clean, responsive interface.",
      technologies: ["Python", "WebSockets","OpenAI CV"],
      features: ["Real-time messaging", "User authentication", "Responsive design", "Message history"],
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/MDUNAIS18/AUTO-REPLY-AI-CHATBOT"
    },
    {
      icon: Ticket,
      title: "Movie Ticket Booking System",
      description: "An Avengers-themed movie ticket booking platform with seat selection, payment integration, and an immersive user experience.",
      technologies: ["Django", "MySQL", "JavaScript", "HTML", "CSS"],
      features: ["Seat selection", "Payment processing", "Movie listings", "Booking management"],
      gradient: "from-red-500 to-pink-500",
      github :"https://github.com/MDUNAIS18/Movie-Booking-System"
    },
    {
      icon: Leaf,
      title: "Digital Farmer Plant Diseases Recognition",
      description:"Designed a questionnaire with 38 attributes, refined with horticulturists and farmers, to predict plant diseases early. This approach enables faster, low-cost detection before formal screening.",
      technologies: ["HTML", "CSS", "JavaScript","Django", "Roboflow", "Tensorflow"],
      features: ["To find the Diseases easily", "It give the accurate result", "Diseases can Identified by image"],
      gradient: "from-green-500 to-emerald-500",
      github: "https://github.com/MDUNAIS18/Digital_Farmer-Plant_Diseases_Recognition"
    },
    {
      icon: Voicemail,
      title: "Voice activated virtual assistent openAI",
      description: "Listen for a wake word (\"Jarvis\") Perform web actions (open Google, YouTube, LinkedIn, etc.) Play songs from a predefined music library Answer general queries using OpenAI's GPT model.",
      technologies: ["Python", "OpenAI API","speech_recognition"],
      features: ["It can access like assistent","It does the work by our voice","OpenAI API Wake Word Activation (\"Jarvis\")"],
      gradient: "from-purple-500 to-violet-500",
      github: "https://github.com/MDUNAIS18/VOICE-ACTIVATED-VIRTUAL-ASSISTANT---OPENAI"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-transparent bg-gradient-primary bg-clip-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={index}
                className="card-soft card-hover hover-subtle p-8 stagger-child fade-in-up group"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-medium transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-300"
                      onClick={() => {
                        if (project.github) {
                          window.open(project.github, "_blank");
                        }
                      }}
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium border border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <button
            className="btn-outline"
            onClick={() => window.open("https://github.com/MDUNAIS18?tab=repositories", "_blank")}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;