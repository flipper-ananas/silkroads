import React from "react";
import { Container } from "@/components/ui";
import { Button } from "@/components/ui";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-brand-border shadow-soft sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <span className="text-h2 font-bold text-brand-primary tracking-tight">
              SILKROADS
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-body text-brand-muted hover:text-brand-primary transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-body text-brand-muted hover:text-brand-primary transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#"
              className="text-body text-brand-muted hover:text-brand-primary transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-body text-brand-muted hover:text-brand-primary transition-colors duration-200"
            >
              About
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              Log in
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
            <span className="text-h3 font-bold text-white tracking-tight">
              SILKROADS
            </span>
            <p className="text-body text-brand-muted max-w-xs">
              Your modern SaaS platform. Built for teams who move fast.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-small font-semibold text-brand-secondary uppercase tracking-widest">
              Product
            </span>
            <ul className="flex flex-col gap-2">
              {["Features", "Pricing", "Changelog", "Roadmap"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-body text-brand-muted hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-small font-semibold text-brand-secondary uppercase tracking-widest">
              Company
            </span>
            <ul className="flex flex-col gap-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-body text-brand-muted hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-small text-brand-muted">
            © {new Date().getFullYear()} SILKROADS. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-small text-brand-muted hover:text-brand-secondary transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

const HomepageLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-brand-light" />
      <Footer />
    </div>
  );
};

export default HomepageLayout;