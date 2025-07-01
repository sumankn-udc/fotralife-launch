import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { trackEvent } from '../components/Analytics';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');

  // Products data (in a real app, this would come from an API)
  const products = [
    {
      id: 1,
      name: "Fotralife Adventure Backpack",
      price: 2999,
      originalPrice: 3499,
      category: "trekking",
      images: [
        "assets/img/adventure-backpack.jpg",
        "assets/img/group-adventure.jpg",
        "assets/img/team-hiking.jpg"
      ],
      rating: 4.8,
      reviews: 124,
      description: "Durable 50L backpack perfect for multi-day treks with rain cover included.",
      longDescription: "This premium adventure backpack is designed for serious trekkers who demand durability, comfort, and functionality. With a 50L capacity, it's perfect for multi-day adventures while maintaining a lightweight design.",
      features: ["50L Capacity", "Rain Cover", "Multiple Compartments", "Ergonomic Design"],
      specifications: {
        "Material": "Ripstop Nylon",
        "Capacity": "50 Liters",
        "Weight": "1.8 kg",
        "Dimensions": "65 x 35 x 25 cm",
        "Color Options": "Green, Blue, Black",
        "Warranty": "2 years"
      },
      detailFeatures: [
        {
          title: "Weather Resistant",
          description: "Built-in rain cover and water-resistant zippers keep your gear dry in any weather."
        },
        {
          title: "Multiple Compartments",
          description: "Organized storage with main compartment, front pocket, side pockets, and internal organizer."
        }
      ],
      inStock: true,
      stockQuantity: 25,
      bestseller: true,
      reviews: [
        {
          name: "Rahul Sharma",
          rating: 5,
          comment: "Excellent backpack! Used it on a 7-day Himalayan trek and it performed flawlessly.",
          date: "April 2024",
          verified: true
        }
      ]
    }
  ];

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      trackEvent('product_detail_view', {
        product_id: id,
        product_name: foundProduct.name,
        product_category: foundProduct.category,
        product_price: foundProduct.price
      });
    } else {
      navigate('/shop');
    }
  }, [id, navigate]);

  const handleAddToCart = () => {
    trackEvent('add_to_cart', {
      product_id: product.id,
      product_name: product.name,
      product_price: product.price,
      quantity: quantity,
      section: 'product_detail'
    });
    alert(`Added ${quantity} x ${product.name} to cart!`);
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="main-wrapper demo-06">
      <section className="product-hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-images">
                <div className="main-image">
                  <img src={product.images[selectedImage]} alt={product.name} />
                  {product.bestseller && (
                    <div className="product-badge bestseller">🏆 Bestseller</div>
                  )}
                </div>
                
                <div className="image-thumbnails">
                  {product.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className={selectedImage === index ? 'active' : ''}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="product-info">
                <h1>{product.name}</h1>
                <p className="product-description">{product.description}</p>
                
                <div className="product-rating">
                  <div className="stars">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="rating-text">({product.rating}) • {product.reviews.length} reviews</span>
                </div>
                
                <div className="product-price">
                  <span className="current-price">{formatPrice(product.price)}</span>
                  {product.originalPrice > product.price && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                
                <div className="product-actions">
                  <div className="quantity-selector">
                    <label>Quantity:</label>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span>{quantity}</span>
                      <button 
                        onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                        disabled={quantity >= product.stockQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="action-buttons">
                    <button 
                      className="common-btn add-to-cart-btn"
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="back-navigation">
        <div className="container">
          <Link to="/shop" className="back-link">
            <i className="lni lni-arrow-left"></i>
            Back to Shop
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail; 