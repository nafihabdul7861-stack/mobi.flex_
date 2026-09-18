import React from "react";

const products = [
  {
    icon: "📱",
    name: "Premium Phone Case",
    price: "₹299",
    category: "Cases",
    description: "Stylish protection with a premium finish.",
  },
  {
    icon: "🛡️",
    name: "Tempered Glass",
    price: "₹149",
    category: "Protection",
    description: "Clear, strong protection for your display.",
  },
  {
    icon: "⚡",
    name: "Fast Charger",
    price: "₹499",
    category: "Charging",
    description: "Reliable fast charging for everyday use.",
  },
  {
    icon: "🔌",
    name: "Type-C Cable",
    price: "₹199",
    category: "Charging",
    description: "Durable cable for fast and reliable charging.",
  },
  {
    icon: "🎧",
    name: "Wireless Earbuds",
    price: "₹899",
    category: "Audio",
    description: "Compact wireless audio for everyday listening.",
  },
  {
    icon: "🔋",
    name: "Power Bank",
    price: "₹999",
    category: "Power",
    description: "Portable power when you need it.",
  },
  {
    icon: "🎮",
    name: "Mobile Gaming Trigger",
    price: "₹249",
    category: "Gaming",
    description: "Better control for mobile gaming.",
  },
  {
    icon: "🚗",
    name: "Car Mobile Holder",
    price: "₹399",
    category: "Accessories",
    description: "Secure and convenient phone mounting.",
  },
];

const whatsappNumber = "919380771682";

function orderProduct(productName) {
  const message = `Hello Mobi.flex, I am interested in the ${productName}. Please share more details.`;
  window.open(
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    "_blank"
  );
}

