function Services() {
  const services = [
    {
      id: 1,
      title: "Pest Control",
      description: "Comprehensive solutions for residential and commercial properties, targeting common pests like ants, roaches, and rodents.",
      icon: "lni lni-bug",
    },
    {
      id: 2,
      title: "Lawn & Shrub Care",
      description: "Customized programs for various grass types, focusing on fertility, insect control, and soil health.",
      icon: "lni lni-leaf",
    },
    {
      id: 3,
      title: "Mosquito Treatments",
      description: "Tailored plans using barrier applications and traps to reduce mosquito populations.",
      icon: "lni lni-spray",
    },
    {
      id: 4,
      title: "Termite Control",
      description: "Utilizes TERMIDOR® termiticide for long-lasting protection against subterranean termites.",
      icon: "lni lni-protection",
    },
    {
      id: 5,
      title: "Irrigation Repair",
      description: "Services include installation, maintenance, and repair of lawn irrigation systems.",
      icon: "lni lni-water-drop",
    },
    {
      id: 6,
      title: "Aquatic Weed Control",
      description: "Year-round maintenance programs for weed and algae control in aquatic environments.",
      icon: "lni lni-waves",
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary bg-opacity-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textPrimary mb-4">
            Professional Pest Control Services
          </h2>
          <p className="font-lato text-lg text-textPrimary max-w-2xl mx-auto">
            Protecting your home and business with comprehensive pest management solutions since 1993.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mr-4">
                  <i className={`${service.icon} text-accent text-2xl`}></i>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-textPrimary">{service.title}</h3>
              </div>
              <p className="font-lato text-textPrimary ml-16">{service.description}</p>
              <div className="mt-4 ml-16">
                <a 
                  href="#contact" 
                  className="font-poppins font-medium text-accent flex items-center hover:underline"
                >
                  Learn more
                  <i className="lni lni-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-accent text-white p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-poppins font-bold text-2xl md:text-3xl mb-2">Ready for a pest-free environment?</h3>
            <p className="font-lato text-white text-opacity-90">
              Schedule your inspection today and take the first step towards a cleaner, safer space.
            </p>
          </div>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white text-accent rounded-lg font-poppins font-medium shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;