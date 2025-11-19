import { Target, Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Strategic planning aligned with your financial objectives",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified professionals with decades of experience",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Personalized solutions for every individual need",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Consistent growth and superior returns",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              MoneyTree Wealth
            </span>
          </h2>
          <p className="text-lg text-foreground/70">
            We are a team of dedicated financial experts committed to helping you achieve financial freedom and security. With a client-first approach and innovative strategies, we turn your financial goals into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card p-8 md:p-12 rounded-2xl border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-foreground/70 mb-4">
                To empower individuals and families to achieve their financial dreams through expert guidance, innovative solutions, and unwavering commitment to their success.
              </p>
              <p className="text-foreground/70">
                We believe in building long-term relationships based on trust, transparency, and exceptional service.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Integrity First</h4>
                  <p className="text-sm text-foreground/60">Ethical practices in every decision</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Innovation</h4>
                  <p className="text-sm text-foreground/60">Cutting-edge financial strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">Excellence</h4>
                  <p className="text-sm text-foreground/60">Superior service and results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
