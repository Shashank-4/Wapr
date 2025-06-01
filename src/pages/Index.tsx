
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Users, Star, MessageSquare, Contact, GalleryHorizontal, MessageSquareText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
  };

  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies"
    },
    {
      icon: <Contact className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Comprehensive marketing strategies to boost your reach"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Create compelling brand identities that resonate"
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online shopping experience",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile Banking App",
      description: "Secure and intuitive banking solution",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics and management platform",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content: "WAPR transformed our digital presence completely. Their team delivered beyond expectations!",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "GrowthCorp",
      content: "Outstanding work on our mobile app. The user experience is phenomenal.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateHub",
      content: "Professional, creative, and results-driven. Highly recommend WAPR!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              WAPR
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'services', 'projects', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 font-semibold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                Modern Digital
              </span>
              <br />
              <span className="text-gray-800">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              We build stunning websites, powerful mobile apps, and drive growth through strategic marketing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection('projects')}
              >
                View Our Work
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transform hover:scale-105 transition-all duration-200"
                onClick={() => scrollToSection('contact')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to elevate your business
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md hover:shadow-blue-100"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our latest work and success stories
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <GalleryHorizontal className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-800">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-100 to-orange-100 text-blue-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by businesses worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-orange-500">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Ready to start your next project? Let's discuss how we can help you grow.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-white">
                <h3 className="text-2xl font-semibold mb-6">Let's Build Something Amazing</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MessageSquareText className="w-5 h-5 text-orange-200" />
                    <span>hello@wapr.agency</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Contact className="w-5 h-5 text-orange-200" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-semibold mb-4">Why Choose WAPR?</h4>
                  <ul className="space-y-2 text-blue-100">
                    <li>• Expert development team</li>
                    <li>• Modern technology stack</li>
                    <li>• Results-driven approach</li>
                    <li>• 24/7 support</li>
                  </ul>
                </div>
              </div>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        required 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        required 
                        rows={4}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
            WAPR
          </div>
          <p className="text-gray-400">
            © 2024 WAPR. Building the future, one project at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
