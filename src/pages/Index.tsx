import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Search, ShoppingCart, Clock, CreditCard, Truck, FileText, Zap, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import assignmentImage from "@/assets/assignment-service.jpg";
import posterImage from "@/assets/poster-design.jpg";
import webdevImage from "@/assets/web-development.jpg";
import contentImage from "@/assets/content-writing.jpg";

const Index = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Delivery",
      description: "Most projects completed within 24-48 hours"
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Manual bKash Payment",
      description: "Secure bKash transactions with human verification"
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Real-Time Tracking",
      description: "Track your project progress every step of the way"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "File Delivery",
      description: "Get your files via email, Drive, or WhatsApp"
    }
  ];

  const topServices = [
    {
      title: "Assignment Copy",
      description: "Complete programming assignments with documentation",
      price: "৳500-2000",
      image: assignmentImage,
    },
    {
      title: "Poster Design",
      description: "Creative poster designs for events and promotions",
      price: "৳300-800",
      image: posterImage,
    },
    {
      title: "Web Development",
      description: "Modern responsive websites and web applications",
      price: "৳3000+",
      image: webdevImage,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "CSE Student, BUET",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: "Got my data structure assignment done perfectly! Great communication and delivered on time.",
      rating: 5
    },
    {
      name: "Karim Hassan",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Amazing logo design and branding package. Really helped establish our brand identity.",
      rating: 5
    },
    {
      name: "Nadia Rahman",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Their social media content helped increase our engagement by 300%. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Digital Services for Students & Startups
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Order CSE assignments, posters, branding & more
          </p>
          <Link to="/services">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Explore Services
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-hover transition-all duration-200">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Top Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with our most popular services trusted by students and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-hover transition-all duration-200 group">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {service.price}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-3">{service.title}</CardTitle>
                  <CardDescription className="mb-4 text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <Button variant="pink" className="w-full">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Real feedback from satisfied students and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-hover transition-all duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
