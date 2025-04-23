import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textPrimary mb-6">
              Your Trusted Family-Owned Pest Control Service Since 1993
            </h2>
            <p className="font-lato text-lg text-textPrimary mb-6">
              For over 30 years, we've been protecting Central Florida homes and businesses from unwanted pests. As a family-owned business, we understand the importance of creating safe, pest-free environments for your family.
            </p>
            <p className="font-lato text-lg text-textPrimary mb-6">
              Our service area spans across Central Florida, providing comprehensive pest control solutions to residential and commercial properties in Orlando, Ocoee, Winter Garden, and surrounding areas.
            </p>
            <div className="bg-secondary bg-opacity-50 p-6 rounded-lg mb-6">
              <h3 className="font-poppins font-semibold text-xl text-textPrimary mb-3">
                Why Choose Us?
              </h3>
              <ul className="font-lato text-textPrimary space-y-2">
                <li className="flex items-center">
                  <i className="lni lni-checkmark text-accent mr-2"></i>
                  Licensed and certified professionals
                </li>
                <li className="flex items-center">
                  <i className="lni lni-checkmark text-accent mr-2"></i>
                  30+ years of industry experience
                </li>
                <li className="flex items-center">
                  <i className="lni lni-checkmark text-accent mr-2"></i>
                  Eco-friendly treatment options
                </li>
                <li className="flex items-center">
                  <i className="lni lni-checkmark text-accent mr-2"></i>
                  100% satisfaction guarantee
                </li>
              </ul>
            </div>
          </div>

          {/* Certifications and Awards Section */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-poppins font-semibold text-2xl text-textPrimary mb-6">
                Professional Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-secondary bg-opacity-20 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mb-3">
                    <i className="lni lni-certificate text-accent text-2xl"></i>
                  </div>
                  <h4 className="font-poppins font-medium text-lg text-textPrimary mb-2">
                    Licensed Operators
                  </h4>
                  <p className="font-lato text-textPrimary">
                    State certified and licensed pest control operators
                  </p>
                </div>
                <div className="p-4 bg-secondary bg-opacity-20 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mb-3">
                    <i className="lni lni-shield text-accent text-2xl"></i>
                  </div>
                  <h4 className="font-poppins font-medium text-lg text-textPrimary mb-2">
                    QualityPro Certified
                  </h4>
                  <p className="font-lato text-textPrimary">
                    Meeting highest industry standards
                  </p>
                </div>
                <div className="p-4 bg-secondary bg-opacity-20 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mb-3">
                    <i className="lni lni-graduation text-accent text-2xl"></i>
                  </div>
                  <h4 className="font-poppins font-medium text-lg text-textPrimary mb-2">
                    Ongoing Training
                  </h4>
                  <p className="font-lato text-textPrimary">
                    Regular staff training and certification
                  </p>
                </div>
                <div className="p-4 bg-secondary bg-opacity-20 rounded-lg">
                  <div className="w-12 h-12 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mb-3">
                    <i className="lni lni-leaf text-accent text-2xl"></i>
                  </div>
                  <h4 className="font-poppins font-medium text-lg text-textPrimary mb-2">
                    Green Certified
                  </h4>
                  <p className="font-lato text-textPrimary">
                    Eco-friendly pest control methods
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;