import React from 'react';
import { Container } from '@/components/ui';
import { Button } from '@/components/ui';

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-brand-border shadow-soft">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-h2 font-bold text-brand-primary tracking-widest">
              SILKROADS
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-body text-brand-dark hover:text-brand-primary transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-body text-brand-dark hover:text-brand-primary transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-body text-brand-dark hover:text-brand-primary transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-brand-dark border-t border-brand-border">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-h3 font-bold text-brand-primary tracking-widest">
              SILKROADS
            </span>
            <p className="text-small text-brand-muted max-w-xs">
              Your gateway to seamless digital experiences along the modern silk roads of commerce.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-body font-semibold text-white">
              Navigation
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-body font-semibold text-white">
              Legal
            </span>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-border py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-small text-brand-muted">
            &copy; {new Date().getFullYear()} SILKROADS. All rights reserved.
          </p>
          <p className="text-small text-brand-muted">
            Built with care &amp; precision.
          </p>
        </div>
      </Container>
    </footer>
  );
};

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-brand-light" />
      <Footer />
    </div>
  );
};

export default HomePage;