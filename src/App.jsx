import { useState } from "react";

const whatsappNumber = "919380771682";

const products = [
  {
    id: 1,
    name: "Premium Phone Case",
    price: 299,
    category: "Cases",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tempered Glass",
    price: 149,
    category: "Protection",
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Fast Charger",
    price: 499,
    category: "Chargers",
    image: "https://images.unsplash.com/photo-1609592424960-9c7b1d2c6a9a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Type-C Cable",
    price: 199,
    category: "Cables",
    image: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 899,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Power Bank",
    price: 999,
    category: "Power",
    image: "https://images.unsplash.com/photo-1609592424921-9e3c7f5a0a98?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Mobile Gaming Trigger",
    price: 249,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Car Mobile Holder",
    price: 399,
    category: "Car Accessories",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((current) => [...current, product]);
  };

  const orderProduct = (product) => {
    const message = `Hello mobi.flex_ 👋

I am interested in:
${product.name}

Price: ₹${product.price}

Please share availability and order details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const orderCart = () => {
    if (cart.length === 0) return;

    const items = cart
      .map((item, index) => `${index + 1}. ${item.name} - ₹${item.price}`)
      .join("\n");

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const message = `Hello mobi.flex_ 👋

I want to order:

${items}

Total: ₹${total}

Please confirm availability and order details.`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
          color: #111111;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button {
          font-family: inherit;
          cursor: pointer;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid #eeeeee;
        }

        .nav {
          max-width: 1200px;
          margin: auto;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brand-logo {
          width: 105px;
          height: 58px;
          object-fit: contain;
          display: block;
        }

        .brand-name {
          font-size: 21px;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
          font-size: 14px;
          font-weight: 600;
        }

        .nav-links a:hover {
          opacity: 0.55;
        }

        .cart-button {
          border: 1px solid #111;
          background: #111;
          color: white;
          padding: 10px 16px;
          border-radius: 8px;
          font-weight: 600;
        }

        .cart-button:hover {
          background: #333;
        }

        .hero {
          min-height: 620px;
          display: flex;
          align-items: center;
          background: #f5f5f5;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          margin: auto;
          padding: 80px 24px;
        }

        .hero-small {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #777;
          margin-bottom: 20px;
        }

        .hero h1 {
          max-width: 760px;
          font-size: clamp(46px, 7vw, 82px);
          line-height: 0.98;
          letter-spacing: -4px;
          margin-bottom: 28px;
        }

        .hero h1 span {
          color: #777;
        }

        .hero p {
          max-width: 600px;
          color: #555;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          padding: 14px 22px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
        }

        .primary-button {
          background: #111;
          color: white;
          border: 1px solid #111;
        }

        .secondary-button {
          background: white;
          color: #111;
          border: 1px solid #ddd;
        }

        .primary-button:hover {
          background: #333;
        }

        .secondary-button:hover {
          background: #f2f2f2;
        }

        .trust {
          max-width: 1200px;
          margin: auto;
          padding: 55px 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .trust-card {
          padding: 25px;
          border: 1px solid #eeeeee;
          border-radius: 12px;
          background: white;
        }

        .trust-card h3 {
          margin-bottom: 8px;
          font-size: 17px;
        }

        .trust-card p {
          color: #666;
          font-size: 14px;
          line-height: 1.6;
        }

        .section {
          max-width: 1200px;
          margin: auto;
          padding: 80px 24px;
        }

        .section-heading {
          margin-bottom: 35px;
        }

        .section-heading small {
          color: #777;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          font-size: 12px;
        }

        .section-heading h2 {
          font-size: 40px;
          letter-spacing: -1.5px;
          margin-top: 10px;
        }

        .categories {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .category {
          padding: 28px 20px;
          border: 1px solid #eeeeee;
          border-radius: 12px;
          font-weight: 700;
          background: #fafafa;
        }

        .category:hover {
          background: #111;
          color: white;
        }

        .products {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .product-card {
          border: 1px solid #eeeeee;
          border-radius: 12px;
          overflow: hidden;
          background: white;
        }

        .product-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          background: #f3f3f3;
        }

        .product-info {
          padding: 18px;
        }

        .product-category {
          color: #888;
          font-size: 12px;
          margin-bottom: 8px;
        }

        .product-name {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .product-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .price {
          font-size: 18px;
          font-weight: 800;
        }

        .product-actions {
          display: flex;
          gap: 7px;
        }

        .add-button,
        .order-button {
          border-radius: 7px;
          padding: 9px 11px;
          font-size: 12px;
          font-weight: 700;
        }

        .add-button {
          background: white;
          border: 1px solid #ddd;
        }

        .order-button {
          background: #111;
          color: white;
          border: 1px solid #111;
        }

        .about {
          background: #111;
          color: white;
        }

        .about-inner {
          max-width: 1200px;
          margin: auto;
          padding: 90px 24px;
        }

        .about-inner h2 {
          font-size: 48px;
          letter-spacing: -2px;
          margin-bottom: 20px;
        }

        .about-inner p {
          max-width: 700px;
          color: #bbb;
          font-size: 17px;
          line-height: 1.8;
        }

        .contact-box {
          background: #f5f5f5;
          border-radius: 16px;
          padding: 55px;
          text-align: center;
        }

        .contact-box h2 {
          font-size: 38px;
          margin-bottom: 14px;
        }

        .contact-box p {
          color: #666;
          margin-bottom: 25px;
        }

        .footer {
          background: #111;
          color: white;
          padding: 35px 24px;
        }

        .footer-inner {
          max-width: 1200px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .footer small {
          color: #999;
        }

        .cart-panel {
          position: fixed;
          right: 20px;
          bottom: 20px;
          width: 320px;
          max-width: calc(100% - 40px);
          background: white;
          border: 1px solid #ddd;
          border-radius: 14px;
          padding: 20px;
          box-shadow: 0 15px 50px rgba(0,0,0,0.18);
          z-index: 2000;
        }

        .cart-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 15px;
        }

        .close-cart {
          border: 0;
          background: transparent;
          font-size: 20px;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          font-size: 13px;
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          margin: 18px 0;
          font-weight: 800;
        }

        .whatsapp-cart {
          width: 100%;
          border: 0;
          background: #111;
          color: white;
          padding: 13px;
          border-radius: 8px;
          font-weight: 700;
        }

        .empty-cart {
          color: #777;
          font-size: 14px;
          padding: 10px 0;
        }

        @media (max-width: 900px) {
          .products {
            grid-template-columns: repeat(2, 1fr);
          }

          .categories {
            grid-template-columns: repeat(2, 1fr);
          }

          .trust {
            grid-template-columns: 1fr;
          }

          .nav-links {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .nav {
            padding: 10px 16px;
          }

          .brand-logo {
            width: 85px;
            height: 50px;
          }

          .brand-name {
            font-size: 17px;
          }

          .hero {
            min-height: 550px;
          }

          .hero-content {
            padding: 60px 20px;
          }

          .hero h1 {
            font-size: 52px;
            letter-spacing: -3px;
          }

          .hero p {
            font-size: 16px;
          }

          .section {
            padding: 60px 20px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .products {
            grid-template-columns: 1fr;
          }

          .categories {
            grid-template-columns: 1fr 1fr;
          }

          .product-image {
            height: 260px;
          }

          .contact-box {
            padding: 35px 20px;
          }

          .contact-box h2 {
            font-size: 30px;
          }

          .about-inner {
            padding: 65px 20px;
          }

          .about-inner h2 {
            font-size: 38px;
          }

          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <nav className="nav">
          <a href="#home" className="brand">
            <img
              src="/logo.jpeg"
              alt="mobi.flex_ logo"
              className="brand-logo"
            />

            <span className="brand-name">mobi.flex_</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <button
            className="cart-button"
            onClick={() => document.getElementById("cart")?.scrollIntoView()}
          >
            Cart ({cart.length})
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-small">Mobile Accessories & Electronics</div>

          <h1>
            Fix.
            <br />
            <span>Flex.</span>
            <br />
            Connect.
          </h1>

          <p>
            Quality mobile accessories designed for everyday life.
            Discover cases, chargers, cables, audio products and more.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-button">
              Shop Products
            </a>

            <a href="#contact" className="secondary-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <div className="trust-card">
          <h3>Quality Products</h3>
          <p>Carefully selected mobile accessories for everyday use.</p>
        </div>

        <div className="trust-card">
          <h3>Easy Ordering</h3>
          <p>Choose your product and place your order directly through WhatsApp.</p>
        </div>

        <div className="trust-card">
          <h3>Customer Support</h3>
          <p>Have a question? Contact mobi.flex_ for product and order support.</p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section" id="categories">
        <div className="section-heading">
          <small>Explore</small>
          <h2>Categories</h2>
        </div>

        <div className="categories">
          <div className="category">Phone Cases</div>
          <div className="category">Screen Protection</div>
          <div className="category">Chargers</div>
          <div className="category">Cables</div>
          <div className="category">Audio</div>
          <div className="category">Power</div>
          <div className="category">Gaming</div>
          <div className="category">Car Accessories</div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section" id="products">
        <div className="section-heading">
          <small>Shop</small>
          <h2>Featured Products</h2>
        </div>

        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-info">
                <div className="product-category">
                  {product.category}
                </div>

                <div className="product-name">
                  {product.name}
                </div>

                <div className="product-bottom">
                  <div className="price">₹{product.price}</div>

                  <div className="product-actions">
                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                    >
                      Add
                    </button>

                    <button
                      className="order-button"
                      onClick={() => orderProduct(product)}
                    >
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="about-inner">
          <h2>About mobi.flex_</h2>

          <p>
            mobi.flex_ is focused on mobile accessories and everyday
            electronics that combine useful design, quality and value.
            Our goal is simple — provide products that help you Fix,
            Flex and Connect.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="contact-box">
          <h2>Need help?</h2>

          <p>
            Contact mobi.flex_ directly for product availability,
            pricing and orders.
          </p>

          <button
            className="primary-button"
            onClick={() =>
              window.open(
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello mobi.flex_ 👋 I would like to know more about your products."
                )}`,
                "_blank"
              )
            }
          >
            Chat on WhatsApp
          </button>
        </div>
      </section>

      {/* CART */}
      {cart.length > 0 && (
        <div className="cart-panel" id="cart">
          <div className="cart-header">
            <strong>Your Cart</strong>

            <button
              className="close-cart"
              onClick={() => setCart([])}
            >
              ×
            </button>
          </div>

          {cart.map((item, index) => (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <span>{item.name}</span>
              <strong>₹{item.price}</strong>
            </div>
          ))}

          <div className="cart-total">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            className="whatsapp-cart"
            onClick={orderCart}
          >
            Order on WhatsApp
          </button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <strong>mobi.flex_</strong>
            <br />
            <small>Fix. Flex. Connect.</small>
          </div>

          <small>© 2026 mobi.flex_. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

export default App;
