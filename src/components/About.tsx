import { BookOpen, Code, Target, Award, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: BookOpen,
      title: "B.E. CSE",
      description: "Computer Science Engineering student"
    },
    {
      icon: Code,
      title: "Programming Languages",
      description: "Python,SQL"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MySQL, MongoDB"
    },
    {
      icon: Award,
      title: "Cloud Computing",
      description: "AWS & modern cloud solutions"
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 slide-in-top">
            About <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn more about my journey, skills, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in-left">
            <div className="card-glass p-10 hover-subtle">
              <h3 className="text-3xl font-bold text-foreground mb-6">My Story</h3>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Mohammed Unais, currently pursuing Computer Science Engineering at Adhiyamaan College of Engineering. 
                  I specialize in Python and Cloud Computing (AWS), with a strong passion for 
                  continuous learning and growth.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My goal is to leverage technology to solve real-world problems and create impactful solutions 
                  that make a difference in people's lives.
                </p>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div 
                  key={index}
                  className="card-glass p-8 text-center stagger-child fade-in-right hover-subtle group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{highlight.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;