function App() {
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

        button,
        a {
          font-family: inherit;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .app {
          width: 100%;
          overflow: hidden;
        }

        /* HEADER */

        .header {
          height: 76px;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255,255,255,0.96);
          border-bottom: 1px solid #eeeeee;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(15px);
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo-dot {
          color: #111111;
        }

        .nav {
          display: flex;
          gap: 32px;
        }

        .nav a {
          font-size: 14px;
          color: #555555;
          transition: 0.2s;
        }

        .nav a:hover {
          color: #000000;
        }

        .header-btn {
          background: #111111;
          color: white;
          padding: 12px 21px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 700;
        }

        /* HERO */

        .hero {
          min-height: 650px;
          padding: 90px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 70px;
          background:
            radial-gradient(circle at 80% 20%, #eeeeee 0, transparent 30%),
            #fafafa;
        }

        .hero-content {
          max-width: 650px;
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 2.5px;
          font-weight: 800;
          color: #777777;
          margin-bottom: 22px;
        }

        .hero h1 {
          font-size: clamp(48px, 6vw, 82px);
          line-height: 0.96;
          letter-spacing: -5px;
          margin-bottom: 28px;
        }

        .hero h1 span {
          color: #777777;
        }

        .hero-text {
          color: #666666;
          font-size: 17px;
          line-height: 1.7;
          max-width: 560px;
          margin-bottom: 34px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-btn {
          display: inline-block;
          background: #111111;
          color: white;
          padding: 15px 25px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 14px;
        }

        .secondary-btn {
          display: inline-block;
          background: white;
          border: 1px solid #dddddd;
          padding: 15px 25px;
          border-radius: 30px;
          font-weight: 700;
          font-size: 14px;
        }

        /* HERO VISUAL */

        .hero-visual {
          width: 450px;
          height: 450px;
          min-width: 450px;
          border-radius: 40px;
          background: #111111;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          box-shadow: 0 30px 70px rgba(0,0,0,0.15);
        }

        .device {
          width: 190px;
          height: 320px;
          border: 8px solid #333333;
          border-radius: 35px;
          background: linear-gradient(145deg, #f7f7f7, #bbbbbb);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 20px 20px 50px rgba(0,0,0,0.4);
        }

        .device::before {
          content: "";
          position: absolute;
          top: 10px;
          width: 70px;
          height: 18px;
          background: #111111;
          border-radius: 20px;
        }

        .device-text {
          font-size: 40px;
          font-weight: 900;
          transform: rotate(-8deg);
        }

        .floating {
          position: absolute;
          background: white;
          padding: 15px 18px;
          border-radius: 16px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .floating strong {
          display: block;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .floating small {
          color: #777777;
          font-size: 11px;
        }

        .float-one {
          left: -35px;
          top: 75px;
        }

        .float-two {
          right: -35px;
          bottom: 75px;
        }

        /* TRUST */

        .trust {
          padding: 35px 8%;
          border-bottom: 1px solid #eeeeee;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .trust-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #111111;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .trust-item strong {
          font-size: 14px;
        }

        .trust-item p {
          color: #777777;
          font-size: 12px;
          margin-top: 4px;
        }

        /* CATEGORIES */

        .categories {
          padding: 90px 8% 40px;
        }

        .section-top {
          text-align: center;
          margin-bottom: 45px;
        }

        .section-top p {
          color: #777777;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .section-top h2 {
          font-size: 44px;
          letter-spacing: -2px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }

        .category {
          border: 1px solid #eeeeee;
          border-radius: 16px;
          padding: 22px 10px;
          text-align: center;
          background: white;
          transition: 0.2s;
        }

        .category:hover {
          transform: translateY(-4px);
          border-color: #cccccc;
        }

        .category-icon {
          font-size: 27px;
          margin-bottom: 9px;
        }

        .category span {
          font-size: 12px;
          font-weight: 700;
        }

        /* PRODUCTS */

        .products {
          padding: 50px 8% 100px;
        }

        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: end;
          margin-bottom: 35px;
        }

        .products-header h2 {
          font-size: 42px;
          letter-spacing: -2px;
        }

        .products-header p {
          color: #777777;
          font-size: 14px;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .product {
          border: 1px solid #e8e8e8;
          border-radius: 22px;
          padding: 14px;
          background: white;
          transition: 0.25s;
        }

        .product:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 45px rgba(0,0,0,0.09);
        }

        .product-image {
          height: 230px;
          border-radius: 16px;
          background: linear-gradient(145deg, #f5f5f5, #e8e8e8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          margin-bottom: 18px;
        }

        .product-category {
          color: #888888;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 7px;
        }

        .product h3 {
          font-size: 17px;
          margin-bottom: 7px;
        }

        .product-description {
          color: #777777;
          font-size: 12px;
          line-height: 1.5;
          min-height: 36px;
        }

        .product-bottom {
          margin-top: 17px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .price {
          font-size: 18px;
          font-weight: 800;
        }

        .order-btn {
          border: none;
          background: #111111;
          color: white;
          padding: 10px 14px;
          border-radius: 22px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        /* ABOUT */

        .about {
          padding: 95px 8%;
          background: #f7f7f7;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-label {
          font-size: 12px;
          color: #777777;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .about h2 {
          font-size: 50px;
          line-height: 1;
          letter-spacing: -3px;
        }

        .about-text {
          color: #666666;
          line-height: 1.8;
          font-size: 16px;
        }

        .about-points {
          margin-top: 25px;
          display: grid;
          gap: 12px;
        }

        .about-point {
          font-size: 14px;
          font-weight: 700;
        }

        /* CTA */

        .cta {
          padding: 100px 8%;
          text-align: center;
          background: #111111;
          color: white;
        }

        .cta-label {
          color: #aaaaaa;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 15px;
        }

        .cta h2 {
          font-size: 48px;
          letter-spacing: -2px;
          max-width: 700px;
          margin: 0 auto 30px;
        }

        .whatsapp-btn {
          display: inline-block;
          background: white;
          color: #111111;
          padding: 15px 27px;
          border-radius: 30px;
          font-weight: 800;
          font-size: 14px;
        }

        /* FOOTER */

        .footer {
          padding: 45px 8%;
          background: #111111;
          color: white;
          border-top: 1px solid #333333;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-logo {
          font-size: 22px;
          font-weight: 800;
        }

        .footer p {
          color: #888888;
          font-size: 12px;
        }

        .footer small {
          color: #666666;
        }

        /* MOBILE */

        @media (max-width: 1000px) {
          .hero {
            flex-direction: column;
            text-align: center;
          }

          .hero-content {
            max-width: 700px;
          }

          .hero-text {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .category-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        @media (max-width: 650px) {
          .header {
            padding: 0 5%;
          }

          .nav {
            display: none;
          }

          .header-btn {
            padding: 10px 15px;
          }

          .hero {
            padding: 65px 6%;
          }

          .hero h1 {
            font-size: 48px;
            letter-spacing: -3px;
          }

          .hero-visual {
            width: 90vw;
            min-width: 0;
            height: 360px;
          }

          .device {
            width: 145px;
            height: 245px;
          }

          .float-one {
            left: -8px;
          }

          .float-two {
            right: -8px;
          }

          .trust {
            grid-template-columns: 1fr;
            padding: 30px 6%;
          }

          .categories,
          .products {
            padding-left: 6%;
            padding-right: 6%;
          }

          .section-top h2,
          .products-header h2 {
            font-size: 35px;
          }

          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .products-header {
            display: block;
          }

          .products-header p {
            margin-top: 8px;
          }

          .product-grid {
            grid-template-columns: 1fr;
          }

          .product-image {
            height: 250px;
          }

          .about {
            padding: 70px 6%;
          }

          .about h2 {
            font-size: 40px;
          }

          .cta {
            padding: 75px 6%;
          }

          .cta h2 {
            font-size: 38px;
          }

          .footer {
            padding: 35px 6%;
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="app">

        {/* HEADER */}
        <header className="header">
          <div className="logo">
            Mobi<span className="logo-dot">.</span>flex
          </div>

          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-btn"
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </header>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">MOBILE ACCESSORIES & EVERYDAY TECH</p>

            <h1>
              Upgrade your
              <br />
              <span>mobile experience.</span>
            </h1>

            <p className="hero-text">
              Discover quality mobile accessories designed for everyday
              use. Simple products, modern style and easy ordering with
              Mobi.flex.
            </p>

            <div className="hero-actions">
              <a href="#products" className="primary-btn">
                Explore Products
              </a>

              <a href="#about" className="secondary-btn">
                About Mobi.flex
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="device">
              <div className="device-text">M</div>
            </div>

            <div className="floating float-one">
              <strong>Premium</strong>
              <small>Selected accessories</small>
            </div>

            <div className="floating float-two">
              <strong>Easy Order</strong>
              <small>Direct WhatsApp</small>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="trust">
          <div className="trust-item">
            <div className="trust-icon">✓</div>
            <div>
              <strong>Quality Products</strong>
              <p>Carefully selected accessories</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">₹</div>
            <div>
              <strong>Fair Prices</strong>
              <p>Good value for everyday use</p>
            </div>
          </div>

          <div className="trust-item">
            <div className="trust-icon">↗</div>
            <div>
              <strong>Easy Ordering</strong>
              <p>Order directly through WhatsApp</p>
            </div>
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories">
          <div className="section-top">
            <p>SHOP BY CATEGORY</p>
            <h2>Everything you need.</h2>
          </div>

          <div className="category-grid">
            <div className="category">
              <div className="category-icon">📱</div>
              <span>Cases</span>
            </div>

            <div className="category">
              <div className="category-icon">🛡️</div>
              <span>Protection</span>
            </div>

            <div className="category">
              <div className="category-icon">⚡</div>
              <span>Charging</span>
            </div>

            <div className="category">
              <div className="category-icon">🎧</div>
              <span>Audio</span>
            </div>

            <div className="category">
              <div className="category-icon">🔋</div>
              <span>Power</span>
            </div>

            <div className="category">
              <div className="category-icon">🎮</div>
              <span>Gaming</span>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="products" id="products">
          <div className="products-header">
            <div>
              <h2>Featured products</h2>
            </div>

            <p>Quality accessories for your everyday tech.</p>
          </div>

          <div className="product-grid">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <div className="product-image">
                  {product.icon}
                </div>

                <div className="product-category">
                  {product.category}
                </div>

                <h3>{product.name}</h3>

                <p className="product-description">
                  {product.description}
                </p>

                <div className="product-bottom">
                  <div className="price">{product.price}</div>

                  <button
                    className="order-btn"
                    onClick={() => orderProduct(product.name)}
                  >
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="about" id="about">
          <div>
            <p className="about-label">ABOUT MOBI.FLEX</p>

            <h2>
              Simple.
              <br />
              Reliable.
              <br />
              Modern.
            </h2>
          </div>

          <div>
            <p className="about-text">
              Mobi.flex is focused on making useful mobile accessories
              easier to discover and order. We aim to combine clean
              design, useful products and a simple customer experience.
            </p>

            <div className="about-points">
              <div className="about-point">✓ Carefully selected products</div>
              <div className="about-point">✓ Simple and transparent pricing</div>
              <div className="about-point">✓ Direct customer support</div>
              <div className="about-point">✓ Easy WhatsApp ordering</div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="cta" id="contact">
          <p className="cta-label">READY TO SHOP?</p>

          <h2>
            Find your next mobile essential.
          </h2>

          <a
            className="whatsapp-btn"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hello Mobi.flex, I would like to know more about your products."
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footer-logo">Mobi.flex</div>

          <p>Quality accessories. Better everyday tech.</p>

          <small>© 2026 Mobi.flex</small>
        </footer>

      </div>
    </>
  );
}

export default App;