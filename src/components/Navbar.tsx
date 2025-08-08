import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Car, Users, MapPin, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const isActive = (path: string) => location.pathname === path;
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex space-x-1">
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-primary transform rotate-90 group-hover:scale-110 transition-transform"></div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-primary transform rotate-90 group-hover:scale-110 transition-transform delay-75"></div>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-primary transform rotate-90 group-hover:scale-110 transition-transform delay-150"></div>
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-primary-light transition-colors">
              PARKLINK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/find-parking" 
              className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                isActive('/find-parking') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              <MapPin size={16} />
              <span>Find Parking</span>
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              About
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleTheme}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
            <Link to="/login">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-hero">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/find-parking" 
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                <MapPin size={18} />
                <span>Find Parking</span>
              </Link>
              <Link 
                to="/about" 
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={toggleMobileMenu}
              >
                About
              </Link>
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  onClick={toggleTheme}
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={16} className="mr-2" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={16} className="mr-2" />
                      Dark Mode
                    </>
                  )}
                </Button>
                <Link to="/login" className="block" onClick={toggleMobileMenu}>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Login
                  </Button>
                </Link>
                <Link to="/signup" className="block" onClick={toggleMobileMenu}>
                  <Button className="w-full btn-hero">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;