function Features() {
  const features = [
    {
      icon: "lni lni-shield",
      title: "Advanced Security",
      description: "Enterprise-grade security with end-to-end encryption and compliance with industry standards.",
    },
    {
      icon: "lni lni-cog",
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows through our robust API.",
    },
    {
      icon: "lni lni-stats-up",
      title: "Powerful Analytics",
      description: "Gain valuable insights with comprehensive analytics and custom reporting features.",
    },
    {
      icon: "lni lni-layers",
      title: "Scalable Solution",
      description: "Our infrastructure grows with your business, ensuring performance at any scale.",
    },
    {
      icon: "lni lni-timer",
      title: "Real-time Updates",
      description: "Stay on top of changes with instant notifications and real-time data synchronization.",
    },
    {
      icon: "lni lni-support",
      title: "24/7 Support",
      description: "Our dedicated team is available around the clock to address your concerns.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textPrimary mb-4">
            Powerful Features
          </h2>
          <p className="font-lato text-lg text-textPrimary max-w-2xl mx-auto">
            Discover why businesses choose Ryplix Solutions for their SaaS needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 bg-primary rounded-xl transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <i className={`${feature.icon} text-accent text-2xl`}></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-textPrimary">
                {feature.title}
              </h3>
              <p className="font-lato text-textPrimary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-poppins font-medium transition-all duration-300 hover:shadow-xl hover:bg-opacity-90"
          >
            Learn More About Our Features
          </a>
        </div>
      </div>
    </section>
  );
}

export default Features;