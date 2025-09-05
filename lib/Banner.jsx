

const Banner = () => {
  return (
    <section id="home-section" className="hero-area section-link relative">
  <div className="ecosystem-icon-animation relative">
    <div className="ecosystem-icon ecosystem-icon-1 absolute">
      <img src="/icon/1.png" alt="image" />
    </div>
    <div className="ecosystem-icon ecosystem-icon-2 absolute">
      <img src="/icon/2.png" alt="image" />
    </div>
    <div className="ecosystem-icon ecosystem-icon-3 absolute">
      <img src="/icon/3.png" alt="image" />
    </div>
    <div className="ecosystem-icon ecosystem-icon-4 absolute">
      <img src="/icon/4.png" alt="image" />
    </div>
    <div className="ecosystem-icon ecosystem-icon-5 absolute">
      <img src="/icon/5.png" alt="image" />
    </div>
    <div className="ecosystem-icon ecosystem-icon-6 absolute">
      <img src="/icon/6.png" alt="image" />
    </div>
  </div>

  <div className="ellipse ellipse-1 absolute"></div>
  <div className="ellipse ellipse-2 absolute"></div>
  <div className="toplight absolute">
    <span className="small-shadow block"></span>
  </div>

  <div className="hero-line hero-line1 absolute">
    <img src="/bg/line.png" alt="img" />
  </div>
  <div className="hero-line hero-line2 absolute">
    <img src="/bg/line.png" alt="img" />
  </div>

  <div className="dots-background dotsBackground absolute"></div>

  <div className="hero-card hero-card1 absolute">
    <h3>ECM Holders</h3>
    <p>20,153</p>
  </div>
  <div className="hero-card hero-card2 absolute">
    <h3>Total ECM Sold</h3>
    <p>20,153</p>
  </div>

  <div className="container mx-auto px-4">
    <div className="hero-content">
      <div className="style-2">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <div className="hero-title reveal-wrapper">
              <h1>
                Architecting the Future of Digital Commerce MetaFusion Labs
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="style-3 mt-5">
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="hero-title reveal-wrapper">
              <p className="text-center mt-5">
                Powering ECM Coin and its ecosystem—delivering scalable,
                low-cost, blockchain infrastructure for e-commerce, trading
                and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="hero-btn-wrapper relative mt-5">
          <a href="#" className="hero-btn relative inline-flex items-center px-6 py-3 rounded-lg">
            <div className="light-particle absolute"></div>
            <div className="light-particle absolute"></div>
            <div className="light-particle absolute"></div>
            <span>
              Start Exploring
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Banner;
