import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { trackEvent } from '../components/Analytics';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'biking', label: 'Biking Gear' },
    { key: 'trekking', label: 'Trekking Equipment' },
    { key: 'merchandise', label: 'Fotralife Merch' },
    { key: 'accessories', label: 'Accessories' }
  ];

  const products = [
    {
      id: 1,
      name: "Fotralife Adventure Backpack",
      price: 2999,
      originalPrice: 3499,
      category: "trekking",
      image: "assets/img/adventure-backpack.jpg",
      rating: 4.8,
      reviews: 124,
      description: "Durable 50L backpack perfect for multi-day treks with rain cover included.",
      features: ["50L Capacity", "Rain Cover", "Multiple Compartments", "Ergonomic Design"],
      inStock: true,
      bestseller: true
    },
    {
      id: 2,
      name: "Official Fotralife Jersey",
      price: 899,
      originalPrice: 1199,
      category: "merchandise",
      image: "assets/img/cycling-gear.jpg",
      rating: 4.9,
      reviews: 89,
      description: "Premium quality moisture-wicking jersey with Fotralife branding.",
      features: ["Moisture-Wicking", "Breathable Fabric", "UV Protection", "Quick Dry"],
      inStock: true,
      bestseller: false
    },
    {
      id: 3,
      name: "Trek Essentials Kit",
      price: 1599,
      originalPrice: 1999,
      category: "trekking",
      image: "assets/img/himalayan-trek.jpg",
      rating: 4.7,
      reviews: 156,
      description: "Complete trekking essentials including first aid, survival tools, and more.",
      features: ["First Aid Kit", "Survival Tools", "Emergency Whistle", "Compact Design"],
      inStock: true,
      bestseller: true
    },
    {
      id: 4,
      name: "Professional Bike Helmet",
      price: 1299,
      originalPrice: 1599,
      category: "biking",
      image: "assets/img/bike-helmet.jpg",
      rating: 4.6,
      reviews: 78,
      description: "Lightweight, aerodynamic helmet with superior ventilation and safety features.",
      features: ["MIPS Technology", "18 Vents", "Adjustable Fit", "LED Light Compatible"],
      inStock: true,
      bestseller: false
    },
    {
      id: 5,
      name: "Fotralife Water Bottle",
      price: 399,
      originalPrice: 499,
      category: "merchandise",
      image: "assets/img/cycling-gear.jpg",
      rating: 4.5,
      reviews: 203,
      description: "Insulated stainless steel water bottle keeps drinks cold for 24hrs.",
      features: ["750ml Capacity", "Insulated", "Leak Proof", "BPA Free"],
      inStock: true,
      bestseller: false
    },
    {
      id: 6,
      name: "Mountain Bike Gloves",
      price: 699,
      originalPrice: 899,
      category: "biking",
      image: "assets/img/mountain-biking.jpg",
      rating: 4.4,
      reviews: 67,
      description: "Padded cycling gloves with excellent grip and comfort for long rides.",
      features: ["Gel Padding", "Breathable", "Touch Screen Compatible", "Wrist Support"],
      inStock: false,
      bestseller: false
    },
    {
      id: 7,
      name: "Trekking Poles (Pair)",
      price: 1899,
      originalPrice: 2299,
      category: "trekking",
      image: "assets/img/group-adventure.jpg",
      rating: 4.7,
      reviews: 134,
      description: "Lightweight aluminum trekking poles with shock absorption technology.",
      features: ["Shock Absorption", "Adjustable Length", "Tungsten Tips", "Comfortable Grips"],
      inStock: true,
      bestseller: true
    },
    {
      id: 8,
      name: "Adventure Phone Mount",
      price: 799,
      originalPrice: 999,
      category: "accessories",
      image: "assets/img/mountain-biking.jpg",
      rating: 4.3,
      reviews: 45,
      description: "Universal phone mount for bikes with 360° rotation and secure grip.",
      features: ["360° Rotation", "Universal Fit", "Shock Resistant", "One-Hand Operation"],
      inStock: true,
      bestseller: false
    },
    {
      id: 9,
      name: "Fotralife Cap",
      price: 499,
      originalPrice: 699,
      category: "merchandise",
      image: "assets/img/desert-adventure.jpg",
      rating: 4.6,
      reviews: 91,
      description: "Adjustable cap with UV protection and moisture-wicking sweatband.",
      features: ["UV Protection", "Adjustable", "Moisture-Wicking", "Embroidered Logo"],
      inStock: true,
      bestseller: false
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    trackEvent('add_to_cart', {
      product_name: product.name,
      product_price: product.price,
      category: product.category,
      section: 'shop'
    });
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <div className="main-wrapper demo-06">
      {/* Page Header */}
      <PageHeader 
        title="Adventure Gear Shop"
        subtitle="Premium quality gear for your next adventure"
      >
        {cart.length > 0 && (
          <div className="cart-indicator wow fadeInUp" data-wow-delay=".6s">
            <span className="cart-count">🛒 {cart.length} items in cart</span>
          </div>
        )}
      </PageHeader>

      {/* Shop Categories & Products */}
      <section className="shop-section">
        <div className="container">
          {/* Category Filter */}
          <div className="row">
            <div className="col-xl-12">
              <div className="shop-filter wow fadeInUp" data-wow-delay=".2s">
                <div className="filter-tabs">
                  {categories.map((category) => (
                    <button
                      key={category.key}
                      className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
                      onClick={() => {
                        setActiveCategory(category.key);
                        trackEvent('shop_filter', {
                          category: category.key,
                          section: 'shop_filter'
                        });
                      }}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="product-card-detailed wow fadeInUp" data-wow-delay={`.${index % 3 + 2}s`}>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    
                    {/* Product Badges */}
                    <div className="product-badges">
                      {product.bestseller && (
                        <span className="badge bestseller">🏆 Bestseller</span>
                      )}
                      {!product.inStock && (
                        <span className="badge out-of-stock">Out of Stock</span>
                      )}
                      {product.originalPrice > product.price && (
                        <span className="badge sale">
                          {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                        </span>
                      )}
                    </div>

                    {/* Quick Actions */}
                    <div className="product-overlay">
                      <Link 
                        to={`/shop/${product.id}`}
                        className="quick-view-btn"
                        onClick={() => trackEvent('product_quick_view', {
                          product_name: product.name,
                          section: 'shop'
                        })}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="product-content">
                    <div className="product-category">
                      <span className={`category-tag category-${product.category}`}>
                        {categories.find(cat => cat.key === product.category)?.label}
                      </span>
                    </div>

                    <h4>{product.name}</h4>
                    <p className="product-description">{product.description}</p>

                    {/* Product Rating */}
                    <div className="product-rating">
                      <div className="stars">
                        {'★'.repeat(Math.floor(product.rating))}
                        {'☆'.repeat(5 - Math.floor(product.rating))}
                      </div>
                      <span className="rating-text">({product.rating}) • {product.reviews} reviews</span>
                    </div>

                    {/* Product Features */}
                    <div className="product-features">
                      <ul>
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx}>✓ {feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Price */}
                    <div className="product-price">
                      <span className="current-price">{formatPrice(product.price)}</span>
                      {product.originalPrice > product.price && (
                        <span className="original-price">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>

                    {/* Product Actions */}
                    <div className="product-actions">
                      <button 
                        className={`common-btn add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
                        disabled={!product.inStock}
                        onClick={() => addToCart(product)}
                      >
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                      <button 
                        className="btn-outline wishlist-btn"
                        onClick={() => trackEvent('add_to_wishlist', {
                          product_name: product.name,
                          section: 'shop'
                        })}
                      >
                        ♡ Wishlist
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="row">
              <div className="col-xl-12 text-center">
                <div className="no-products">
                  <h3>No products found</h3>
                  <p>Try selecting a different category!</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Shopping Cart Sidebar */}
      {cart.length > 0 && (
        <div className="cart-sidebar">
          <div className="cart-header">
            <h4>🛒 Cart ({cart.length})</h4>
          </div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h6>{item.name}</h6>
                  <span className="item-price">{formatPrice(item.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong>Total: {formatPrice(cart.reduce((sum, item) => sum + item.price, 0))}</strong>
          </div>
          <div className="cart-actions">
            <button 
              className="common-btn checkout-btn"
              onClick={() => {
                trackEvent('checkout_click', {
                  cart_value: cart.reduce((sum, item) => sum + item.price, 0),
                  items_count: cart.length,
                  section: 'cart'
                });
                alert('Checkout functionality will be implemented soon!');
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Featured Categories */}
      <section className="featured-categories">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Shop by Category</h1>
                <h2 className="wow fadeInUp" data-wow-delay=".4s">
                  Find everything you need for your adventure
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="category-card wow fadeInUp" data-wow-delay=".2s">
                <div className="category-icon">🚴‍♂️</div>
                <h4>Biking Gear</h4>
                <p>Helmets, gloves, and essential biking equipment</p>
                <button 
                  className="category-btn"
                  onClick={() => setActiveCategory('biking')}
                >
                  Shop Biking
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="category-card wow fadeInUp" data-wow-delay=".3s">
                <div className="category-icon">🥾</div>
                <h4>Trekking Equipment</h4>
                <p>Backpacks, poles, and trekking essentials</p>
                <button 
                  className="category-btn"
                  onClick={() => setActiveCategory('trekking')}
                >
                  Shop Trekking
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="category-card wow fadeInUp" data-wow-delay=".4s">
                <div className="category-icon">👕</div>
                <h4>Fotralife Merch</h4>
                <p>Official branded clothing and accessories</p>
                <button 
                  className="category-btn"
                  onClick={() => setActiveCategory('merchandise')}
                >
                  Shop Merch
                </button>
              </div>
            </div>
            
            <div className="col-lg-3 col-md-6">
              <div className="category-card wow fadeInUp" data-wow-delay=".5s">
                <div className="category-icon">📱</div>
                <h4>Accessories</h4>
                <p>Tech accessories and adventure add-ons</p>
                <button 
                  className="category-btn"
                  onClick={() => setActiveCategory('accessories')}
                >
                  Shop Accessories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="shop-cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="cta-content wow fadeInUp" data-wow-delay=".2s">
                <h2 className="text-white">Need Help Choosing Gear?</h2>
                <p className="text-white">
                  Our adventure experts are here to help you find the perfect gear for your next expedition.
                </p>
                <div className="cta-buttons">
                  <button 
                    className="common-btn"
                    onClick={() => trackEvent('expert_help_click', {
                      section: 'shop_cta'
                    })}
                  >
                    Get Expert Help
                  </button>
                  <button 
                    className="common-btn btn-outline"
                    onClick={() => trackEvent('size_guide_click', {
                      section: 'shop_cta'
                    })}
                  >
                    Size Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop; 