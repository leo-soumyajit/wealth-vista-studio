import { Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import aboutTeamMeeting from "@/assets/about-team-meeting.jpg";
import aboutProfessionalWork from "@/assets/about-professional-work.jpg";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import founderProfile from "@/assets/founder-profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            {/* Main Image - Colored with border */}
            <div className="relative mb-6 lg:mb-0">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] -z-10" />
              <img
                src={aboutTeamMeeting}
                alt="Team Meeting"
                className="w-full h-[400px] object-cover rounded-[2rem] shadow-lg"
              />
              
              {/* Skilled Team Badge */}
              <div className="absolute bottom-6 right-6 bg-card/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-lg border border-border">
                <p className="text-sm font-semibold text-foreground">Skilled Team</p>
                <div className="flex -space-x-2 mt-2">
                  <img
                    src={teamMember1}
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                  />
                  <img
                    src={teamMember2}
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                  />
                  <img
                    src={teamMember3}
                    alt="Team member"
                    className="w-8 h-8 rounded-full border-2 border-card object-cover"
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-card bg-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                    9+
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Image - Grayscale with hover effect */}
            <div className="absolute bottom-0 right-0 w-1/2 lg:w-2/3">
              <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] -z-10" />
              <img
                src={aboutProfessionalWork}
                alt="Professional at work"
                className="w-full h-[300px] object-cover rounded-[2rem] shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full uppercase tracking-wide">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              The Journey Behind Our{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Business Success
              </span>
            </h2>

            <p className="text-foreground/70 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              MoneyTree Wealth is the go-to hub for early adopters and innovation enthusiasts, 
              offering cutting-edge financial solutions that drive success.
            </p>

            {/* Creative Solutions */}
            <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Creative Solutions</h3>
                <p className="text-foreground/60">
                  In today's competitive business landscape, the need for efficient IT 
                  solutions has been more critical.
                </p>
              </div>
            </div>

            {/* Actionable Solutions */}
            <div className="flex gap-4 items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Actionable Solutions</h3>
                <p className="text-foreground/60">
                  In today's competitive business landscape, the need for efficient IT 
                  solutions has been more critical.
                </p>
              </div>
            </div>

            {/* Business Success Progress */}
            <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Business Success</span>
                <span className="font-bold text-primary">88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>

            {/* Bottom CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
              >
                Find Services
              </Button>

              <div className="flex items-center gap-4">
                <img
                  src={founderProfile}
                  alt="Founder"
                  className="w-14 h-14 rounded-full border-2 border-primary object-cover"
                />
                <div>
                  <p className="font-semibold text-lg italic">Michel Devid</p>
                  <p className="text-sm text-primary font-medium">Founder</p>
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
