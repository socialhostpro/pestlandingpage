function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Cloud Infrastructure", href: "#services" },
    { name: "Data Analytics", href: "#services" },
    { name: "Automation Solutions", href: "#services" },
    { name: "API Development", href: "#services" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="bg-white border-t border-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <i className="lni lni-checkmark-circle text-accent text-3xl mr-2"></i>
              <span className="text-xl font-poppins font-semibold text-textPrimary">
                Ryplix<span className="text-accent">.</span>
              </span>
            </div>
            <p className="font-lato text-textPrimary mb-4">
              Innovative SaaS solutions to transform your digital business experience and improve operational efficiency.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white"
                aria-label="Twitter"
              >
                <i className="lni lni-twitter-original"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white"
                aria-label="Facebook"
              >
                <i className="lni lni-facebook-original"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white"
                aria-label="Instagram"
              >
                <i className="lni lni-instagram-original"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-accent hover:text-white"
                aria-label="LinkedIn"
              >
                <i className="lni lni-linkedin-original"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-poppins font-semibold text-textPrimary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-lato text-textPrimary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <i className="lni lni-chevron-right text-xs mr-2 text-accent"></i>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-poppins font-semibold text-textPrimary mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="font-lato text-textPrimary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <i className="lni lni-chevron-right text-xs mr-2 text-accent"></i>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-poppins font-semibold text-textPrimary mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="font-lato text-textPrimary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <i className="lni lni-chevron-right text-xs mr-2 text-accent"></i>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-b border-secondary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-poppins font-semibold text-textPrimary mb-2">Subscribe to Our Newsletter</h4>
              <p className="font-lato text-textPrimary">
                Stay updated with the latest news, features, and releases.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-2 rounded-lg sm:rounded-r-none border border-secondary focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button 
                  type="submit" 
                  className="mt-2 sm:mt-0 px-6 py-2 bg-accent text-white rounded-lg sm:rounded-l-none font-poppins font-medium transition-all duration-300 hover:bg-opacity-90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-lato text-textPrimary text-sm mb-4 md:mb-0">
            © {currentYear} Ryplix Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="font-lato text-sm text-textPrimary hover:text-accent transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-lato text-sm text-textPrimary hover:text-accent transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="font-lato text-sm text-textPrimary hover:text-accent transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;