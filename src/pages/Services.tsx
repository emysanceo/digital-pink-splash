import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Code, PenTool, Briefcase, Search } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const serviceCategories = [
    {
      title: "CSE Academic Services",
      icon: <Code className="h-6 w-6 text-primary" />,
      category: "CSE",
      services: [
        {
          title: "Assignment Copy",
          description: "Complete programming assignments with documentation",
          price: "৳500-2000",
          image: "/src/assets/assignment-service.jpg"
        },
        {
          title: "Project Development",
          description: "Full-stack web applications and software projects",
          price: "৳3000-15000",
          image: "/src/assets/web-development.jpg"
        },
        {
          title: "Code Review & Debug",
          description: "Professional code review and bug fixing services",
          price: "৳300-1000",
          image: "/src/assets/assignment-service.jpg"
        }
      ]
    },
    {
      title: "Professional Services",
      icon: <PenTool className="h-6 w-6 text-primary" />,
      category: "Professional",
      services: [
        {
          title: "Content Writing",
          description: "SEO-optimized articles, blogs, and web content",
          price: "৳200-800",
          image: "/src/assets/content-writing.jpg"
        },
        {
          title: "Resume Design",
          description: "Professional resume and CV design with ATS optimization",
          price: "৳500-1200",
          image: "/src/assets/poster-design.jpg"
        },
        {
          title: "Social Media Posts",
          description: "Creative social media content and post designs",
          price: "৳100-500",
          image: "/src/assets/poster-design.jpg"
        }
      ]
    },
    {
      title: "Business & Branding Services",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      category: "Business",
      services: [
        {
          title: "Logo Design",
          description: "Professional logo design with multiple concepts",
          price: "৳800-3000",
          image: "/src/assets/poster-design.jpg"
        },
        {
          title: "Business Cards",
          description: "Print-ready business card designs",
          price: "৳300-800",
          image: "/src/assets/poster-design.jpg"
        },
        {
          title: "Brand Package",
          description: "Complete branding kit with logo, colors, and guidelines",
          price: "৳2000-8000",
          image: "/src/assets/poster-design.jpg"
        }
      ]
    }
  ];

  const filters = ["All", "CSE", "Professional", "Business"];

  const filteredCategories = activeFilter === "All" 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions for students, startups, and businesses. Quality work delivered fast.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 bg-muted/50 p-1 rounded-lg">
            <Search className="h-4 w-4 text-muted-foreground ml-2" />
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="rounded-md"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="space-y-12">
          {filteredCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-6">
                {category.icon}
                <h2 className="text-2xl font-semibold text-foreground">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="hover:shadow-hover transition-all duration-200 group">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded-lg text-sm font-medium">
                          {service.price}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription className="mb-4 text-sm">
                        {service.description}
                      </CardDescription>
                      <Button variant="pink" className="w-full">
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-muted/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">Need a Custom Service?</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Don't see exactly what you need? Contact us for a custom quote tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">Contact via Messenger</Button>
            <Button variant="pink" size="lg">WhatsApp Us</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;