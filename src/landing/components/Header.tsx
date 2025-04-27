
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] backdrop-blur-md bg-black/80 border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-16 lg:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">
                allbots
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              to="/blog"
              className="hidden md:block text-white/70 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                to="/login"
                className="text-white/70 hover:text-white transition-colors"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-xl bg-accent hover:bg-accent/90 text-white transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
