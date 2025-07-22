import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rocket, Smartphone, HeartHandshake, Mail, MessageCircle, Phone } from "lucide-react";

const About = () => {
  const missions = [
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Empower Productivity",
      description: "We help students and startups focus on what matters most by handling their digital needs efficiently."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-primary" />,
      title: "Built for Students",
      description: "Founded by students, for students. We understand the unique challenges and budget constraints you face."
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Real Human Support",
      description: "No bots, no automated responses. Get personalized service from real people who care about your success."
    }
  ];

  const teamMembers = [
    {
      name: "Ahmed Rahman",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Fatima Khan",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rafiq Ahmed",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "hello@scalixcreative.com",
      action: "mailto:hello@scalixcreative.com"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: "Messenger",
      value: "@scalixcreative",
      action: "https://m.me/scalixcreative"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+880 1XXX-XXXXXX",
      action: "https://wa.me/8801XXXXXXXX"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Scalix Creative</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a student-built digital agency offering affordable solutions for students and brands. 
              From assignments to branding kits, we deliver quality fast. Our team understands the unique 
              challenges students face because we've been there too.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missions.map((mission, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-hover transition-all duration-200">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {mission.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{mission.title}</h3>
                  <p className="text-muted-foreground">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden hover:shadow-hover transition-all duration-200">
                <CardContent className="p-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <div className="bg-muted/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-hover transition-all duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        {method.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{method.label}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{method.value}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(method.action, '_blank')}
                    >
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                Ready to start your project? Choose your preferred way to reach us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg">
                  Send Email
                </Button>
                <Button variant="pink" size="lg">
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;