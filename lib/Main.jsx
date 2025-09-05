
const Main = () => {
return (
<main>
  <section id="about" className="empower-area section-link relative">
    <div className="ellipse ellipse-3 absolute"></div>
    <div className="dots-background dotsBackground absolute"></div>

    {/* lottifile loading animation start */}
    <div id="lottie-empower"></div>
    {/* lottifile loading animation End */}

    <div className="container empower-container mx-auto px-4">
      <div className="empower-content">
        <div className="grid grid-cols-12 empower-top gap-4">
          {/* 1.single item start */}
          <div className="col-span-12 lg:col-span-6 xl:col-span-6">
            <div className="empower-head-text text-center lg:text-left">
              <h2>Empowering the Future of Blockchain</h2>
              <p>
                MetaFusion Labs is a blockchain solutions company officially
                registered in Panama, serving as the parent organization
                behind the ECM Ecosystem. With a strong focus on developing
                decentralized infrastructure, MetaFusion Labs partners
                strategically with BlockVerse Solutions LLC—an industry
                leader in token issuance and blockchain development—to
                deliver scalable, innovative Web3 solutions.
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <div className="logo-thumbnails">
              <div className="logo-thumbnails-set" id="target-box"></div>
            </div>
            <div className="empower-image-flip block xl:hidden">
              <img src="/bg/empower.png" alt="image" />
            </div>
          </div>
          {/* 1.single item End */}
        </div>

        <div className="empower-bottom mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {/* 1.single empower card start */}
            <div className="single-empower-card single-empower-card-1">
              <div className="flex mb-4 md:mb-0 md:flex-col gap-3 items-center md:items-start">
                <img className="empower-icon" src="/icon/power-1.png" alt="image" />
                <h3 className="p-0 pt-3 md:pt-3 pb-3 md:pb-3">Blockchain Infrastructure</h3>
              </div>
              <p>
                MetaFusion Labs is a blockchain solutions company officially registered in Panama, serving as the parent organization behind the ECM Ecosystem.
              </p>
            </div>
            {/* 1.single empower card End */}

            {/* 2.single empower card start */}
            <div className="single-empower-card">
              <div className="flex mb-4 md:mb-0 md:flex-col gap-3 items-center md:items-start">
                <img className="empower-icon" src="/icon/power-2.png" alt="image" />
                <h3 className="p-0 pt-3 md:pt-3 pb-3 md:pb-3">Ensure Accessibility</h3>
              </div>
              <p>
                Make Web3 tools and platforms easy to use and available to everyone—businesses and individuals alike.
              </p>
            </div>
            {/* 2.single empower card End */}

            {/* 3.single empower card start */}
            <div className="single-empower-card single-empower-card-3">
              <div className="flex mb-4 md:mb-0 md:flex-col gap-3 items-center md:items-start">
                <img className="empower-icon" src="/icon/power-3.png" alt="image" />
                <h3 className="p-0 pt-3 md:pt-3 pb-3 md:pb-3">Bridge Finance & Comm-erce</h3>
              </div>
              <p>
                Develop robust systems capable of supporting large-scale dece-ntralized applications.
              </p>
            </div>
            {/* 3.single empower card End */}

            {/* 4.single empower card start */}
            <div className="single-empower-card">
              <div className="flex mb-4 md:mb-0 md:flex-col gap-3 items-center md:items-start">
                <img className="empower-icon" src="/icon/power-4.png" alt="image" />
                <h3 className="p-0 pt-3 md:pt-3 pb-3 md:pb-3">Champion Decentralization</h3>
              </div>
              <p>
                Promote transparent, decentralized technologies that empower users and remove centralized control.
              </p>
            </div>
            {/* 4.single empower card End */}
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
)
}

export default Main