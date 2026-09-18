import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <span>M</span>obi.flex
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="shop-btn">Shop Now</button>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-text">
          <p className="tagline">SMART ACCESSORIES. BETTER LIFE.</p>

          <h1>
            Upgrade Your
            <br />
            <span>Mobile Experience.</span>
          </h1>

          <p className="hero-description">
            Discover quality mobile accessories and everyday tech,
            carefully selected for style, performance and value.
          </p>

          <div className="hero-buttons">
            <a href="#products" className="primary-btn">
              Explore Products
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="product-circle">
            <div className="phone-icon">📱</div>
          </div>

          <div className="floating-card card-one">
            <strong>Premium</strong>
            <small>Quality Products</small>
          </div>

          <div className="floating-card card-two">
            <strong>Trusted</strong>
            <small>Selected for you</small>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div>
          <span>✓</span>
          <div>
            <strong>Quality Products</strong>
            <p>Carefully selected accessories</p>
          </div>
        </div>

        <div>
          <span>✓</span>
          <div>
            <strong>Best Value</strong>
            <p>Great products at fair prices</p>
          </div>
        </div>

        <div>
          <span>✓</span>
          <div>
            <strong>Easy Ordering</strong>
            <p>Simple WhatsApp ordering</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="products">
        <div className="section-heading">
          <p>OUR COLLECTION</p>
          <h2>Featured Products</h2>
          <span>
            Everyday essentials for your smartphone and technology.
          </span>
        </div>

        <div className="product-grid">
          <div className="product">
            <div className="product-image">📱</div>
            <h3>Premium Phone Cases</h3>
            <p>Stylish protection for your device.</p>
            <button>View Product</button>
          </div>

          <div className="product">
            <div className="product-image">🔌</div>
            <h3>Fast Chargers</h3>
            <p>Reliable charging for everyday use.</p>
            <button>View Product</button>
          </div>

          <div className="product">
            <div className="product-image">🎧</div>
            <h3>Audio Accessories</h3>
            <p>Enjoy your music wherever you go.</p>
            <button>View Product</button>
          </div>

          <div className="product">
            <div className="product-image">🛡️</div>
            <h3>Tempered Glass</h3>
            <p>Extra protection for your display.</p>
            <button>View Product</button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="section-label">ABOUT MOBI.FLEX</p>
          <h2>Simple. Reliable. Modern.</h2>
        </div>

        <p>
          Mobi.flex is built around one simple idea — making quality mobile
          accessories easier to find. We focus on useful products, clean
          design and a straightforward buying experience.
        </p>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <p>READY TO UPGRADE?</p>
        <h2>Find your next essential accessory.</h2>

        <a
          href="https://wa.me/919380771682""
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          <span>M</span>obi.flex
        </div>

        <p>Quality accessories. Better everyday tech.</p>

        <small>© 2026 Mobi.flex. All rights reserved.</small>
      </footer>
    </div>
  
}

export default App;