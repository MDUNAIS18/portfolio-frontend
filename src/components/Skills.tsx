import { Code, Database, Cloud, Smartphone, Globe, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL"]
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Django"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQLite"]
    },
   
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Git", "GitHub"]
    },
    {
      icon: Server,
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Xcode"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 slide-in-top">
            Technical <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index}
                className="card-glass p-8 stagger-child fade-in-up hover-subtle group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg mr-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-12 slide-in-top">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Data Structures & Algorithms", 
              "Object-Oriented Programming", 
              "Database Design", 
              "API Development", 
              "Responsive Design", 
              "Version Control", 
              "Problem Solving", 
              "Software Architecture"
            ].map((competency, index) => (
              <span 
                key={index}
                className="bg-white/80 backdrop-blur-sm text-foreground px-6 py-3 rounded-full text-base font-medium border border-white/20 shadow-lg hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-300 hover:scale-105 stagger-child fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {competency}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;