// src/components/home/Features.jsx

const Features = () => {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹1500',
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: '30-day hassle-free return policy',
    },
    {
      icon: '💳',
      title: 'Secure Payment',
      description: 'Multiple payment options available',
    },
    {
      icon: '⭐',
      title: 'Quality Products',
      description: 'Verified brands and authentic products',
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;