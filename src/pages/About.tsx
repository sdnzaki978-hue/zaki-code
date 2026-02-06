import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Photo Section */}
            <div className="flex justify-center animate-fade-in">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-secondary flex items-center justify-center overflow-hidden border border-border">
                  {/* Your Photo - zaki.png */}
                  <img 
                    src="/zaki.png" 
                    alt="Zakaria"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // إذا الصورة ما اشتغلت، يحط placeholder
                      e.currentTarget.style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-32 h-32 text-muted-foreground flex items-center justify-center text-6xl">👤</div>';
                      }
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary/30 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/20 blur-xl" />
              </div>
            </div>

            {/* Text Section */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div>
                <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                  About Me
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">
                  Zakaria
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  My name is <span className="text-foreground font-medium">Zakaria</span>, 
                  I am <span className="text-primary font-medium">15 years old</span> from 
                  <span className="text-foreground font-medium"> Algeria</span>.
                </p>
                
                <p>
                  I study management and economics at school.
                </p>
                
                <p>
                  I am <span className="text-foreground font-medium">self-taught in programming</span> and 
                  a beginner developer exploring the world of web development.
                </p>
                
                <p>
                  Currently, I am learning{" "}
                  <span className="text-primary font-medium">React</span> and{" "}
                  <span className="text-primary font-medium">Tailwind CSS</span> to build 
                  modern and beautiful web applications.
                </p>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "Tailwind CSS", "JavaScript",].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-secondary text-foreground border border-border hover:border-primary transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;