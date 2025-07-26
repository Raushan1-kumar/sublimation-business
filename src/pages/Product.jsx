import { Link } from "react-router-dom";
import React from "react";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortBy, setSortBy] = React.useState("name");
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [showBeforeAfter, setShowBeforeAfter] = React.useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const categories = [
    { id: "all", name: "All Products", icon: "fas fa-th" },
    { id: "apparel", name: "Apparel", icon: "fas fa-tshirt" },
    { id: "drinkware", name: "Drinkware", icon: "fas fa-coffee" },
    { id: "bags", name: "Bags & Accessories", icon: "fas fa-shopping-bag" },
    { id: "home", name: "Home & Kitchen", icon: "fas fa-home" },
    { id: "office", name: "Office & Tech", icon: "fas fa-laptop" },
    { id: "gifts", name: "Gifts & Novelty", icon: "fas fa-gift" },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      category: "apparel",
      beforeImage:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500",
        "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=500",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
      ],
      description: "High-quality cotton t-shirt perfect for custom designs",
      customization: ["Size", "Color", "Design Placement"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["White", "Black", "Navy", "Gray", "Red"],
    },
    {
      id: 2,
      name: "Ceramic Coffee Mug",
      category: "drinkware",
      beforeImage:
        "https://images.unsplash.com/photo-1514228742587-6b1558fcf400?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      ],
      description: "Premium ceramic mug with vibrant sublimation printing",
      customization: ["Design", "Text", "Photo"],
      sizes: ["11oz", "15oz"],
      colors: ["White", "Black Interior"],
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      category: "drinkware",
      beforeImage:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=500",
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500",
      ],
      description: "Insulated stainless steel bottle with custom printing",
      customization: ["Design", "Text", "Logo"],
      sizes: ["17oz", "20oz", "32oz"],
      colors: ["White", "Black", "Silver", "Blue"],
    },
    {
      id: 4,
      name: "Canvas Tote Bag",
      category: "bags",
      beforeImage:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500",
        "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=500",
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      ],
      description: "Durable canvas tote bag perfect for custom designs",
      customization: ["Design", "Text", "Logo", "Photo"],
      sizes: ["Medium", "Large"],
      colors: ["Natural", "Black", "Navy"],
    },
    {
      id: 5,
      name: "Ceramic Dinner Plate",
      category: "home",
      beforeImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
        "https://images.unsplash.com/photo-1586040140378-b5d5c1eb9c70?w=500",
      ],
      description: "High-quality ceramic plate with full-color printing",
      customization: ["Design", "Photo", "Pattern"],
      sizes: ["8 inch", "10 inch"],
      colors: ["White"],
    },
    {
      id: 6,
      name: "Laptop Sleeve",
      category: "office",
      beforeImage:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        "https://images.unsplash.com/photo-1582142306909-195724d33ffc?w=500",
      ],
      description: "Protective laptop sleeve with custom printing",
      customization: ["Design", "Logo", "Text"],
      sizes: ["13 inch", "15 inch", "17 inch"],
      colors: ["Black", "Gray", "Navy"],
    },
    {
      id: 7,
      name: "Hooded Sweatshirt",
      category: "apparel",
      beforeImage:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
      ],
      description: "Comfortable hoodie with vibrant sublimation printing",
      customization: ["Size", "Color", "Design", "Text"],
      sizes: ["S", "M", "L", "XL", "XXL"],
      colors: ["Black", "Gray", "Navy", "Maroon"],
    },
    {
      id: 8,
      name: "Phone Case",
      category: "office",
      beforeImage:
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500",
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=500",
        "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500",
      ],
      description: "Protective phone case with custom design printing",
      customization: ["Design", "Photo", "Text"],
      sizes: ["iPhone", "Samsung", "Google Pixel"],
      colors: ["Clear", "White", "Black"],
    },
    {
      id: 9,
      name: "Throw Pillow",
      category: "home",
      beforeImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
        "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500",
      ],
      description: "Soft throw pillow with full-color sublimation printing",
      customization: ["Design", "Photo", "Pattern", "Text"],
      sizes: ["16x16", "18x18", "20x20"],
      colors: ["White Cover"],
    },
    {
      id: 10,
      name: "Puzzle",
      category: "gifts",
      beforeImage:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=500",
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500",
      ],
      description: "Custom photo puzzle perfect for gifts and memories",
      customization: ["Photo", "Design"],
      sizes: ["252 pieces", "500 pieces", "1000 pieces"],
      colors: ["Full Color"],
    },
    {
      id: 11,
      name: "Baseball Cap",
      category: "apparel",
      beforeImage:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=500",
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500",
        "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500",
      ],
      description: "Classic baseball cap with custom embroidery and printing",
      customization: ["Logo", "Text", "Color"],
      sizes: ["Adjustable", "Fitted"],
      colors: ["Black", "Navy", "White", "Red", "Gray"],
    },
    {
      id: 12,
      name: "Mouse Pad",
      category: "office",
      beforeImage:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
      afterImage:
        "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500",
      gallery: [
        "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=500",
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500",
      ],
      description: "High-quality mouse pad with custom design printing",
      customization: ["Design", "Photo", "Logo"],
      sizes: ["Standard", "Large", "XL"],
      colors: ["Black Base", "White Base"],
    },
  ];

  const filteredProducts = React.useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  const toggleBeforeAfter = (productId) => {
    setShowBeforeAfter((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
  };

  const closeProductModal = () => {
    setSelectedProduct(null);
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
                  className="block text-gray-700 hover:text-pink-500 transition-colors duration-300 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/products"
                  className="block text-pink-500 font-semibold py-2"
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

      {/* Header */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Products{" "}
              <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                Gallery
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete collection of customizable products. From
              apparel to home goods, we bring your designs to life with premium
              sublimation printing.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 mb-8 shadow-lg">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-full px-6 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-pink-400 focus:bg-white transition-colors duration-300 text-sm sm:text-base"
                />
                <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            {/* Category Filters */}
            <div className="mb-6">
              <h3 className="text-gray-900 font-semibold mb-4 text-center text-sm sm:text-base">
                Categories
              </h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm shadow-lg ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-pink-500 to-orange-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <i className={category.icon}></i>
                    <span className="hidden sm:inline">{category.name}</span>
                    <span className="sm:hidden">
                      {category.name.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-4">
                <span className="text-gray-900 font-semibold text-sm sm:text-base">
                  Sort by:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:border-pink-400 focus:bg-white text-sm sm:text-base"
                >
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-8">
            <p className="text-gray-600 text-sm sm:text-base">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid - 2 columns */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
                onClick={() => openProductModal(product)}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 shadow-lg">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={
                        showBeforeAfter[product.id]
                          ? product.beforeImage
                          : product.afterImage
                      }
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Before/After Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBeforeAfter(product.id);
                      }}
                      className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm hover:bg-pink-500 hover:text-white transition-colors duration-300 shadow-lg"
                    >
                      {showBeforeAfter[product.id] ? "After" : "Before"}
                    </button>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm capitalize shadow-lg">
                      {product.category}
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-6">
                    <h3 className="text-gray-900 font-semibold text-lg sm:text-xl mb-2 group-hover:text-pink-500 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Customization Options */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.customization
                        .slice(0, 3)
                        .map((option, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {option}
                          </span>
                        ))}
                      {product.customization.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{product.customization.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-200 text-pink-600 py-2 sm:py-3 rounded-lg hover:from-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300 text-sm sm:text-base">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                No products found
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Try adjusting your filters or search terms
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                {selectedProduct.name}
              </h2>
              <button
                onClick={closeProductModal}
                className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
              >
                <i className="fas fa-times text-xl sm:text-2xl"></i>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                  <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={selectedProduct.gallery[0]}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProduct.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300 shadow-lg"
                      >
                        <img
                          src={image}
                          alt={`${selectedProduct.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                        {selectedProduct.category}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Customization Options */}
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">
                      Customization Options
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.customization.map((option, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-200 text-pink-600 px-3 py-1 rounded-full text-sm"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Sizes */}
                  {selectedProduct.sizes && (
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">
                        Available Sizes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200 hover:border-pink-400 hover:text-pink-600 cursor-pointer transition-colors duration-300 text-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Colors */}
                  {selectedProduct.colors && (
                    <div>
                      <h4 className="text-gray-900 font-semibold mb-3 text-sm sm:text-base">
                        Available Colors
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map((color, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded border border-gray-200 hover:border-pink-400 hover:text-pink-600 cursor-pointer transition-colors duration-300 text-sm"
                          >
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 text-sm sm:text-base shadow-lg">
                      Customize Now
                    </button>
                    <button className="flex-1 border-2 border-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 text-sm sm:text-base">
                      Get Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#"
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
          animation: fadeInUp 0.6s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}



