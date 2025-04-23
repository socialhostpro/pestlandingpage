function Hero() {
  return (
    <section id="home" className="pt-20 pb-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-textPrimary">
              Florida's Most Trusted <span className="text-accent">Pest Control</span> Service
            </h1>
            <p className="font-lato text-lg mb-8 text-textPrimary max-w-xl">
              Family-owned business serving Central Florida since 1993, providing comprehensive pest control and lawn care services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-accent text-white rounded-lg font-poppins font-medium shadow-lg transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 text-center"
              >
                Book Now
              </a>
              <a
                href="#services"
                className="px-8 py-3 bg-white border border-accent text-accent rounded-lg font-poppins font-medium transition-all duration-300 hover:bg-secondary hover:border-transparent text-center"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/assets/images/dashboard.svg" 
                  alt="Ryplix Dashboard" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent bg-opacity-10 rounded-full z-0"></div>
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary bg-opacity-50 rounded-full z-0"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <i className="lni lni-users text-accent text-3xl mr-3"></i>
              <h3 className="font-poppins font-semibold text-xl">2.5K+</h3>
            </div>
            <p className="font-lato text-textPrimary">Active Users</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <i className="lni lni-star-filled text-accent text-3xl mr-3"></i>
              <h3 className="font-poppins font-semibold text-xl">98%</h3>
            </div>
            <p className="font-lato text-textPrimary">Satisfaction Rate</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <i className="lni lni-rocket text-accent text-3xl mr-3"></i>
              <h3 className="font-poppins font-semibold text-xl">15+</h3>
            </div>
            <p className="font-lato text-textPrimary">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;