function Contact() {
  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textPrimary mb-4">
            Contact Us Today
          </h2>
          <p className="font-lato text-lg text-textPrimary max-w-2xl mx-auto">
            Ready to get rid of pests? Schedule an inspection or contact us for a free consultation.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-xl shadow-md">
            <h3 className="font-poppins font-semibold text-2xl mb-6 text-textPrimary">
              Send Us a Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-lato text-textPrimary mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-lato text-textPrimary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-lato text-textPrimary mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-lato text-textPrimary mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-accent text-white rounded-lg font-poppins font-medium transition-all duration-300 hover:bg-opacity-90"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                  <i className="lni lni-envelope text-accent text-xl"></i>
                </div>
                <h4 className="font-poppins font-semibold text-lg text-textPrimary">
                  Email Us
                </h4>
              </div>
              <p className="font-lato text-textPrimary pl-14">service@wecontrolbugs.com</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                  <i className="lni lni-phone text-accent text-xl"></i>
                </div>
                <h4 className="font-poppins font-semibold text-lg text-textPrimary">
                  Call Us
                </h4>
              </div>
              <p className="font-lato text-textPrimary pl-14">(407) 654-1122</p>
              <p className="font-lato text-textPrimary pl-14 text-sm">Monday - Friday: 8 AM - 4 PM</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-accent bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                  <i className="lni lni-map-marker text-accent text-xl"></i>
                </div>
                <h4 className="font-poppins font-semibold text-lg text-textPrimary">
                  Office Location
                </h4>
              </div>
              <p className="font-lato text-textPrimary pl-14">
                322 Maguire Road, <br />
                Ocoee, FL 34761
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;