
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Users, Star, MessageSquare, Contact, GalleryHorizontal, MessageSquareText, Code, Smartphone, TrendingUp, Palette, Globe, ShoppingCart, Database, Zap, Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setMobileMenuOpen(false);
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
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Cutting-edge web solutions with premium aesthetics",
      subServices: [
        { icon: <Globe className="w-5 h-5" />, name: "Custom Web Apps" },
        { icon: <ShoppingCart className="w-5 h-5" />, name: "E-commerce Platforms" },
        { icon: <Database className="w-5 h-5" />, name: "CMS Development" },
        { icon: <Zap className="w-5 h-5" />, name: "Performance Optimization" }
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile experiences",
      subServices: [
        { icon: <Smartphone className="w-5 h-5" />, name: "iOS Development" },
        { icon: <Smartphone className="w-5 h-5" />, name: "Android Development" },
        { icon: <Code className="w-5 h-5" />, name: "React Native" },
        { icon: <Zap className="w-5 h-5" />, name: "Flutter Apps" }
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing to amplify your reach",
      subServices: [
        { icon: <TrendingUp className="w-5 h-5" />, name: "SEO Optimization" },
        { icon: <MessageSquare className="w-5 h-5" />, name: "Social Media" },
        { icon: <Star className="w-5 h-5" />, name: "Content Strategy" },
        { icon: <Users className="w-5 h-5" />, name: "Influencer Marketing" }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Strategy",
      description: "Compelling brand identities that resonate",
      subServices: [
        { icon: <Palette className="w-5 h-5" />, name: "Logo Design" },
        { icon: <Star className="w-5 h-5" />, name: "Brand Guidelines" },
        { icon: <Globe className="w-5 h-5" />, name: "Visual Identity" },
        { icon: <MessageSquare className="w-5 h-5" />, name: "Brand Messaging" }
      ]
    }
  ];

  const projects = [
    {
      title: "Luxury E-commerce Platform",
      description: "Premium shopping experience with advanced features",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "E-commerce"
    },
    {
      title: "FinTech Mobile Banking",
      description: "Secure and intuitive financial solution",
      tech: ["React Native", "Firebase", "TypeScript"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "FinTech"
    },
    {
      title: "Analytics Dashboard",
      description: "Enterprise-grade data visualization platform",
      tech: ["Vue.js", "Python", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      category: "SaaS"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Luxury Brands Inc.",
      content: "WAPR exceeded our expectations with their premium approach to digital transformation. Outstanding quality and attention to detail.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "TechVentures",
      content: "The mobile app they developed has revolutionized our business. Exceptional user experience and flawless execution.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "InnovateHub",
      content: "Professional, creative, and results-driven. WAPR delivers luxury-grade solutions that truly make a difference.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Modern Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl bg-white/90 backdrop-blur-2xl border border-gray-200 rounded-2xl z-50 transition-all duration-500 shadow-lg">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 bg-clip-text text-transparent">
                WAPR
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-gray-100 rounded-full p-1 backdrop-blur-sm border border-gray-200">
              {['home', 'services', 'projects', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-6 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 text-white font-semibold shadow-lg'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200 transition-colors duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gray-50 rounded-2xl p-4 backdrop-blur-sm border border-gray-200">
              {['home', 'services', 'projects', 'testimonials', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize w-full text-left px-4 py-3 rounded-xl transition-all duration-300 block ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 text-white font-semibold'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section with White Background */}
      <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden bg-white">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left lg:text-left">
              <div className="mb-8 animate-fade-in">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm mb-8">
                  <span className="text-orange-600 font-medium flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Premium Digital Solutions
                  </span>
                </div>
              </div>
              <h1 className="text-6xl md:text-7xl xl:text-8xl font-bold mb-8 animate-fade-in leading-tight">
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 bg-clip-text text-transparent">
                  Luxury
                </span>
                <br />
                <span className="text-gray-900">Digital</span>
                <br />
                <span className="text-gray-700">Experiences</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 animate-fade-in max-w-2xl leading-relaxed" style={{animationDelay: '0.2s'}}>
                We craft exceptional websites, powerful mobile applications, and strategic marketing campaigns that elevate your brand to new heights of digital excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 hover:from-orange-500 hover:via-orange-600 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl"
                  onClick={() => scrollToSection('projects')}
                >
                  Explore Our Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 hover:border-orange-600 font-semibold px-8 py-4 rounded-xl transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Start Your Project
                </Button>
              </div>
            </div>

            {/* Right Graphics */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.6s'}}>
              {/* Main Hero Image */}
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=center" 
                  alt="Modern web development workspace"
                  className="w-full h-auto rounded-3xl shadow-2xl shadow-black/30 border border-gray-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl border border-orange-500/30 flex items-center justify-center animate-float">
                <Code className="w-12 h-12 text-orange-600" />
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl border border-blue-500/30 flex items-center justify-center animate-float" style={{animationDelay: '2s'}}>
                <Smartphone className="w-8 h-8 text-blue-600" />
              </div>

              <div className="absolute top-1/2 -right-6 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-blue-500/20 backdrop-blur-sm rounded-full border border-orange-500/30 flex items-center justify-center animate-float" style={{animationDelay: '4s'}}>
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 relative bg-gray-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm mb-6">
              <span className="text-orange-600 font-medium">Our Expertise</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Premium Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions crafted with precision and elegance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <Card className={`group relative bg-white backdrop-blur-xl border border-gray-200 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 overflow-visible ${hoveredService === index ? 'transform -translate-y-2' : ''}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardHeader className="text-center relative z-10 pb-4">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-400 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="text-gray-900 text-xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
                
                {/* Enhanced Sub-services Card with higher z-index */}
                <div className={`absolute top-full left-0 right-0 mt-2 transition-all duration-500 z-[200] ${
                  hoveredService === index 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <Card className="bg-white/95 backdrop-blur-xl border border-orange-500/30 shadow-2xl shadow-orange-500/20">
                    <CardContent className="p-6">
                      <h4 className="text-orange-600 font-semibold mb-4 text-center">Specialized Services</h4>
                      <div className="space-y-3">
                        {service.subServices.map((subService, subIndex) => (
                          <div 
                            key={subIndex} 
                            className="flex items-center space-x-3 text-gray-600 hover:text-orange-600 transition-colors duration-200 cursor-pointer group/sub p-2 rounded-lg hover:bg-orange-50"
                          >
                            <div className="text-orange-600 group-hover/sub:scale-110 transition-transform duration-200">
                              {subService.icon}
                            </div>
                            <span className="text-sm font-medium">{subService.name}</span>
                            <div className="ml-auto opacity-0 group-hover/sub:opacity-100 transition-opacity duration-200">
                              <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm mb-6">
              <span className="text-orange-600 font-medium">Portfolio</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Exceptional Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcasing our finest work and digital masterpieces
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-white backdrop-blur-xl border border-gray-200 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 text-white border-0">
                      {project.category}
                    </Badge>
                  </div>
                  <GalleryHorizontal className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-gray-900 text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
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
      <section id="testimonials" className="py-24 relative bg-gray-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm mb-6">
              <span className="text-orange-600 font-medium">Testimonials</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-white backdrop-blur-xl border border-gray-200 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 italic text-base leading-relaxed">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/50"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative bg-white">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full border border-orange-500/30 backdrop-blur-sm mb-6">
                <span className="text-orange-600 font-medium">Get In Touch</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">Start Your Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to elevate your digital presence? Let's create something extraordinary together.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-gray-900">
                <h3 className="text-2xl font-semibold mb-8 text-orange-600">Let's Build Excellence</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 via-orange-500 to-blue-400 rounded-xl flex items-center justify-center">
                      <MessageSquareText className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">hello@wapr.agency</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 via-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                      <Contact className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-lg">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="font-semibold mb-6 text-xl text-orange-600">Why Choose WAPR?</h4>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>Premium development expertise</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Cutting-edge technology stack</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span>Results-driven methodology</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>24/7 dedicated support</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Card className="bg-gray-50 backdrop-blur-xl border border-gray-200">
                <CardContent className="p-8">
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div>
                      <Input 
                        placeholder="Your Name" 
                        required 
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-orange-500 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Your Email" 
                        required 
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-orange-500 h-12 rounded-xl"
                      />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Tell us about your project vision..." 
                        required 
                        rows={4}
                        className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:bg-white focus:border-orange-500 rounded-xl resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 hover:from-orange-500 hover:via-orange-600 hover:to-blue-500 text-white font-semibold h-12 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg"
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
      <footer className="bg-gray-900 text-white py-12 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-blue-400 bg-clip-text text-transparent mb-6">
            WAPR
          </div>
          <p className="text-gray-400 text-lg">
            © 2024 WAPR. Crafting digital excellence, one project at a time.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
