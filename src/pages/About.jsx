import { Link } from "react-router-dom";
import React from "react";

export default function About() {
  const [activeTab, setActiveTab] = React.useState("story");
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const teamMembers = [
    {
      name: "Sarah Martinez",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
      bio: "With 15+ years in printing industry, Sarah founded SublimateHub to revolutionize custom printing.",
      expertise: [
        "Business Strategy",
        "Customer Relations",
        "Industry Innovation",
      ],
    },
    {
      name: "David Chen",
      role: "Head of Production",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      bio: "David ensures every product meets our highest quality standards with precision and care.",
      expertise: [
        "Quality Control",
        "Production Management",
        "Technical Innovation",
      ],
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Emily leads our design team, bringing creative visions to life through sublimation printing.",
      expertise: ["Graphic Design", "Color Theory", "Creative Strategy"],
    },
    {
      name: "Michael Thompson",
      role: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Michael streamlines our operations to ensure fast, reliable delivery for every customer.",
      expertise: ["Logistics", "Process Optimization", "Team Leadership"],
    },
  ];

  const achievements = [
    {
      icon: "fas fa-award",
      title: "ISO 9001 Certified",
      description: "Quality management system certification",
    },
    {
      icon: "fas fa-leaf",
      title: "Eco-Friendly Printing",
      description: "Sustainable sublimation processes",
    },
    {
      icon: "fas fa-users",
      title: "50,000+ Happy Customers",
      description: "Trusted by businesses worldwide",
    },
    {
      icon: "fas fa-clock",
      title: "24-48 Hour Turnaround",
      description: "Fast production and delivery",
    },
    {
      icon: "fas fa-shield-alt",
      title: "100% Quality Guarantee",
      description: "Satisfaction guaranteed or money back",
    },
    {
      icon: "fas fa-globe",
      title: "Global Shipping",
      description: "Worldwide delivery available",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Design Preparation",
      description:
        "Your artwork is optimized for sublimation printing with color correction and sizing.",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500",
    },
    {
      step: 2,
      title: "Digital Printing",
      description:
        "High-resolution printing on special sublimation paper using premium inks.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500",
    },
    {
      step: 3,
      title: "Heat Transfer",
      description:
        "Precise heat and pressure application transfers the design permanently into the material.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500",
    },
    {
      step: 4,
      title: "Quality Control",
      description:
        "Every item undergoes rigorous inspection to ensure perfect results.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Creative Studios Inc.",
      text: "SublimateHub transformed our business with their exceptional quality and service. The team's attention to detail is unmatched.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100",
    },
    {
      name: "Robert Kim",
      company: "Tech Startup Co.",
      text: "From concept to delivery, the entire process was seamless. Our branded merchandise exceeded all expectations.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100",
    },
    {
      name: "Lisa Anderson",
      company: "Event Planning Plus",
      text: "The quality and turnaround time are incredible. SublimateHub has become our go-to partner for all custom printing needs.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100",
    },
  ];

  const values = [
    {
      icon: "fas fa-heart",
      title: "Customer First",
      description:
        "Every decision we make puts our customers' needs and satisfaction at the center.",
    },
    {
      icon: "fas fa-gem",
      title: "Premium Quality",
      description:
        "We never compromise on quality, using only the finest materials and processes.",
    },
    {
      icon: "fas fa-rocket",
      title: "Innovation",
      description:
        "Constantly evolving our techniques and technology to deliver better results.",
    },
    {
      icon: "fas fa-handshake",
      title: "Integrity",
      description:
        "Honest communication, fair pricing, and reliable service in everything we do.",
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 },
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              SublimateHub
            </div>

            {/* Desktop Navigation */}
             <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-pink-500 font-semibold">
                Home
              </Link>
              <Link
                to="/products"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
              >
                Products
              </Link>
    
              <Link
                to="/about"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>

            {/* Desktop Get Quote Button */}
            <button className="hidden md:block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg">
              Get Quote
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-pink-500 transition-colors duration-300"
            >
              <i
                className={`fas fa-${mobileMenuOpen ? "times" : "bars"} text-xl`}
              ></i>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm">
              <div className="px-4 py-4 space-y-4">
                <a
                  href="/sublimatehub"
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/products"
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#gallery"
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="/about"
                  className="block text-pink-500 font-semibold py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 mt-4 shadow-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                SublimateHub
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the future of custom printing with passion, precision,
              and uncompromising quality since 2015.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {[
              { id: "story", label: "Our Story", icon: "fas fa-book" },
              {
                id: "mission",
                label: "Mission & Values",
                icon: "fas fa-bullseye",
              },
              { id: "team", label: "Our Team", icon: "fas fa-users" },
              { id: "process", label: "Our Process", icon: "fas fa-cogs" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-full transition-all duration-300 text-sm sm:text-base shadow-lg ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <i className={tab.icon}></i>
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="min-h-[600px]">
        {/* Company Story */}
        {activeTab === "story" && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div className="space-y-6 animate-fadeInUp">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    Our Journey{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                      Began
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Founded in 2015 by Sarah Martinez, SublimateHub started as a
                    small print shop with a big vision: to make high-quality
                    custom printing accessible to everyone. What began with a
                    single sublimation printer in a garage has grown into a
                    state-of-the-art facility serving customers worldwide.
                  </p>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our passion for innovation and commitment to excellence has
                    driven us to become industry leaders in sublimation printing
                    technology. Today, we're proud to have helped over 50,000
                    customers bring their creative visions to life.
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                        2015
                      </div>
                      <div className="text-gray-500">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                        50K+
                      </div>
                      <div className="text-gray-500">Happy Customers</div>
                    </div>
                  </div>
                </div>
                <div className="animate-fadeInUp">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600"
                      alt="SublimateHub printing facility"
                      className="rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">
                        Our Modern Facility
                      </h3>
                      <p className="text-gray-200">
                        State-of-the-art equipment and technology
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="animate-fadeInUp">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                  Our Milestones
                </h3>
                <div className="grid md:grid-cols-4 gap-8">
                  {[
                    {
                      year: "2015",
                      title: "Company Founded",
                      desc: "Started with passion and one printer",
                    },
                    {
                      year: "2018",
                      title: "Facility Expansion",
                      desc: "Moved to larger production space",
                    },
                    {
                      year: "2021",
                      title: "ISO Certification",
                      desc: "Achieved quality management standards",
                    },
                    {
                      year: "2025",
                      title: "Global Reach",
                      desc: "Serving customers worldwide",
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="text-gray-900 font-semibold mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Mission & Values */}
        {activeTab === "mission" && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Mission Statement */}
              <div className="text-center mb-20 animate-fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Our{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-xl">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    To empower creativity and self-expression by providing
                    exceptional sublimation printing services that transform
                    ordinary items into extraordinary personalized products. We
                    believe everyone deserves access to high-quality custom
                    printing that brings their unique vision to life.
                  </p>
                </div>
              </div>

              {/* Core Values */}
              <div className="animate-fadeInUp">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                  Our Core Values
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => (
                    <div key={index} className="text-center group">
                      <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <i className={`${value.icon} text-white text-xl`}></i>
                      </div>
                      <h4 className="text-gray-900 font-semibold text-lg mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-20 animate-fadeInUp">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
                  Our Achievements
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
                          <i className={`${achievement.icon} text-white`}></i>
                        </div>
                        <div>
                          <h4 className="text-gray-900 font-semibold">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Team Section */}
        {activeTab === "team" && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Our{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The passionate professionals behind SublimateHub's success,
                  dedicated to bringing your creative visions to life.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="group animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg">
                      <div className="relative mb-6">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full aspect-square object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <h3 className="text-gray-900 font-semibold text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-pink-500 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      <div className="space-y-1">
                        {member.expertise.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs mr-1"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Team Culture */}
              <div className="grid lg:grid-cols-2 gap-12 items-center animate-fadeInUp">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Team Culture
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    At SublimateHub, we believe that great products come from
                    great people. Our team is built on collaboration,
                    creativity, and a shared passion for excellence. We foster
                    an environment where innovation thrives and every team
                    member can contribute their unique talents.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Collaborative work environment",
                      "Continuous learning and development",
                      "Innovation-driven culture",
                      "Work-life balance priority",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-2 h-2 rounded-full"></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                    alt="Team collaboration"
                    className="rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Process Section */}
        {activeTab === "process" && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 animate-fadeInUp">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Process
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the meticulous process behind every SublimateHub
                  product, from initial design to final delivery.
                </p>
              </div>

              <div className="space-y-16">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`grid lg:grid-cols-2 gap-12 items-center animate-fadeInUp ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                  >
                    <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold">
                            {step.step}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                      <div className="relative">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="rounded-2xl shadow-2xl w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quality Guarantee */}
              <div className="mt-20 text-center animate-fadeInUp">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 max-w-4xl mx-auto shadow-xl">
                  <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <i className="fas fa-shield-alt text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    100% Quality Guarantee
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We stand behind every product we create. If you're not
                    completely satisfied with your order, we'll make it right or
                    provide a full refund. Your satisfaction is our commitment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Always Visible Sections */}
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ),
                  )}
                </div>
                <p className="text-xl text-gray-600 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <h4 className="text-gray-900 font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-pink-500">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-pink-500 to-orange-500"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                SublimateHub?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "fas fa-medal",
                title: "Premium Quality",
                description:
                  "State-of-the-art equipment and premium materials ensure exceptional results every time.",
              },
              {
                icon: "fas fa-shipping-fast",
                title: "Fast Turnaround",
                description:
                  "24-48 hour production time with express shipping options available worldwide.",
              },
              {
                icon: "fas fa-palette",
                title: "Custom Design Support",
                description:
                  "Our creative team helps bring your vision to life with professional design assistance.",
              },
              {
                icon: "fas fa-dollar-sign",
                title: "Competitive Pricing",
                description:
                  "Fair, transparent pricing with bulk discounts and no hidden fees.",
              },
              {
                icon: "fas fa-headset",
                title: "24/7 Support",
                description:
                  "Dedicated customer service team ready to help you every step of the way.",
              },
              {
                icon: "fas fa-recycle",
                title: "Eco-Friendly",
                description:
                  "Sustainable printing processes and environmentally responsible materials.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <i className={`${feature.icon} text-white`}></i>
                </div>
                <h3 className="text-gray-900 font-semibold text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Work{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              With Us?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust SublimateHub for
            their custom printing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              Start Your Project
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Keep dark for contrast */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
                SublimateHub
              </div>
              <p className="text-gray-400">
                Premium sublimation printing services for all your custom needs.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Custom T-Shirts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Mugs & Bottles
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Bags & Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Corporate Gifts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: hello@sublimatehub.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Mon-Fri: 9AM-6PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 SublimateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}



