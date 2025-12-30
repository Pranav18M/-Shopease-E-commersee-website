// src/components/home/Hero.jsx

import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToFeatured = () => {
    const element = document.getElementById('featured');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201, 160, 92, 0.08) 0%, transparent 50%),
                            radial-gradient(circle at 80% 30%, rgba(212, 175, 55, 0.06) 0%, transparent 50%)`,
            animation: 'float 8s ease-in-out infinite'
          }}
        />
      </div>

      <div className="container relative z-10 text-center px-6 py-12">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
            <span className="block text-white animate-slide-up">
              Find it, Love it,
            </span>
            <span className="block bg-gradient-to-r from-primary via-primary-light to-gold bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Buy it.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Top brands. Fresh styles. Real savings.{' '}
            <span className="text-primary font-bold drop-shadow-[0_0_20px_rgba(201,160,92,0.3)]">
              Up to 70% off
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={() => navigate('/products')}
              variant="primary"
              size="large"
              icon="→"
            >
              Shop Now
            </Button>
            <Button
              onClick={scrollToFeatured}
              variant="ghost"
              size="large"
              className="text-white border-white/30 hover:border-white"
            >
              Explore
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="text-4xl text-white/60">↓</div>
        </div>
      </div>

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
      `}</style>
    </section>
  );
};

export default Hero;