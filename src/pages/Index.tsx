import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
    <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center px-6 md:px-12">
  <div className="max-w-7xl mx-auto w-full">
    {/* Hero Typography - Matching reference exactly */}
    <div className="relative">
      {/* Software - Left aligned, italic - MOVED LEFT */}
      <h1 className="hero-title text-left animate-slide-in-left italic -ml-4 lg:-ml-16">
        Software
      </h1>

            {/* Description on the right side - next to Software */}
          <p className="absolute -right-16 lg:-right-34 top-1/2 -translate-y-1/2 text-muted-foreground text-sm md:text-base max-w-xs text-right hidden lg:block">
              I am a beginner Web Developer focusing on learning React and building modern user interfaces.
            </p>
          </div>

          {/* Engineer - Right aligned, NOT italic - INCREASED SPACING */}
          <div className="relative mt-4 md:mt-6 lg:mt-12">
            <h1 className="hero-title text-right animate-slide-in-right not-italic" style={{ animationDelay: "0.2s" }}>
              Engineer
            </h1>

            {/* Description on the left side - MOVED MORE TO THE LEFT */}
            <p className="absolute -left-45 lg:-left-[200px] top-1/2 -translate-y-1/2 text-muted-foreground text-sm md:text-base max-w-md text-left hidden lg:block animate-fade-in z-10 leading-relaxed" style={{ animationDelay: "0.4s" }}>
           I am a beginner web developer who recently started learning programming. I am currently focusing on React to build modern user interfaces. I have a basic understanding of HTML, CSS, and JavaScript, and I am continuously improving my skills to create clean, simple, and user-friendly websites.
            </p>
          </div>

          {/* Mobile description */}
          <div className="mt-12 lg:hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-muted-foreground text-sm text-center">
              I am a Software Engineer / Full-Stack Developer. I specialize in building 
              end-to-end web experiences with rich interactions and animations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;