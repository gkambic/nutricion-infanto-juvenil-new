// src/components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'primeflex/primeflex.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container p-4">
        <div className="p-grid">
          {/* Columna 1: Logo y descripción */}
          <div className="p-col-12 p-md-6 p-lg-4">
            <div className="p-mr-4">
              <div className="mb-3">
                <Link href="/" legacyBehavior>
                  <a>
                    <Image
                      src="/img/logos/logo-inner.png"
                      alt="Logo"
                      width={150}
                      height={50}
                      objectFit="contain"
                    />
                  </a>
                </Link>
              </div>
              <p className="mb-3" style={{ opacity: 0.9 }}>
                We have been the most trusted “Health care Nutrition” guide for 25 years, &amp; we are proud of our rich history.
              </p>
              <div className="flex align-items-center">
                <a href="#!" className="p-mr-2 text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="p-mr-2 text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="p-mr-2 text-white">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="#!" className="text-white">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2: Quick Links */}
          <div className="p-col-12 p-md-6 p-lg-2">
            <h3 className="text-secondary mb-3">Quick Links</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-2">
                <Link href="/about-us" legacyBehavior>
                  <a className="text-white">About Us</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/our-team" legacyBehavior>
                  <a className="text-white">Our Team</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/our-services" legacyBehavior>
                  <a className="text-white">Services</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/blog-list" legacyBehavior>
                  <a className="text-white">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="text-white">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Opening Hours */}
          <div className="p-col-12 p-md-6 p-lg-3">
            <h3 className="text-secondary mb-3">Opening Hours</h3>
            <ul className="list-none p-0 m-0">
              <li className="mb-3 flex align-items-center">
                <i className="pi pi-clock text-white p-mr-2"></i>
                <div>
                  <h4 className="h6 text-white mb-0">Monday - Friday</h4>
                  <small className="text-white">8:00 AM - 5:00 PM</small>
                </div>
              </li>
              <li className="mb-3 flex align-items-center">
                <i className="pi pi-clock text-white p-mr-2"></i>
                <div>
                  <h4 className="h6 text-white mb-0">Saturday</h4>
                  <small className="text-white">9:00 AM - 4:00 PM</small>
                </div>
              </li>
              <li className="flex align-items-center">
                <i className="pi pi-clock text-white p-mr-2"></i>
                <div>
                  <h4 className="h6 text-white mb-0">Sunday</h4>
                  <small className="text-white">Closed</small>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4: Get In Touch */}
          <div className="p-col-12 p-md-6 p-lg-3">
            <h3 className="text-secondary mb-3">Get In Touch</h3>
            <p className="mb-3" style={{ opacity: 0.9 }}>
              Lorem ipsum dolor sit amet, adipiscing elit. Sed lorem quis venenatis euismod.
            </p>
            <div className="p-inputgroup">
              <InputText placeholder="Enter Your Email" />
              <Button label="Subscribe" icon="pi pi-envelope" />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="footer-bar py-3">
        <div className="container text-center">
          <p className="text-white mb-0">
            © {new Date().getFullYear()} Lifestyle Powered By{' '}
            <Link href="/" legacyBehavior>
              <a className="text-secondary">Chitrakoot Web</a>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
