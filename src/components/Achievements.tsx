import { Award, BookOpen, Code, Trophy, Target, FileText } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: BookOpen,
      category: "Value Added Course",
      title: "Dynamic Web Design, Development & Hosting",
      description: "Completed course organized by INFOCHORD TECHNOLOGY PVT. LTD.",
      year: "2024"
    },
    {
      icon: BookOpen,
      category: "Value Added Course",
      title: "Design for Delight: Mastering Figma & Adobe XD",
      description: "Completed UI/UX design-focused training",
      year: "2024"
    },
    {
      icon: BookOpen,
      category: "Certification",
      title: "HTML – Beginners Course",
      description: "Completed course organized by MAKE LABS",
      year: "2024"
    },
    {
      icon: Target,
      category: "Workshop",
      title: "Networking Internals",
      description: "Attended hands-on workshop at ACE, Hosur",
      year: "2024"
    },
    {
      icon: FileText,
      category: "Certification",
      title: "Introduction to MongoDB",
      description: "Completed course by MongoDB Inc.",
      year: "2024"
    },
    {
      icon: FileText,
      category: "Certification",
      title: "Python Essentials 1 & 2",
      description: "Completed at Cisco Networking Academy",
      year: "2025"
    },
    {
      icon: Target,
      category: "Bootcamp",
      title: "DevOps: Next-level Process Automation Mastery",
      description: "Completed bootcamp at ACE, Hosur",
      year: "2025"
    },
    {
      icon: Code,
      category: "Internship",
      title: "Python Backend Developer",
      description: "IshaNeowep Software Technology Pvt. Ltd. (June 2025)",
      year: "2025"
    },
    {
      icon: Code,
      category: "Internship",
      title: "Python Development",
      description: "Infotact Solutions (June–July 2025)",
      year: "2025"
    }
  ];

  const skills = [
    { name: "Python Programming", level: 90 },
    { name: "Web Development", level: 85 },
    { name: "Database Management", level: 80 },
    { name: "Cloud Technologies", level: 70 }
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Achievements & <span className="text-transparent bg-gradient-primary bg-clip-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognition of my dedication to continuous learning and skill development
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index}
                className="card-soft card-hover hover-subtle p-6 stagger-child fade-in-up group"
              >
                <div className="space-y-4">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-medium group-hover:shadow-large transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {achievement.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-primary">{achievement.category}</p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Progress Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Chart */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Technical Proficiency</h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Goals and Aspirations */}
          <div className="card-soft hover-subtle p-8">
            <div className="space-y-6">
              <div className="text-center">
                <Trophy className="w-16 h-16 mx-auto text-accent mb-4" />
                <h3 className="text-2xl font-semibold text-foreground mb-4">Future Goals</h3>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Complete advanced cloud computing certifications (AWS Solutions Architect)</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Contribute to open-source projects and build a strong GitHub portfolio</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Develop expertise in machine learning and artificial intelligence</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p>Lead innovative projects that solve real-world problems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;