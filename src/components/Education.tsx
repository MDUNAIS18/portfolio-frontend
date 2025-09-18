import { GraduationCap, Book, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Adhiyamaan College of Engineering",
    period: "2022 - 2026 (Expected)",
    location: "Hosur, Tamil Nadu, India",
    description: "Currently pursuing a comprehensive Computer Science Engineering program with focus on software development, algorithms, data structures, and modern computing technologies.",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Computer Networks",
      "Software Engineering",
      "Web Technologies",
      "Operating Systems",
      "Machine Learning Fundamentals"
    ],
    activities: [
      "Active participation in coding competitions",
      "Member of technical clubs and societies",
      "Collaborative projects with peers",
      "Workshops and technical seminars"
    ]
  };

  return (
    <section id="education" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-transparent bg-gradient-primary bg-clip-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and continuous learning in computer science
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Education Card */}
          <div className="card-soft card-hover hover-subtle p-8 mb-8 fade-in-up">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Institution Info */}
              <div className="lg:w-1/3">
                <div className="text-center lg:text-left space-y-4">
                  <div className="w-20 h-20 mx-auto lg:mx-0 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-large">
                    <GraduationCap className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{education.degree}</h3>
                    <p className="text-lg text-primary font-semibold">{education.institution}</p>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{education.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Details */}
              <div className="lg:w-2/3 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {education.description}
                </p>

                {/* Relevant Coursework */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Book className="w-5 h-5" />
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {education.coursework.map((course, index) => (
                      <div key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Activities */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Academic Activities</h4>
                  <div className="space-y-2">
                    {education.activities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Focus Areas */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Core Engineering",
                subjects: ["Algorithms", "Data Structures", "System Design"],
                icon: "🔧"
              },
              {
                title: "Software Development",
                subjects: ["Web Development", "Database Design"],
                icon: "💻"
              },
              {
                title: "Emerging Technologies",
                subjects: ["Cloud Computing"],
                icon: "🚀"
              }
            ].map((focus, index) => (
              <div key={index} className="card-soft card-hover hover-subtle p-6 text-center stagger-child fade-in-up">
                <div className="text-3xl mb-4">{focus.icon}</div>
                <h4 className="font-semibold text-foreground mb-3">{focus.title}</h4>
                <div className="space-y-2">
                  {focus.subjects.map((subject, subIndex) => (
                    <p key={subIndex} className="text-sm text-muted-foreground">{subject}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;