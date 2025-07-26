import { Link } from "react-router-dom";
import React from "react";
export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isBeforeAfter, setIsBeforeAfter] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const products = [
    {
      name: "Custom T-Shirts",
      beforeImage:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      afterImage:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
      description: "Transform plain tees into stunning custom designs",
    },
    {
      name: "Personalized Mugs",
      beforeImage:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf400?w=400",
      afterImage:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      description: "Turn ordinary mugs into memorable keepsakes",
    },
    {
      name: "Custom Tote Bags",
      beforeImage:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      afterImage:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400",
      description: "Create unique bags for every occasion",
    },
    {
      name: "Water Bottles",
      beforeImage:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400",
      afterImage:
        "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400",
      description: "Hydrate in style with custom bottles",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Amazing quality! My custom t-shirts turned out perfect.",
      rating: 5,
    },
    {
      name: "Mike Chen",
      text: "Fast delivery and beautiful sublimation work!",
      rating: 5,
    },
    {
      name: "Emma Davis",
      text: "Highly recommend for custom printing needs.",
      rating: 5,
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleBeforeAfter = () => {
    setIsBeforeAfter(!isBeforeAfter);
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
                           <Link
                             to="/"
                             className="block  text-pink-500 transition-colors duration-300 py-2"
                             onClick={() => setMobileMenuOpen(false)}
                           >
                             Home
                           </Link>
                           <Link
                             to="/products"
                             className="block text-gray-700 hover:text-pink-500 font-semibold py-2"
                             onClick={() => setMobileMenuOpen(false)}
                           >
                             Products
                           </Link>
                          
                           <Link
                             to="/about"
                             className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                             onClick={() => setMobileMenuOpen(false)}
                           >
                             About
                           </Link>
                           <Link
                             to="/contact"
                             className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                             onClick={() => setMobileMenuOpen(false)}
                           >
                             Contact
                           </Link>
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
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Transform
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent block">
                  Your Ideas
                </span>
                Into Reality
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Premium sublimation printing services that bring your designs to
                life with vibrant colors and lasting quality. From custom
                apparel to personalized gifts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
                  Start Your Project
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                  View Gallery
                </button>
              </div>
            </div>

            {/* Interactive Before/After Showcase */}
            <div className="relative">
              <div className="bg-white backdrop-blur-sm rounded-3xl p-4 sm:p-8 border border-gray-200 shadow-xl">
                <div className="text-center mb-4 sm:mb-6">
                  <button
                    onClick={toggleBeforeAfter}
                    className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:scale-105 transition-transform duration-300 text-sm sm:text-base shadow-lg"
                  >
                    {isBeforeAfter ? "Show Before" : "Show After"}
                  </button>
                </div>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={
                      isBeforeAfter
                        ? products[currentSlide].afterImage
                        : products[currentSlide].beforeImage
                    }
                    alt={products[currentSlide].name}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                    <h3 className="text-gray-900 font-semibold text-sm sm:text-base">
                      {products[currentSlide].name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {products[currentSlide].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of customizable products, all crafted with
              precision sublimation printing
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                    <img
                      src={product.afterImage}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">
                    {product.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-200 text-pink-600 py-2 rounded-lg hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 text-sm sm:text-base">
                    Customize Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-4">
                Choose Your Product
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Select from our wide range of customizable items
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-4">
                Upload Your Design
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Share your artwork or let us create something amazing
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-4">
                Receive Your Order
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Get your professionally printed items delivered
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-yellow-400 text-lg sm:text-xl"
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                <p className="text-pink-500 font-semibold text-sm sm:text-base">
                  - {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Get in touch today and let's bring your ideas to life with our
            premium sublimation printing services.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
            Get Your Free Quote
          </button>
        </div>
      </section>

      {/* Footer */}
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
                    Gallery
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}


