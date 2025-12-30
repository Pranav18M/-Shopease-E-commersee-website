// src/components/layout/PageHeader.jsx

import { Link } from 'react-router-dom';

const PageHeader = ({ 
  title, 
  subtitle, 
  breadcrumbs = [{ label: 'Home', path: '/' }] 
}) => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 dark:from-black dark:to-gray-950 text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(201, 160, 92, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 30%, rgba(212, 175, 55, 0.2) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center space-y-4">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center justify-center gap-2 text-sm text-white/70 pt-2">
              {breadcrumbs.map((crumb, index) => (
                <div key={index} className="flex items-center gap-2">
                  {crumb.path ? (
                    <Link
                      to={crumb.path}
                      className="hover:text-primary transition-colors underline"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/90">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/40">/</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;