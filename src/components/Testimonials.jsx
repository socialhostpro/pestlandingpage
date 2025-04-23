import React from 'react';

function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Winter Garden, FL",
      rating: 5,
      text: "Excellent service! They completely eliminated our ant problem and provided great preventive solutions. The technicians are always professional and punctual."
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Ocoee, FL",
      rating: 5,
      text: "Been using their lawn care service for 2 years now. My yard has never looked better. Very reliable and thorough with their treatments."
    },
    {
      id: 3,
      name: "David Thompson",
      location: "Orlando, FL",
      rating: 5,
      text: "The mosquito treatment program has made our backyard enjoyable again. Great customer service and effective solutions!"
    }
  ];

  const competitors = [
    {
      name: "Our Company",
      features: [
        { label: "Family Owned", value: true },
        { label: "Same-Day Service", value: true },
        { label: "Free Inspections", value: true },
        { label: "Local Expertise", value: true },
        { label: "Eco-Friendly Options", value: true }
      ]
    },
    {
      name: "Florida's Finest",
      features: [
        { label: "Family Owned", value: true },
        { label: "Same-Day Service", value: false },
        { label: "Free Inspections", value: true },
        { label: "Local Expertise", value: true },
        { label: "Eco-Friendly Options", value: false }
      ]
    },
    {
      name: "Terminix",
      features: [
        { label: "Family Owned", value: false },
        { label: "Same-Day Service", value: false },
        { label: "Free Inspections", value: true },
        { label: "Local Expertise", value: false },
        { label: "Eco-Friendly Options", value: true }
      ]
    },
    {
      name: "Orkin",
      features: [
        { label: "Family Owned", value: false },
        { label: "Same-Day Service", value: true },
        { label: "Free Inspections", value: true },
        { label: "Local Expertise", value: false },
        { label: "Eco-Friendly Options", value: true }
      ]
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary bg-opacity-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Reviews */}
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-textPrimary mb-4">
            What Our Customers Say
          </h2>
          <p className="font-lato text-lg text-textPrimary max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their pest control needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex text-accent">
                  {[...Array(review.rating)].map((_, index) => (
                    <i key={index} className="lni lni-star-filled"></i>
                  ))}
                </div>
              </div>
              <p className="font-lato text-textPrimary mb-4">"{review.text}"</p>
              <div className="font-poppins text-sm">
                <span className="font-semibold text-textPrimary">{review.name}</span>
                <span className="text-textSecondary ml-2">{review.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Competitor Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="font-poppins font-bold text-2xl text-textPrimary mb-8 text-center">
            Why Choose Us?
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-secondary">
                  <th className="px-4 py-2 text-left font-poppins text-textPrimary">Features</th>
                  {competitors.map((competitor, index) => (
                    <th 
                      key={index} 
                      className={`px-4 py-2 text-center font-poppins ${index === 0 ? 'text-accent' : 'text-textPrimary'}`}
                    >
                      {competitor.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitors[0].features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-secondary">
                    <td className="px-4 py-3 font-lato text-textPrimary">{feature.label}</td>
                    {competitors.map((competitor, competitorIndex) => (
                      <td key={competitorIndex} className="px-4 py-3 text-center">
                        {competitor.features[featureIndex].value ? (
                          <i className="lni lni-checkmark text-accent"></i>
                        ) : (
                          <i className="lni lni-close text-red-500"></i>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;