import { Link } from "react-router-dom";
import React from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = React.useState("contact");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    projectType: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState("");
  const [expandedFaq, setExpandedFaq] = React.useState(null);

  const contactMethods = [
    {
      icon: "fas fa-phone",
      title: "Phone",
      primary: "(555) 123-4567",
      secondary: "Mon-Fri: 9AM-6PM EST",
      action: "Call Now",
    },
    {
      icon: "fas fa-envelope",
      title: "Email",
      primary: "hello@sublimatehub.com",
      secondary: "Response within 24 hours",
      action: "Send Email",
    },
    {
      icon: "fas fa-comments",
      title: "Live Chat",
      primary: "Available Now",
      secondary: "Average response: 2 minutes",
      action: "Start Chat",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Visit Us",
      primary: "123 Print Street",
      secondary: "New York, NY 10001",
      action: "Get Directions",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Martinez",
      role: "Customer Success Manager",
      email: "sarah@sublimatehub.com",
      phone: "(555) 123-4567 ext. 101",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300",
      specialties: ["Project Management", "Custom Orders", "Client Relations"],
    },
    {
      name: "David Chen",
      role: "Technical Support Lead",
      email: "david@sublimatehub.com",
      phone: "(555) 123-4567 ext. 102",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300",
      specialties: ["File Preparation", "Technical Issues", "Quality Control"],
    },
    {
      name: "Emily Rodriguez",
      role: "Design Consultant",
      email: "emily@sublimatehub.com",
      phone: "(555) 123-4567 ext. 103",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300",
      specialties: [
        "Design Services",
        "Creative Consultation",
        "Art Direction",
      ],
    },
    {
      name: "Michael Thompson",
      role: "Sales Director",
      email: "michael@sublimatehub.com",
      phone: "(555) 123-4567 ext. 104",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300",
      specialties: ["Bulk Orders", "Corporate Accounts", "Pricing"],
    },
  ];

  const faqs = [
    {
      question: "What file formats do you accept for custom designs?",
      answer:
        "We accept high-resolution files in PNG, JPG, PDF, AI, EPS, and PSD formats. For best results, we recommend vector files (AI, EPS) or high-resolution raster images (300 DPI minimum).",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Our standard turnaround time is 3-5 business days for most orders. Rush orders can be completed in 24-48 hours for an additional fee. Large or complex orders may require additional time.",
    },
    {
      question: "Do you offer design services?",
      answer:
        "Yes! Our in-house design team can create custom designs for you. Design services start at $50 and vary based on complexity. We also offer free design consultations for large orders.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "We have no minimum order quantity! Whether you need 1 item or 1,000, we're happy to help. However, bulk orders receive significant discounts.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship worldwide! International shipping rates and delivery times vary by location. Contact us for a shipping quote to your specific destination.",
    },
    {
      question: "What is your return/refund policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy with your order due to a printing error on our part, we'll reprint it for free or provide a full refund within 30 days.",
    },
    {
      question: "Can I see a proof before production?",
      answer:
        "Absolutely! We provide digital proofs for all custom orders at no extra charge. Production begins only after you approve the proof.",
    },
    {
      question: "What is your return/refund policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not happy with your order due to a printing error on our part, we'll reprint it for free or provide a full refund within 30 days.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, bank transfers, and for corporate accounts, we offer net-30 payment terms after credit approval.",
    },
  ];

  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      icon: "fab fa-facebook-f",
      url: "#",
      color: "hover:text-blue-500",
    },
    {
      platform: "Instagram",
      icon: "fab fa-instagram",
      url: "#",
      color: "hover:text-pink-500",
    },
    {
      platform: "Twitter",
      icon: "fab fa-twitter",
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin-in",
      url: "#",
      color: "hover:text-blue-600",
    },
    {
      platform: "YouTube",
      icon: "fab fa-youtube",
      url: "#",
      color: "hover:text-red-500",
    },
    {
      platform: "Pinterest",
      icon: "fab fa-pinterest-p",
      url: "#",
      color: "hover:text-red-400",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        projectType: "",
        budget: "",
        timeline: "",
      });

      setTimeout(() => setSubmitStatus(""), 5000);
    }, 2000);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="block text-pink-500 font-semibold py-2"
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
              Get In{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your ideas to life? We're here to help with expert
              guidance, fast turnaround times, and exceptional customer service.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {[
              {
                id: "contact",
                label: "Contact Info",
                icon: "fas fa-address-book",
              },
              { id: "form", label: "Contact Form", icon: "fas fa-envelope" },
              { id: "quote", label: "Get Quote", icon: "fas fa-calculator" },
              { id: "faq", label: "FAQ", icon: "fas fa-question-circle" },
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
        {/* Contact Methods */}
        {activeTab === "contact" && (
          <section className="pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Quick Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 animate-fadeInUp">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:scale-105 text-center group shadow-lg hover:shadow-xl"
                  >
                    <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <i className={`${method.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">
                      {method.title}
                    </h3>
                    <p className="text-pink-500 font-medium mb-1 text-sm sm:text-base">
                      {method.primary}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {method.secondary}
                    </p>
                    <button className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-200 text-pink-600 px-4 py-2 rounded-lg hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 text-sm">
                      {method.action}
                    </button>
                  </div>
                ))}
              </div>

              {/* Location & Hours */}
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-20">
                {/* Location Info */}
                <div className="animate-fadeInUp">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                    Visit Our{" "}
                    <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                      Facility
                    </span>
                  </h2>

                  {/* Map Placeholder */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 mb-6 shadow-lg">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4">
                      <div className="text-center">
                        <i className="fas fa-map-marked-alt text-4xl text-pink-500 mb-2"></i>
                        <p className="text-gray-700">Interactive Map</p>
                        <p className="text-gray-500 text-sm">
                          123 Print Street, New York, NY 10001
                        </p>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg">
                      Open in Google Maps
                    </button>
                  </div>

                  {/* Facility Images */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400"
                        alt="SublimateHub printing facility exterior"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400"
                        alt="Modern printing equipment in operation"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Hours & Emergency Contact */}
                <div className="space-y-8 animate-fadeInUp">
                  {/* Business Hours */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="fas fa-clock text-pink-500 mr-3"></i>
                      Business Hours
                    </h3>
                    <div className="space-y-3">
                      {businessHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                        >
                          <span className="text-gray-700 font-medium text-sm sm:text-base">
                            {schedule.day}
                          </span>
                          <span
                            className={`text-sm sm:text-base ${schedule.hours === "Closed" ? "text-gray-400" : "text-pink-500"} font-semibold`}
                          >
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Emergency Contact */}
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="fas fa-exclamation-triangle text-red-500 mr-3"></i>
                      Emergency Contact
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base">
                      For urgent production issues or time-sensitive orders:
                    </p>
                    <div className="space-y-2">
                      <p className="text-red-600 font-semibold text-sm sm:text-base">
                        <i className="fas fa-phone mr-2"></i>
                        (555) 123-RUSH (7874)
                      </p>
                      <p className="text-red-600 font-semibold text-sm sm:text-base">
                        <i className="fas fa-envelope mr-2"></i>
                        urgent@sublimatehub.com
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm">
                        Available 24/7 for existing customers
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                      Follow Us
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center text-gray-600 ${social.color} transition-all duration-300 hover:scale-110 shadow-lg`}
                          title={social.platform}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Contact Cards */}
              <div className="animate-fadeInUp">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
                  Meet Our{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:scale-105 text-center group shadow-lg hover:shadow-xl"
                    >
                      <div className="relative mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg"
                        />
                      </div>
                      <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-1">
                        {member.name}
                      </h3>
                      <p className="text-pink-500 font-medium mb-3 text-sm sm:text-base">
                        {member.role}
                      </p>
                      <div className="space-y-2 mb-4">
                        <p className="text-gray-600 text-xs sm:text-sm break-all">
                          <i className="fas fa-envelope mr-2"></i>
                          {member.email}
                        </p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          <i className="fas fa-phone mr-2"></i>
                          {member.phone}
                        </p>
                      </div>
                      <div className="space-y-1">
                        {member.specialties.map((specialty, specIndex) => (
                          <span
                            key={specIndex}
                            className="inline-block bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs mr-1"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Form */}
        {activeTab === "form" && (
          <section className="pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 animate-fadeInUp shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                  Send Us a{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-500 mr-3"></i>
                      <p className="text-green-700 text-sm sm:text-base">
                        Thank you! Your message has been sent successfully.
                        We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="quote">Request Quote</option>
                        <option value="support">Technical Support</option>
                        <option value="design">Design Services</option>
                        <option value="bulk">Bulk Order</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 resize-vertical text-sm sm:text-base"
                      placeholder="Tell us about your project or question..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Sending Message...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* Quote Request Form */}
        {activeTab === "quote" && (
          <section className="pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200 animate-fadeInUp shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                  Get Your Free{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Quote
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select project type</option>
                        <option value="apparel">Custom Apparel</option>
                        <option value="drinkware">Drinkware</option>
                        <option value="bags">Bags & Accessories</option>
                        <option value="home">Home & Kitchen</option>
                        <option value="office">Office & Tech</option>
                        <option value="gifts">Gifts & Novelty</option>
                        <option value="multiple">Multiple Categories</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-100">Under $100</option>
                        <option value="100-500">$100 - $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="over-5000">Over $5,000</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Timeline *
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                      >
                        <option value="">When do you need this?</option>
                        <option value="rush">Rush (24-48 hours)</option>
                        <option value="standard">Standard (3-5 days)</option>
                        <option value="week">Within a week</option>
                        <option value="month">Within a month</option>
                        <option value="flexible">I'm flexible</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 resize-vertical text-sm sm:text-base"
                      placeholder="Please describe your project in detail: quantity, sizes, colors, design requirements, etc."
                    ></textarea>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-orange-50 border border-pink-200 rounded-lg p-4">
                    <h4 className="text-gray-900 font-semibold mb-2 flex items-center text-sm sm:text-base">
                      <i className="fas fa-info-circle text-pink-500 mr-2"></i>
                      What happens next?
                    </h4>
                    <ul className="text-gray-600 text-xs sm:text-sm space-y-1">
                      <li>• We'll review your requirements within 2 hours</li>
                      <li>• Our team will prepare a detailed quote</li>
                      <li>• You'll receive pricing and timeline via email</li>
                      <li>• We'll schedule a call to discuss your project</li>
                    </ul>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Processing Quote...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <i className="fas fa-calculator mr-2"></i>
                        Get My Free Quote
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        {activeTab === "faq" && (
          <section className="pb-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="animate-fadeInUp">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
                  Frequently Asked{" "}
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Questions
                  </span>
                </h2>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-4 sm:px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                      >
                        <h3 className="text-gray-900 font-semibold pr-4 text-sm sm:text-base">
                          {faq.question}
                        </h3>
                        <i
                          className={`fas fa-chevron-${expandedFaq === index ? "up" : "down"} text-pink-500 transition-transform duration-300 flex-shrink-0`}
                        ></i>
                      </button>
                      <div
                        className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${expandedFaq === index ? "pb-4 max-h-96" : "max-h-0"}`}
                      >
                        <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Still have questions?
                  </p>
                  <button
                    onClick={() => setActiveTab("form")}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 sm:px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base shadow-lg"
                  >
                    Contact Our Team
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

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
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}



