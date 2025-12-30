// src/components/home/Newsletter.jsx

import { useState } from 'react';
import Button from '../common/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email) {
      // Simulate newsletter signup
      setShowSuccess(true);
      setEmail('');
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 overflow-hidden border-t-4 border-b-4 border-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Text Content */}
            <div className="text-center lg:text-left lg:flex-1">
              <h3 className="text-3xl md:text-4xl font-black mb-3">
                Stay in the Loop
              </h3>
              <p className="text-lg text-white/80">
                Get exclusive deals and updates delivered to your inbox
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="w-full lg:w-auto lg:flex-1">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-4 rounded-lg bg-white/15 backdrop-blur-lg border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:bg-white/25 focus:border-primary transition-all"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-primary border-primary hover:bg-primary-dark"
                >
                  Subscribe
                </Button>
              </form>

              {/* Success Message */}
              {showSuccess && (
                <p className="mt-3 text-primary font-semibold text-center sm:text-left animate-slide-up">
                  ✓ Thanks for subscribing! Check your inbox.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;