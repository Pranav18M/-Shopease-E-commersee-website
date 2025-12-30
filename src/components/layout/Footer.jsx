// src/components/layout/Footer.jsx

import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Products', path: '/products' },
        { label: 'Wishlist', path: '/wishlist' },
        { label: 'Cart', path: '/cart' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', path: '#' },
        { label: 'Shipping Info', path: '#' },
        { label: 'Returns', path: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: '📘', label: 'Facebook', url: '#' },
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '📷', label: 'Instagram', url: '#' },
  ];

  return (
    <footer className="bg-black text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">ShopEase</h4>
            <p className="text-white/70 leading-relaxed">
              Your trusted shopping companion for the best deals and quality products.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  aria-label={social.label}
                  className="w-11 h-11 flex items-center justify-center bg-white/10 hover:bg-primary rounded-lg transition-all hover:-translate-y-1 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-lg font-bold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.path.startsWith('#') ? (
                      <a
                        href={link.path}
                        className="text-white/70 hover:text-primary transition-colors hover:underline"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-white/70 hover:text-primary transition-colors hover:underline"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Contact</h4>
            <div className="space-y-2 text-white/70">
              <p className="flex items-center gap-2">
                <span>📧</span>
                support@shopease.com
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span>
                +91 9344810862
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} ShopEase. Thank you for shopping with us - we look forward to serving you again
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;