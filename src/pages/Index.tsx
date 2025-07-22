import { Search, ShoppingCart, User, Facebook, Youtube, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import assignmentImage from "@/assets/assignment-service.jpg";
import posterImage from "@/assets/poster-design.jpg";
import webDevImage from "@/assets/web-development.jpg";
import contentImage from "@/assets/content-writing.jpg";

const Index = () => {
  const products = [
    {
      id: 1,
      title: "Assignment Copy",
      description: "Professional assignment writing service with original content and timely delivery.",
      price: "৳500",
      image: assignmentImage,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Poster Design",
      description: "Creative poster design for events, marketing, and promotional campaigns.",
      price: "৳800",
      image: posterImage,
      rating: 4.9,
    },
    {
      id: 3,
      title: "Web Development",
      description: "Modern responsive websites built with latest technologies and best practices.",
      price: "৳2500",
      image: webDevImage,
      rating: 4.7,
    },
    {
      id: 4,
      title: "Content Writing",
      description: "Engaging content creation for blogs, websites, and social media platforms.",
      price: "৳400",
      image: contentImage,
      rating: 4.6,
    },
  ];

  const categories = ["All", "Writing", "Design", "Development", "Marketing"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-pink-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold text-foreground">QuickServe</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button variant="pink" size="sm">
              <User className="w-4 h-4 mr-2" />
              Signup
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Your Project<br />Done Fast
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Affordable services like assignments, poster design, and more. 
            Quality work delivered on time, every time.
          </p>
          <Button variant="outline" size="lg" className="bg-card/10 border-primary-foreground/20 text-primary-foreground hover:bg-card hover:text-foreground">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Explore Products
          </Button>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search services..." 
                className="pl-10 bg-card border-border"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "secondary"}
                    size="sm"
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Our Popular Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-card rounded-xl shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border border-border overflow-hidden group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">{product.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {product.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {product.price}
                    </span>
                    <Button variant="pink" size="sm">
                      Order Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-pink-gradient rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">Q</span>
                </div>
                <span className="text-xl font-bold text-secondary-foreground">QuickServe</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted partner for digital services and creative solutions.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-secondary-foreground">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
                <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-secondary-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-card rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 QuickServe. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
