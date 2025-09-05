// components/site/SiteFooter.tsx
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import Logo from "./Logo";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/about#mission" },
    { name: "Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Wellness Retreats", href: "/retreats/wellness" },
    { name: "Corporate Retreats", href: "/retreats/corporate" },
    { name: "Community Tours", href: "/tours/community" },
    { name: "MICE Tours", href: "/tours/mice" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Travel Insurance", href: "/insurance" },
    { name: "Booking Terms", href: "/terms" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cancellation Policy", href: "/cancellation" },
    { name: "Refund Policy", href: "/refunds" },
  ],
};

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Twitter", href: "#", icon: Twitter },
];

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="flex items-center space-x-2 font-heading font-bold text-2xl text-gradient mb-4"
            >
              <Logo height={100} width={100} />
            </Link>
            <p className="text-muted mb-6 leading-relaxed">
              Creating transformative experiences through immersive wellness
              retreats, inspiring corporate offsites, and meaningful cultural
              journeys across India, Oman, and Seychelles.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm">hello@retreatsbytraveon.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-muted hover:text-primary transition-smooth text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-muted hover:text-primary transition-smooth text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    className="text-muted hover:text-primary transition-smooth text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold mb-4">Stay Connected</h3>
            <p className="text-muted text-sm mb-4">
              Get retreat updates and wellness tips
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-muted"
              />
              <Button variant="cta" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-smooth"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Retreats by Traveon. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                className="text-muted hover:text-primary transition-smooth text-sm"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
